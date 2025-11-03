// ===== SISTEMA DE INTERNACIONALIZAÇÃO =====
const translations = {
  pt: {
    nav: {
      converter: "Conversor",
      chart: "Gráfico Comparativo",
      info: "Informações",
      contact: "Contato",
    },
    hero: {
      title: "Conversor Real para Dólar",
      subtitle:
        "Compare e converta instantaneamente entre Real Brasileiro, Dólar Americano e Dólar Canadense com taxas atualizadas em tempo real.",
    },
    converter: {
      title: "Conversor de Moedas",
    },
    currency: {
      usd: "Dólar Americano (USD)",
      cad: "Dólar Canadense (CAD)",
      usdName: "Dólar Americano",
      cadName: "Dólar Canadense",
      brl: "Real Brasileiro",
    },
    form: {
      valueInBRL: "Valor em Real (BRL):",
      enterValue: "Digite o valor em reais",
      exchangeRate: "Taxa de Câmbio",
      loadingRate: "Carregando taxa...",
      updateRate: "Atualizar taxa",
      calculate: "Calcular Conversão",
      invert: "Inverter Conversão",
      valueIn: "Valor em",
      enterDollarValue: "Digite o valor em dólares",
      convertToBRL: "Converter para Reais",
      loadingRates: "Carregando taxas...",
      normalConversion: "Conversão Normal",
    },
    comparison: {
      title: "Comparação Rápida",
    },
    chart: {
      title: "Gráfico Comparativo de Taxas",
      subtitle: "Comparação BRL → USD vs BRL → CAD (Últimos 7 dias)",
      howToInterpret: "Como interpretar este gráfico?",
      lowLine: "Linha Baixa",
      highLine: "Linha Alta",
      currencyExpensive: "Moeda está",
      currencyCheap: "Moeda está",
      expensive: "CARA",
      cheap: "BARATA",
      goodToSell: "✅ Bom para vender",
      badToBuy: "❌ Ruim para comprar",
      goodToBuy: "✅ Bom para comprar",
      badToSell: "❌ Ruim para vender",
      impactTitle: "Impacto das variações no seu bolso:",
      convertedValue: "Valor convertido",
      variation1: "Variação de 1%",
      variation3: "Variação de 3%",
      variation5: "Variação de 5%",
      exchangeRateLabel: "Taxa de Câmbio (BRL)",
      dateLabel: "Data",
    },
    tips: {
      dailyVariations: "Variações diárias normais:",
      dailyVariationsText:
        "Oscilações de 0,5% a 2% são comuns e fazem parte do mercado. Para valores até R$ 1.000, a diferença é pequena.",
      whenToWait: "Quando vale a pena esperar?",
      whenToWaitText:
        "Para conversões acima de R$ 5.000, variações de 3-5% podem resultar em economia (ou perda) significativa. Acompanhe o gráfico!",
      proTip: "Dica profissional:",
      proTipText:
        "Compare sempre as duas moedas (USD e CAD). Às vezes, uma está mais vantajosa que a outra dependendo do seu objetivo.",
    },
    history: {
      title: "Histórico de Conversões",
      clear: "Limpar Histórico",
      noHistory: "Nenhuma conversão realizada ainda",
      service: "Serviço",
      rate: "Taxa",
      confirmClear: "Deseja realmente limpar o histórico?",
    },
    info: {
      title: "Informações sobre as Moedas",
      brlTitle: "Real Brasileiro (BRL)",
      brlText:
        "O Real é a moeda oficial do Brasil desde 1994. É uma das moedas mais negociadas da América Latina e possui grande liquidez no mercado internacional de câmbio.",
      usdTitle: "Dólar Americano (USD)",
      usdText:
        "O Dólar dos Estados Unidos é a moeda mais negociada do mundo e serve como referência para o comércio internacional. É considerada a principal moeda de reserva global.",
      cadTitle: "Dólar Canadense (CAD)",
      cadText:
        'O Dólar Canadense é a moeda oficial do Canadá. É conhecido como "Loonie" e é uma das principais moedas de commodities, sendo influenciado pelo preço do petróleo.',
      tipsTitle: "Dicas de Câmbio",
      tipsText:
        "Compare sempre as taxas entre USD e CAD antes de converter. O spread entre as moedas pode variar. Fique atento às taxas de serviço aplicadas pelas casas de câmbio.",
    },
    footer: {
      subtitle: "Seu conversor confiável para transações internacionais",
      privacy: "Política de Privacidade",
      terms: "Termos de Uso",
      contact: "Contato",
      rights: "Todos os direitos reservados.",
    },
    alerts: {
      invalidValue: "Digite um valor válido em reais.",
      invalidDollarValue: "Digite um valor válido em dólares.",
      rateUnavailable: "Taxa de câmbio não disponível. Tente atualizar.",
      errorLoadingRates:
        "Não foi possível obter as taxas de câmbio. Tente novamente mais tarde.",
      usingCache: "Usando taxas do cache",
      errorLoadingChart:
        "Erro ao carregar gráfico. Tente novamente mais tarde.",
    },
    results: {
      conversionResult: "Resultado da Conversão:",
      valueInBRL: "Valor em BRL",
      exchangeRate: "Taxa de câmbio",
      serviceFee: "Taxa de serviço",
      finalValue: "Valor final em",
      inverseResult: "Resultado da Conversão Inversa:",
      valueIn: "Valor em",
      valueInReais: "Valor em Reais",
    },
  },
  en: {
    nav: {
      converter: "Converter",
      chart: "Comparison Chart",
      info: "Information",
      contact: "Contact",
    },
    hero: {
      title: "Real to Dollar Converter",
      subtitle:
        "Instantly compare and convert between Brazilian Real, US Dollar, and Canadian Dollar with real-time updated rates.",
    },
    converter: {
      title: "Currency Converter",
    },
    currency: {
      usd: "US Dollar (USD)",
      cad: "Canadian Dollar (CAD)",
      usdName: "US Dollar",
      cadName: "Canadian Dollar",
      brl: "Brazilian Real",
    },
    form: {
      valueInBRL: "Value in Real (BRL):",
      enterValue: "Enter the value in reais",
      exchangeRate: "Exchange Rate",
      loadingRate: "Loading rate...",
      updateRate: "Update rate",
      calculate: "Calculate Conversion",
      invert: "Invert Conversion",
      valueIn: "Value in",
      enterDollarValue: "Enter the value in dollars",
      convertToBRL: "Convert to Reais",
      loadingRates: "Loading rates...",
      normalConversion: "Normal Conversion",
    },
    comparison: {
      title: "Quick Comparison",
    },
    chart: {
      title: "Rate Comparison Chart",
      subtitle: "BRL → USD vs BRL → CAD Comparison (Last 7 days)",
      howToInterpret: "How to interpret this chart?",
      lowLine: "Low Line",
      highLine: "High Line",
      currencyExpensive: "Currency is",
      currencyCheap: "Currency is",
      expensive: "EXPENSIVE",
      cheap: "CHEAP",
      goodToSell: "✅ Good to sell",
      badToBuy: "❌ Bad to buy",
      goodToBuy: "✅ Good to buy",
      badToSell: "❌ Bad to sell",
      impactTitle: "Impact of variations on your pocket:",
      convertedValue: "Converted value",
      variation1: "1% Variation",
      variation3: "3% Variation",
      variation5: "5% Variation",
      exchangeRateLabel: "Exchange Rate (BRL)",
      dateLabel: "Date",
    },
    tips: {
      dailyVariations: "Normal daily variations:",
      dailyVariationsText:
        "Fluctuations of 0.5% to 2% are common and part of the market. For values up to R$ 1,000, the difference is small.",
      whenToWait: "When is it worth waiting?",
      whenToWaitText:
        "For conversions above R$ 5,000, variations of 3-5% can result in significant savings (or loss). Follow the chart!",
      proTip: "Pro tip:",
      proTipText:
        "Always compare both currencies (USD and CAD). Sometimes one is more advantageous than the other depending on your goal.",
    },
    history: {
      title: "Conversion History",
      clear: "Clear History",
      noHistory: "No conversions made yet",
      service: "Service",
      rate: "Rate",
      confirmClear: "Do you really want to clear the history?",
    },
    info: {
      title: "Currency Information",
      brlTitle: "Brazilian Real (BRL)",
      brlText:
        "The Real is Brazil's official currency since 1994. It is one of the most traded currencies in Latin America and has great liquidity in the international exchange market.",
      usdTitle: "US Dollar (USD)",
      usdText:
        "The US Dollar is the world's most traded currency and serves as a reference for international trade. It is considered the main global reserve currency.",
      cadTitle: "Canadian Dollar (CAD)",
      cadText:
        'The Canadian Dollar is Canada\'s official currency. Known as "Loonie", it is one of the main commodity currencies, being influenced by oil prices.',
      tipsTitle: "Exchange Tips",
      tipsText:
        "Always compare rates between USD and CAD before converting. The spread between currencies can vary. Pay attention to service fees charged by exchange houses.",
    },
    footer: {
      subtitle: "Your reliable converter for international transactions",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      contact: "Contact",
      rights: "All rights reserved.",
    },
    alerts: {
      invalidValue: "Enter a valid value in reais.",
      invalidDollarValue: "Enter a valid value in dollars.",
      rateUnavailable: "Exchange rate unavailable. Try updating.",
      errorLoadingRates:
        "Could not get exchange rates. Please try again later.",
      usingCache: "Using cached rates",
      errorLoadingChart: "Error loading chart. Please try again later.",
    },
    results: {
      conversionResult: "Conversion Result:",
      valueInBRL: "Value in BRL",
      exchangeRate: "Exchange rate",
      serviceFee: "Service fee",
      finalValue: "Final value in",
      inverseResult: "Inverse Conversion Result:",
      valueIn: "Value in",
      valueInReais: "Value in Reais",
    },
  },
  es: {
    nav: {
      converter: "Convertidor",
      chart: "Gráfico Comparativo",
      info: "Información",
      contact: "Contacto",
    },
    hero: {
      title: "Convertidor Real a Dólar",
      subtitle:
        "Compare y convierta instantáneamente entre Real Brasileño, Dólar Estadounidense y Dólar Canadiense con tasas actualizadas en tiempo real.",
    },
    converter: {
      title: "Convertidor de Monedas",
    },
    currency: {
      usd: "Dólar Estadounidense (USD)",
      cad: "Dólar Canadiense (CAD)",
      usdName: "Dólar Estadounidense",
      cadName: "Dólar Canadiense",
      brl: "Real Brasileño",
    },
    form: {
      valueInBRL: "Valor en Real (BRL):",
      enterValue: "Ingrese el valor en reales",
      exchangeRate: "Tasa de Cambio",
      loadingRate: "Cargando tasa...",
      updateRate: "Actualizar tasa",
      calculate: "Calcular Conversión",
      invert: "Invertir Conversión",
      valueIn: "Valor en",
      enterDollarValue: "Ingrese el valor en dólares",
      convertToBRL: "Convertir a Reales",
      loadingRates: "Cargando tasas...",
      normalConversion: "Conversión Normal",
    },
    comparison: {
      title: "Comparación Rápida",
    },
    chart: {
      title: "Gráfico Comparativo de Tasas",
      subtitle: "Comparación BRL → USD vs BRL → CAD (Últimos 7 días)",
      howToInterpret: "¿Cómo interpretar este gráfico?",
      lowLine: "Línea Baja",
      highLine: "Línea Alta",
      currencyExpensive: "La moneda está",
      currencyCheap: "La moneda está",
      expensive: "CARA",
      cheap: "BARATA",
      goodToSell: "✅ Bueno para vender",
      badToBuy: "❌ Malo para comprar",
      goodToBuy: "✅ Bueno para comprar",
      badToSell: "❌ Malo para vender",
      impactTitle: "Impacto de las variaciones en su bolsillo:",
      convertedValue: "Valor convertido",
      variation1: "Variación del 1%",
      variation3: "Variación del 3%",
      variation5: "Variación del 5%",
      exchangeRateLabel: "Tasa de Cambio (BRL)",
      dateLabel: "Fecha",
    },
    tips: {
      dailyVariations: "Variaciones diarias normales:",
      dailyVariationsText:
        "Las fluctuaciones del 0,5% al 2% son comunes y forman parte del mercado. Para valores hasta R$ 1.000, la diferencia es pequeña.",
      whenToWait: "¿Cuándo vale la pena esperar?",
      whenToWaitText:
        "Para conversiones superiores a R$ 5.000, las variaciones del 3-5% pueden resultar en ahorros (o pérdidas) significativos. ¡Siga el gráfico!",
      proTip: "Consejo profesional:",
      proTipText:
        "Siempre compare ambas monedas (USD y CAD). A veces una es más ventajosa que la otra dependiendo de su objetivo.",
    },
    history: {
      title: "Historial de Conversiones",
      clear: "Limpiar Historial",
      noHistory: "Aún no se han realizado conversiones",
      service: "Servicio",
      rate: "Tasa",
      confirmClear: "¿Realmente desea limpiar el historial?",
    },
    info: {
      title: "Información sobre las Monedas",
      brlTitle: "Real Brasileño (BRL)",
      brlText:
        "El Real es la moneda oficial de Brasil desde 1994. Es una de las monedas más negociadas de América Latina y tiene gran liquidez en el mercado cambiario internacional.",
      usdTitle: "Dólar Estadounidense (USD)",
      usdText:
        "El Dólar Estadounidense es la moneda más negociada del mundo y sirve como referencia para el comercio internacional. Es considerada la principal moneda de reserva global.",
      cadTitle: "Dólar Canadiense (CAD)",
      cadText:
        'El Dólar Canadiense es la moneda oficial de Canadá. Conocido como "Loonie", es una de las principales monedas de materias primas, siendo influenciado por el precio del petróleo.',
      tipsTitle: "Consejos de Cambio",
      tipsText:
        "Siempre compare las tasas entre USD y CAD antes de convertir. El diferencial entre las monedas puede variar. Preste atención a las tarifas de servicio aplicadas por las casas de cambio.",
    },
    footer: {
      subtitle: "Su convertidor confiable para transacciones internacionales",
      privacy: "Política de Privacidad",
      terms: "Términos de Uso",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
    },
    alerts: {
      invalidValue: "Ingrese un valor válido en reales.",
      invalidDollarValue: "Ingrese un valor válido en dólares.",
      rateUnavailable: "Tasa de cambio no disponible. Intente actualizar.",
      errorLoadingRates:
        "No se pudieron obtener las tasas de cambio. Por favor, inténtelo más tarde.",
      usingCache: "Usando tasas del caché",
      errorLoadingChart:
        "Error al cargar el gráfico. Por favor, inténtelo más tarde.",
    },
    results: {
      conversionResult: "Resultado de la Conversión:",
      valueInBRL: "Valor en BRL",
      exchangeRate: "Tasa de cambio",
      serviceFee: "Tarifa de servicio",
      finalValue: "Valor final en",
      inverseResult: "Resultado de la Conversión Inversa:",
      valueIn: "Valor en",
      valueInReais: "Valor en Reales",
    },
  },
};

