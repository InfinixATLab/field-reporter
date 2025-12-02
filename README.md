* IMPORTANTE: Não inicie este desafio sem autorização. O desafio só poderá ser iniciado no dia e horário agendado via Google Meet. Entre em contato via email ou whatsapp:
  - administrativo@infinixassessoria.com.br
  - (21) 99515-2411

# FIELD REPORTER

## Sobre
**Stack**: DRF + React Native + Expo Go + Axios
**Escopo**: Um app para técnicos de campo reportarem problemas com equipamentos.

## Requisitos Essenciais (Timebox 4h)

#### Backend

1. Modelos: Crie um app **report**, e defina o modelo Report com os campos:
    - title: CharField
    - description: TextField
    - status (Select: 'PENDING', 'RESOLVED')
2. Exponha endpoints para listar e criar *Reports*.
3. Teste de Rede: O backend deve estar configurado para ser acessível externamente (0.0.0.0:8000), não apenas em *127.0.0.1* por exemplo.

#### Mobile
1. Axios: Configure a URL base do Axios.
2. Tela 1: Feed (/) — Uma *FlatList* monstrando os reports existentes.
3. Ação: Um botão "Resolver" em cada item da lista que envia um PATCH para o backend mudando o status para 'RESOLVED' e muda a cor do item na lista localmente.

#### Bônus (Desejáveis):
    - Atualização: Implemente a atualização da lista ao puxar a tela para baixo.
    - Ambiente: Utilize variáveis de ambiente expo para a URL base do axios.

# Rubrica de Avaliação

| Dimensão Avaliada                        | Peso  | Pontuação (1-5) | Descrição da Avaliação (O que procurar)                                                                                                                                                                                                 |
|------------------------------------------|-------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1. Funcionalidade (Requisitos Essenciais)** | 40%  | [1-5]           | **5 (Excelente):** Cumpriu 100% dos requisitos essenciais. A aplicação roda de primeira, sem bugs óbvios. Trata estados de loading/error.<br>**3 (Satisfatório):** Cumpriu a maioria (80%+) dos requisitos. Funcionalidade principal funciona, mas com bugs menores.<br>**1 (Inaceitável):** Não roda ou a funcionalidade principal está quebrada. O avaliador não consegue testar a solução. |
| **2. Qualidade de Código e Estrutura**       | 25%  | [1-5]           | **5 (Excelente):** Código limpo, legível e idiomático. Segue princípios (ex: DRY). Estrutura de pastas lógica e escalável. Tipagem (TS) útil e precisa. Separação clara de responsabilidades.<br>**3 (Satisfatório):** Código funciona, mas com repetição ou "code smells". Estrutura de pastas aceitável, mas confusa. Tipagem usada com alguns `any`.<br>**1 (Inaceitável):** "Código espaguete". Variáveis ruins. Lógica de negócio misturada com UI. "Sopa de arquivos" na raiz. |
| **3. Processo e Comunicação (Git & README)** | 25%  | [1-5]           | **5 (Excelente):** Commits atômicos, frequentes e bem descritos. PR bem escrito. README completo com setup e explicações de design.<br>**3 (Satisfatório):** Usa Git, mas commits grandes (ex: "implementa home e função de agendar tarefas e remove var desnecessária"). README mínimo com instruções básicas.<br>**1 (Inaceitável):** Um único commit ("final"). Nenhum README ou instruções. Demonstra falta de profissionalismo e comunicação. |
| **4. Bônus e Resolução de Problemas**        | 10%  | [1-5]           | **5 (Excelente):** Implementou requisitos bônus funcionando. README explica como utilizar.<br>**3 (Satisfatório):** Tentou implementar bônus, mas não funcionou. README explica falha e plano.<br>**1 (Inaceitável):** Ignorou bônus ou implementou com falhas e sem explicação no README. |

## Instruções sobre "README-CANDIDATO" (Timebox 30min):
Preencha este arquivo com informações claras e concisas, separadas pelas seguintes seções:

#### Seção 1: Instruções para rodar
- Quais variáveis de ambiente são necessárias?
- Como instalar dependências?
- Como rodar o projeto?

#### Seção 2: Decisões de design
- Qual foi a maior dificuldade que você encontrou e como superou?
- O que você não teve tempo de fazer (dentro do timebox) e como você faria se tivesse mais tempo?

#### Seção 3: Link para Deploy (Bônus)
- Cole aqui o link do projeto hospedado ou instrua como rodar via Docker.

#### Seção final: Recomendações
- Escreva aqui dicas, melhorias e recomendações sobre este desafio.

## Considerações finais:
Este desafio não foi pensado para encontrar quem o finaliza 100% ou quem o termina mais rápido. Estamos buscando um desenvolvedor sério, que saiba como desenvolver soluções mesmo que para apenas 50% do projeto. Não queremos nenhum dev que dependa 100% de IA ou de terceiros, mas sim aquele que sabe priorizar, desenvolver e pesquisar.
