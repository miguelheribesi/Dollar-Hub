# 💵 Dollar Hub - Conversor de Moedas Internacional

Conversor de Real Brasileiro (BRL) para Dólar Americano (USD) e Dólar Canadense (CAD) com taxas de câmbio atualizadas em tempo real e suporte a múltiplos idiomas.

## 🚀 Funcionalidades

✅ **Conversão Bidirecional** - BRL → USD/CAD e vice-versa  
🌍 **Multi-idioma** - Interface em Português, Inglês e Espanhol  
📊 **Gráfico Comparativo** - Visualização de 7 dias de histórico  
🎯 **Filtro por Moeda** - Clique na legenda para isolar USD ou CAD  
📜 **Histórico Local** - Últimas 15 conversões salvas  
🌓 **Modo Escuro** - Tema claro/escuro com persistência  
📱 **Responsivo** - Funciona em mobile, tablet e desktop  
♿ **Acessível** - ARIA labels e semântica HTML5  
💡 **Dicas e Explicações** - Guia completo sobre interpretação de taxas

## 🛠️ Tecnologias

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Estrutura semântica |
| CSS3 | Grid, Flexbox, Custom Properties, Animações |
| JavaScript ES6+ | Async/Await, LocalStorage, Fetch API, i18n |
| Chart.js | Visualização de dados interativa |
| AwesomeAPI | Taxas de câmbio em tempo real |
| FlagCDN | Bandeiras dos países |

## 📊 Funcionalidades Detalhadas

### 🌍 Sistema de Internacionalização (i18n)
- **3 idiomas completos**: Português (PT), Inglês (EN), Espanhol (ES)
- **Troca dinâmica**: Mudança instantânea sem recarregar a página
- **Persistência**: Idioma preferido salvo no navegador
- **Bandeiras visuais**: Identificação clara de cada idioma
- **Tradução completa**: Todos os textos, placeholders e alertas traduzidos

### 💱 Conversor
- Seleção entre Dólar Americano (USD) e Canadense (CAD)
- Cálculo automático de taxa de serviço baseado em faixas de valor
- Conversão inversa (Dollar → Real)
- Comparação rápida entre USD e CAD
- Atualização manual de taxas com botão refresh

### 📈 Gráfico Interativo
- Comparação visual USD vs CAD
- Dados dos últimos 7 dias
- **Interação com legenda**:
  - Clique em USD → mostra só USD
  - Clique em CAD → mostra só CAD
  - Clique novamente → mostra ambos
- Responsivo e adaptável ao modo escuro
- Labels traduzidos conforme idioma selecionado

### 📚 Seção Educativa
- **Como interpretar o gráfico**: Explicação visual de linhas altas/baixas
- **Tabela de impacto financeiro**: Mostra diferenças em valores reais
- **Dicas profissionais**: Quando comprar, vender ou esperar
- **Informações sobre moedas**: Contexto sobre BRL, USD e CAD

### 📜 Histórico
- Armazena últimas 15 conversões
- Salvo no localStorage do navegador
- Exibe data, valor, taxa e serviço cobrado
- Formatação de data conforme idioma selecionado
- Botão para limpar histórico com confirmação

### 💾 Sistema de Cache
- Cache de 1 hora para taxas de câmbio
- Fallback automático se API falhar
- Reduz chamadas desnecessárias à API
- Funciona parcialmente offline
- Indicação visual quando usando cache

## 🎯 Como Usar

### 🌐 Online (Deploy)
Acesse: [https://miguelheribesi.github.io/Dollar-Hub/](https://miguelheribesi.github.io/Dollar-Hub/)