// ===== VARIÁVEIS GLOBAIS =====
let currentLanguage = "pt";
let moedaSelecionada = "USD";
let taxaUSD = 0;
let taxaCAD = 0;
let graficoInstance = null;
let estadoGrafico = "ambos";

// ===== TAXAS DE SERVIÇO (MERCADO DE DÓLAR) =====
const taxasServico = [
  { min: 0, max: 50, taxa: 2.5 },
  { min: 51, max: 100, taxa: 4.0 },
  { min: 101, max: 200, taxa: 6.0 },
  { min: 201, max: 500, taxa: 12.0 },
  { min: 501, max: 1000, taxa: 20.0 },
  { min: 1001, max: 2000, taxa: 35.0 },
  { min: 2001, max: 5000, taxa: 70.0 },
];

// ===== FUNÇÃO DE TRADUÇÃO =====
function t(key) {
  const keys = key.split(".");
  let value = translations[currentLanguage];

  for (const k of keys) {
    if (value && value[k]) {
      value = value[k];
    } else {
      return key;
    }
  }

  return value;
}

// ===== FUNÇÃO PARA MUDAR IDIOMA =====
function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("preferredLanguage", lang);

  // Atualizar botões de idioma
  document.querySelectorAll(".btn-lang").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Atualizar HTML lang
  document.documentElement.lang =
    lang === "pt" ? "pt-BR" : lang === "es" ? "es-ES" : "en-US";

  // Atualizar textos estáticos
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = t(key);
  });

  // Atualizar placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    element.placeholder = t(key);
  });

  // Atualizar títulos
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const key = element.getAttribute("data-i18n-title");
    element.title = t(key);
  });

  // Atualizar moeda labels
  updateCurrencyLabels();

  // Re-exibir histórico com novo idioma
  exibirHistorico();

  // Atualizar gráfico se existir
  if (graficoInstance) {
    atualizarLabelsGrafico();
  }
}

