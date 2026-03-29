```markdown
# Desafio Field Reporter – Candidato

Este documento descreve como rodar o projeto (API e Mobile), além das decisões técnicas tomadas durante o desenvolvimento.

---

## Seção 1: Instruções para Rodar o Projeto

---

##  Backend (API)

1. Navegue até a pasta `api`:
   ```bash
   cd api
   ```

2. Crie e ative um ambiente virtual:
   ```bash
   python -m venv venv

   # Windows:
   .\venv\Scripts\activate

   # Linux/Mac:
   source venv/bin/activate
   ```

3. Instale as dependências:
   ```bash
   pip install django djangorestframework django-cors-headers
   ```

4. Execute as migrações do banco:
   ```bash
   python manage.py migrate
   ```

5. Inicie o servidor (permitindo acesso externo ao mobile):
   ```bash
   python manage.py runserver 0.0.0.0:8000
   ```

---

## Mobile (Expo React Native)

1. Navegue até a pasta mobile:
   ```bash
   cd mobile
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o IP do backend:

   - Abra:
     ```
     src/services/api.ts
     ```
   - Altere `API_URL` para o seu **IPv4 local** (ipconfig / ifconfig).

4. Inicie o servidor Expo:
   ```bash
   npx expo start
   ```

5. Escaneie o QR Code usando o app **Expo Go** no celular.

---

##  Seção 2: Decisões de Design

###  Estrutura e Organização

#### Backend
- Organização em um app separado `report`.
- Uso de ModelViewSet para código mais limpo seguindo o princípio DRY.
- Backend configurado com CORS para permitir acesso do mobile.

#### Mobile
- Criação da pasta `services` para isolar `api.ts`.
- Typescript com interface `Report` para segurança de tipos.
- Implementação de **Optimistic UI** no botão “Resolver”.
- Suporte a **Pull to Refresh** na lista.

---

##  Seção 3: Dificuldades e Soluções

### Conexão Mobile ↔ Backend
- Problema comum: celular não acessa localhost.
- Solução:
  - Backend rodando em `0.0.0.0`
  - Configuração correta de CORS
  - IP local ajustado no mobile (`api.ts`)

### Atualização da Lista
- Implementado **Pull to Refresh** para dar controle ao técnico.

---

##  Seção 4: O que faria com mais tempo

- Implementar variáveis de ambiente (expo-env).
- Criar testes automatizados (Django + React Native).
- Melhorias de UX (feedbacks de erro).
- Paginação de chamados.

---

##  Seção Final: Recomendações

O maior desafio costuma ser a comunicação entre o celular e a máquina local.  
Recomendo atenção especial ao IP, firewall, CORS e porta da API.

---

##  Commits e Push

Após criar este arquivo:

```bash
git add .
git commit -m "docs: adiciona documentação do candidato"
git push origin feature-ocante
```

---

##  Checklist Final

- [x] Backend Django criado  
- [x] Banco de dados configurado  
- [x] API REST funcionando  
- [x] App Mobile criado  
- [x] Comunicação API ↔ Mobile  
- [x] Pull to Refresh  
- [x] README-CANDIDATO.md criado  
- [x] Commits e Push feitos  

**Obrigado pela avaliação!**
```
