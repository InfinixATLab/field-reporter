import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import api from './services/api'; // Importa nosso "carteiro" configurado

// Definindo o tipo do dado
interface Report {
  id: number;
  title: string;
  description: string;
  status: 'PENDING' | 'RESOLVED';
  created_at: string;
}

export default function App() {
  const [reports, setReports] = useState<Report[]>([]); // Guarda a lista de reports
  const [loading, setLoading] = useState(true); // Controla o ícone de carregando

  // Função para buscar os dados do backend
  async function fetchReports() {
    try {
      const response = await api.get('reports/');
      setReports(response.data);
    } catch (error) {
      console.error("Erro ao buscar reports:", error);
      Alert.alert("Erro", "Não foi possível carregar os dados.");
    } finally {
      setLoading(false);
    }
  }

  // Função para resolver um problema (PATCH)
  async function handleResolve(id: number) {
    try {
      // 1. Atualiza no Backend
      await api.patch(`reports/${id}/`, { status: 'RESOLVED' });
      
      // 2. Atualiza na Tela (localmente) para ser rápido
      setReports(prevReports => 
        prevReports.map(report => 
          report.id === id ? { ...report, status: 'RESOLVED' } : report
        )
      );
      Alert.alert("Sucesso", "Problema marcado como resolvido!");
    } catch (error) {
      console.error("Erro ao resolver:", error);
      Alert.alert("Erro", "Falha ao atualizar status.");
    }
  }

  // UseEffect roda quando a tela abre pela primeira vez
  useEffect(() => {
    fetchReports();
  }, []);

  // Desenha cada item da lista
  const renderItem = ({ item }: { item: Report }) => {
    const isResolved = item.status === 'RESOLVED';

    return (
      <View style={[styles.card, isResolved && styles.cardResolved]}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.status, isResolved ? styles.statusResolved : styles.statusPending]}>
            {item.status}
          </Text>
        </View>
        
        <Text style={styles.description}>{item.description}</Text>
        
        {!isResolved && (
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => handleResolve(item.id)}
          >
            <Text style={styles.buttonText}>Resolver</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Field Reporter</Text>
      
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{marginTop: 50}} />
      ) : (
        <FlatList
          data={reports}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          // Bônus: Puxar para atualizar
          onRefresh={fetchReports}
          refreshing={loading}
        />
      )}
    </SafeAreaView>
  );
}

// Estilos (CSS do React Native)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardResolved: {
    backgroundColor: '#e6fffa', // Fundo verdinho claro se resolvido
    borderColor: '#38b2ac',
    borderWidth: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d3748',
    flex: 1,
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  statusPending: {
    backgroundColor: '#fefcbf',
    color: '#b7791f',
  },
  statusResolved: {
    backgroundColor: '#c6f6d5',
    color: '#2f855a',
  },
  description: {
    fontSize: 14,
    color: '#4a5568',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#3182ce',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});