// ===== FUNÇÃO PARA ATUALIZAR LABELS DE MOEDA =====
function updateCurrencyLabels() {
  const moedaNome =
    moedaSelecionada === "USD" ? t("currency.usdName") : t("currency.cadName");

  document.querySelectorAll(".btn-moeda").forEach((btn) => {
    const moeda = btn.dataset.moeda;
    if (moeda === "USD") {
      btn.querySelector("span:last-child").textContent = t("currency.usd");
    } else if (moeda === "CAD") {
      btn.querySelector("span:last-child").textContent = t("currency.cad");
    }
  });

  const moedaInverso = document.getElementById("moeda-inverso");
  if (moedaInverso) {
    moedaInverso.textContent = moedaNome;
  }
}

// ===== INICIALIZAR SELETOR DE IDIOMA =====
document.addEventListener("DOMContentLoaded", () => {
  // Recuperar idioma preferido
  const savedLanguage = localStorage.getItem("preferredLanguage") || "pt";

  // Adicionar listeners aos botões de idioma
  document.querySelectorAll(".btn-lang").forEach((btn) => {
    btn.addEventListener("click", () => {
      changeLanguage(btn.dataset.lang);
    });
  });

  // Aplicar idioma salvo
  changeLanguage(savedLanguage);
});

// ===== MODO ESCURO =====
const btnModoEscuro = document.getElementById("btnModoEscuro");
const body = document.body;

