# 💵 Dollar Hub - Conversor de Moedas

Conversor de Real Brasileiro (BRL) para Dólar Americano (USD) e Dólar Canadense (CAD) com taxas de câmbio atualizadas em tempo real.

## 🚀 Funcionalidades

- ✅ **Conversão Bidirecional** - BRL → USD/CAD e vice-versa
- 📊 **Gráfico Comparativo** - Visualização de 7 dias de histórico
- 🎯 **Filtro por Moeda** - Clique na legenda para isolar USD ou CAD
- 📜 **Histórico Local** - Últimas 15 conversões salvas
- 🌓 **Modo Escuro** - Tema claro/escuro com persistência
- 📱 **Responsivo** - Funciona em mobile, tablet e desktop
- ♿ **Acessível** - ARIA labels e semântica HTML5

## 🛠️ Tecnologias

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estrutura semântica |
| **CSS3** | Grid, Flexbox, Custom Properties |
| **JavaScript ES6+** | Async/Await, LocalStorage, Fetch API |
| **Chart.js** | Visualização de dados |
| **AwesomeAPI** | Taxas de câmbio em tempo real |

## 📊 Funcionalidades Detalhadas

### 💱 Conversor
- Seleção entre Dólar Americano (USD) e Canadense (CAD)
- Cálculo automático de taxa de serviço baseado em faixas de valor
- Conversão inversa (Dollar → Real)
- Comparação rápida entre USD e CAD
- Atualização manual de taxas

### 📈 Gráfico Interativo
- Comparação visual USD vs CAD
- Dados dos últimos 7 dias
- **Clique na legenda** para isolar moedas:
  - Clique em USD → mostra só USD
  - Clique em CAD → mostra só CAD  
  - Clique novamente → mostra ambos
- Responsivo e adaptável ao modo escuro

### 📜 Histórico
- Armazena últimas 15 conversões
- Salvo no localStorage do navegador
- Exibe data, valor, taxa e serviço cobrado
- Botão para limpar histórico

### 💾 Sistema de Cache
- Cache de 1 hora para taxas de câmbio
- Fallback automático se API falhar
- Reduz chamadas desnecessárias à API
- Funciona parcialmente offline

## 🎯 Como Usar

### 🌐 Online (Deploy)
**Em breve:** Link do projeto ao vivo

### 💻 Localmente

**1. Clone o repositório:**
```bash
git clone https://github.com/SEU-USUARIO/dollar-hub.git