if (localStorage.getItem("modoEscuro") === "ativado") {
  body.classList.add("dark-mode");
  btnModoEscuro.textContent = "☀️";
}

btnModoEscuro?.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    btnModoEscuro.textContent = "☀️";
    localStorage.setItem("modoEscuro", "ativado");
  } else {
    btnModoEscuro.textContent = "🌙";
    localStorage.setItem("modoEscuro", "desativado");
  }

  if (graficoInstance) {
    atualizarCoresGrafico();
  }
});

// ===== SCROLL REVEAL =====
const observador = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }
);

document.querySelectorAll(".scroll-reveal").forEach((el) => {
  observador.observe(el);
});

// ===== SELETOR DE MOEDA =====
document.querySelectorAll(".btn-moeda").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".btn-moeda")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
    moedaSelecionada = this.dataset.moeda;

    // Atualizar labels
    document.getElementById(
      "moeda-label"
    ).textContent = `BRL/${moedaSelecionada}`;
    document.getElementById("inverter-label").textContent = moedaSelecionada;
    document.getElementById("sigla-inverso").textContent = moedaSelecionada;

    const moedaNome =
      moedaSelecionada === "USD"
        ? t("currency.usdName")
        : t("currency.cadName");
    document.getElementById("moeda-inverso").textContent = moedaNome;

    // Atualizar taxa exibida
    document.getElementById("taxa").value = (
      moedaSelecionada === "USD" ? taxaUSD : taxaCAD
    ).toFixed(4);
  });
});

// ===== FUNÇÃO: carregarTaxas() =====
async function carregarTaxas() {
  const btnTexto = document.getElementById("btnTexto");
  const btnCalcular = document.querySelector(".btn");
  const inputTaxa = document.getElementById("taxa");

  if (btnTexto) {
    btnTexto.textContent = t("form.loadingRates");
    btnCalcular.disabled = true;
    inputTaxa.value = t("form.loadingRate");
  }

  try {
    // Carregar USD
    const resUSD = await fetch(
      "https://economia.awesomeapi.com.br/json/last/BRL-USD"
    );
    const dataUSD = await resUSD.json();
    taxaUSD = parseFloat(dataUSD.BRLUSD.bid);

    // Carregar CAD
    const resCAD = await fetch(
      "https://economia.awesomeapi.com.br/json/last/BRL-CAD"
    );
    const dataCAD = await resCAD.json();
    taxaCAD = parseFloat(dataCAD.BRLCAD.bid);

    // Exibir taxa da moeda selecionada
    inputTaxa.value = (moedaSelecionada === "USD" ? taxaUSD : taxaCAD).toFixed(
      4
    );

    // Salvar no cache
    salvarTaxasCache({ USD: taxaUSD, CAD: taxaCAD });
  } catch (error) {
    console.error("Erro ao carregar taxas:", error);

    const taxasCache = obterTaxasCache();
    if (taxasCache) {
      taxaUSD = taxasCache.USD;
      taxaCAD = taxasCache.CAD;
      inputTaxa.value = (
        moedaSelecionada === "USD" ? taxaUSD : taxaCAD
      ).toFixed(4);
      console.log(t("alerts.usingCache"));
    } else {
      alert(t("alerts.errorLoadingRates"));
      inputTaxa.value = "";
    }
  } finally {
    if (btnTexto) {
      btnTexto.textContent = t("form.calculate");
      btnCalcular.disabled = false;
    }
  }
}

// ===== BOTÃO ATUALIZAR TAXA =====
document.getElementById("btnAtualizarTaxa")?.addEventListener("click", () => {
  carregarTaxas();
});

// ===== FUNÇÃO: obterTaxaServico() =====
function obterTaxaServico(valor) {
  for (const faixa of taxasServico) {
    if (valor >= faixa.min && valor <= faixa.max) {
      return faixa.taxa;
    }
  }
  // Para valores acima de R$ 5000, cobra 1.5%
  if (valor > 5000) {
    return valor * 0.015;
  }
  return 0;
}

// ===== SISTEMA DE CACHE =====
function salvarTaxasCache(taxas) {
  const dados = {
    taxas: taxas,
    timestamp: Date.now(),
  };
  localStorage.setItem("taxasCambio", JSON.stringify(dados));
}

function obterTaxasCache() {
  const cache = localStorage.getItem("taxasCambio");
  if (!cache) return null;

  const dados = JSON.parse(cache);
  const umaHora = 60 * 60 * 1000;

  if (Date.now() - dados.timestamp < umaHora) {
    return dados.taxas;
  }
  return null;
}

// ===== HISTÓRICO DE CONVERSÕES =====
function salvarHistorico(valorBRL, moeda, taxaCambio, valorFinal, taxaServico) {
  const historico = JSON.parse(localStorage.getItem("historicoDolar") || "[]");
  historico.push({
    data: new Date().toLocaleString(
      currentLanguage === "pt"
        ? "pt-BR"
        : currentLanguage === "es"
        ? "es-ES"
        : "en-US"
    ),
    valorBRL: valorBRL,
    moeda: moeda,
    taxa: taxaCambio,
    valorFinal: valorFinal,
    taxaServico: taxaServico,
  });

  if (historico.length > 15) {
    historico.shift();
  }

  localStorage.setItem("historicoDolar", JSON.stringify(historico));
  exibirHistorico();
}

function exibirHistorico() {
  const historico = JSON.parse(localStorage.getItem("historicoDolar") || "[]");
  const listaDiv = document.getElementById("historico-lista");

  if (!listaDiv) return;

  if (historico.length === 0) {
    listaDiv.innerHTML = `<p style="text-align: center; color: #999;">${t(
      "history.noHistory"
    )}</p>`;
    return;
  }

  listaDiv.innerHTML = historico
    .reverse()
    .map(
      (item) => `
    <div class="historico-item">
      <strong>${item.data}</strong><br>
      R$ ${item.valorBRL.toFixed(2)} → $${item.valorFinal.toFixed(2)} ${
        item.moeda
      }<br>
      ${t("history.rate")}: ${item.taxa.toFixed(4)} | ${t(
        "history.service"
      )}: R$ ${item.taxaServico.toFixed(2)}
    </div>
  `
    )
    .join("");
}

function limparHistorico() {
  if (confirm(t("history.confirmClear"))) {
    localStorage.removeItem("historicoDolar");
    exibirHistorico();
  }
}

// ===== EVENTO: Cálculo de Conversão (BRL → USD/CAD) =====
document.getElementById("form-conversor").addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = parseFloat(document.getElementById("valor").value);
  const taxaCambio = moedaSelecionada === "USD" ? taxaUSD : taxaCAD;

  if (isNaN(valor) || valor <= 0) {
    alert(t("alerts.invalidValue"));
    return;
  }

  if (!taxaCambio || taxaCambio === 0) {
    alert(t("alerts.rateUnavailable"));
    return;
  }

  const taxaServico = obterTaxaServico(valor);
  const valorConvertido = valor * taxaCambio;
  const taxaServicoConvertida = taxaServico * taxaCambio;
  const valorFinal = valorConvertido - taxaServicoConvertida;

  // Calcular para ambas as moedas (comparação)
  const valorUSD = valor * taxaUSD;
  const valorCAD = valor * taxaCAD;

  // Salvar no histórico
  salvarHistorico(valor, moedaSelecionada, taxaCambio, valorFinal, taxaServico);

  const resultadoDiv = document.getElementById("resultado");
  const bandeira = moedaSelecionada === "USD" ? "🇺🇸" : "🇨🇦";
  const nomeMoeda =
    moedaSelecionada === "USD" ? t("currency.usdName") : t("currency.cadName");

  resultadoDiv.style.display = "block";
  resultadoDiv.innerHTML = `
    ${bandeira} <strong>${t("results.conversionResult")}</strong><br>
    ${t("results.valueInBRL")}: R$ ${valor.toFixed(2)}<br>
    ${t("results.exchangeRate")}: ${taxaCambio.toFixed(
    4
  )} ${moedaSelecionada}/BRL<br>
    ${t("results.serviceFee")}: R$ ${taxaServico.toFixed(2)}<br>
    💵 <strong>${t("results.finalValue")} ${nomeMoeda}: $${valorFinal.toFixed(
    2
  )} ${moedaSelecionada}</strong>
  `;

  // Exibir comparação rápida
  const comparacaoDiv = document.getElementById("comparacao-rapida");
  comparacaoDiv.style.display = "block";
  document.getElementById("valor-usd").textContent = `$${valorUSD.toFixed(
    2
  )} USD`;
  document.getElementById("valor-cad").textContent = `$${valorCAD.toFixed(
    2
  )} CAD`;
});

// ===== CONVERSÃO INVERSA =====
document.getElementById("btnInverter")?.addEventListener("click", () => {
  const formPrincipal = document.getElementById("form-conversor");
  const formInverso = document.getElementById("form-inverso");
  const btnInverter = document.getElementById("btnInverter");

  if (formInverso.style.display === "none") {
    formPrincipal.style.display = "none";
    formInverso.style.display = "block";
    btnInverter.innerHTML = `🔄 ${t(
      "form.normalConversion"
    )} (BRL → ${moedaSelecionada})`;
  } else {
    formPrincipal.style.display = "block";
    formInverso.style.display = "none";
    btnInverter.innerHTML = `🔄 ${t(
      "form.invert"
    )} (<span id="inverter-label">${moedaSelecionada}</span> → BRL)`;
  }
});

document.getElementById("form-inverso")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorDolar = parseFloat(document.getElementById("valorDolar").value);
  const taxaCambio = moedaSelecionada === "USD" ? taxaUSD : taxaCAD;

  if (isNaN(valorDolar) || valorDolar <= 0) {
    alert(t("alerts.invalidDollarValue"));
    return;
  }

  if (!taxaCambio || taxaCambio === 0) {
    alert(t("alerts.rateUnavailable"));
    return;
  }

  const valorReal = valorDolar / taxaCambio;
  const bandeira = moedaSelecionada === "USD" ? "🇺🇸" : "🇨🇦";

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.style.display = "block";
  resultadoDiv.innerHTML = `
    ${bandeira} <strong>${t("results.inverseResult")}</strong><br>
    ${t("results.valueIn")} ${moedaSelecionada}: $${valorDolar.toFixed(2)}<br>
    ${t("results.exchangeRate")}: ${taxaCambio.toFixed(
    4
  )} ${moedaSelecionada}/BRL<br>
    💰 <strong>${t("results.valueInReais")}: R$ ${valorReal.toFixed(2)}</strong>
  `;
});

// ===== FUNÇÃO: Atualizar visibilidade dos datasets =====
function atualizarVisibilidadeGrafico() {
  if (!graficoInstance) return;

  const meta0 = graficoInstance.getDatasetMeta(0); // USD
  const meta1 = graficoInstance.getDatasetMeta(1); // CAD

  if (estadoGrafico === "USD") {
    meta0.hidden = false;
    meta1.hidden = true;
  } else if (estadoGrafico === "CAD") {
    meta0.hidden = true;
    meta1.hidden = false;
  } else {
    meta0.hidden = false;
    meta1.hidden = false;
  }

  graficoInstance.update();
}

// ===== FUNÇÃO: Atualizar labels do gráfico =====
function atualizarLabelsGrafico() {
  if (!graficoInstance) return;

  graficoInstance.options.scales.y.title.text = t("chart.exchangeRateLabel");
  graficoInstance.options.scales.x.title.text = t("chart.dateLabel");

  graficoInstance.data.datasets[0].label = t("currency.usd");
  graficoInstance.data.datasets[1].label = t("currency.cad");

  graficoInstance.update();
}

// ===== GRÁFICO COMPARATIVO =====
async function carregarGraficoComparativo() {
  try {
    // Buscar dados USD
    const respostaUSD = await fetch(
      "https://economia.awesomeapi.com.br/json/daily/BRL-USD/7"
    );
    const dadosUSD = await respostaUSD.json();

    // Buscar dados CAD
    const respostaCAD = await fetch(
      "https://economia.awesomeapi.com.br/json/daily/BRL-CAD/7"
    );
    const dadosCAD = await respostaCAD.json();

    // Processar datas
    const labels = dadosUSD
      .map((item) => {
        const data = new Date(item.timestamp * 1000);
        const locale =
          currentLanguage === "pt"
            ? "pt-BR"
            : currentLanguage === "es"
            ? "es-ES"
            : "en-US";
        return data.toLocaleDateString(locale, {
          day: "2-digit",
          month: "2-digit",
        });
      })
      .reverse();

    // Processar valores
    const valoresUSD = dadosUSD.map((item) => parseFloat(item.bid)).reverse();
    const valoresCAD = dadosCAD.map((item) => parseFloat(item.bid)).reverse();

    const ctx = document.getElementById("graficoCambio").getContext("2d");

    const isDark = body.classList.contains("dark-mode");
    const corTexto = isDark ? "#e0e6ed" : "#2c3e50";
    const corGrade = isDark ? "#3d4555" : "#e9ecef";

    graficoInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: t("currency.usd"),
            data: valoresUSD,
            borderColor: "#3498db",
            backgroundColor: "rgba(52, 152, 219, 0.1)",
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: "#3498db",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 8,
          },
          {
            label: t("currency.cad"),
            data: valoresCAD,
            borderColor: "#e67e22",
            backgroundColor: "rgba(230, 126, 34, 0.1)",
            borderWidth: 3,
            tension: 0.4,
            fill: true,
            pointBackgroundColor: "#e67e22",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false,
        },
        plugins: {
          legend: {
            labels: {
              color: corTexto,
              font: {
                size: 14,
                weight: "600",
              },
              usePointStyle: true,
              padding: 20,
              generateLabels: function (chart) {
                const original =
                  Chart.defaults.plugins.legend.labels.generateLabels(chart);

                original.forEach((label, index) => {
                  // Estilo visual baseado no estado
                  if (estadoGrafico === "ambos") {
                    label.fontColor = corTexto;
                    label.fillStyle = index === 0 ? "#3498db" : "#e67e22";
                  } else if (estadoGrafico === "USD") {
                    label.fontColor = index === 0 ? corTexto : "#999";
                    label.fillStyle = index === 0 ? "#3498db" : "#ccc";
                  } else if (estadoGrafico === "CAD") {
                    label.fontColor = index === 1 ? corTexto : "#999";
                    label.fillStyle = index === 1 ? "#e67e22" : "#ccc";
                  }
                });

                return original;
              },
            },
            onClick: function (e, legendItem, legend) {
              const index = legendItem.datasetIndex;

              if (index === 0) {
                // Clicou em USD
                if (estadoGrafico === "USD") {
                  estadoGrafico = "ambos";
                } else {
                  estadoGrafico = "USD";
                }
              } else {
                // Clicou em CAD
                if (estadoGrafico === "CAD") {
                  estadoGrafico = "ambos";
                } else {
                  estadoGrafico = "CAD";
                }
              }

              atualizarVisibilidadeGrafico();
            },
          },
          tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            titleColor: "#fff",
            bodyColor: "#fff",
            padding: 12,
            borderColor: "#3498db",
            borderWidth: 1,
            displayColors: true,
            callbacks: {
              label: function (context) {
                return (
                  context.dataset.label + ": " + context.parsed.y.toFixed(4)
                );
              },
            },
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: t("chart.exchangeRateLabel"),
              color: corTexto,
              font: {
                size: 13,
                weight: "600",
              },
            },
            ticks: {
              color: corTexto,
              callback: function (value) {
                return value.toFixed(4);
              },
            },
            grid: {
              color: corGrade,
            },
          },
          x: {
            title: {
              display: true,
              text: t("chart.dateLabel"),
              color: corTexto,
              font: {
                size: 13,
                weight: "600",
              },
            },
            ticks: {
              color: corTexto,
            },
            grid: {
              color: corGrade,
            },
          },
        },
      },
    });

    window.graficoInstance = graficoInstance;
  } catch (error) {
    console.error("Erro ao carregar gráfico:", error);
    document.querySelector(
      ".grafico-wrapper"
    ).innerHTML = `<p style="text-align: center; color: #e74c3c; padding: 50px;">${t(
      "alerts.errorLoadingChart"
    )}</p>`;
  }
}

function atualizarCoresGrafico() {
  if (!graficoInstance) return;

  const isDark = body.classList.contains("dark-mode");
  const corTexto = isDark ? "#e0e6ed" : "#2c3e50";
  const corGrade = isDark ? "#3d4555" : "#e9ecef";

  graficoInstance.options.plugins.legend.labels.color = corTexto;
  graficoInstance.options.scales.y.title.color = corTexto;
  graficoInstance.options.scales.y.ticks.color = corTexto;
  graficoInstance.options.scales.y.grid.color = corGrade;
  graficoInstance.options.scales.x.title.color = corTexto;
  graficoInstance.options.scales.x.ticks.color = corTexto;
  graficoInstance.options.scales.x.grid.color = corGrade;

  graficoInstance.update();
}

// Event listener para limpar histórico
document
  .getElementById("limparHistorico")
  ?.addEventListener("click", limparHistorico);

// ===== INICIALIZAÇÃO =====
window.addEventListener("load", () => {
  carregarTaxas();
  carregarGraficoComparativo();
  exibirHistorico();
});
