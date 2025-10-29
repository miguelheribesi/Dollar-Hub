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

// ===== VARIÁVEIS GLOBAIS =====
let moedaSelecionada = "USD";
let taxaUSD = 0;
let taxaCAD = 0;
let graficoInstance = null;
let estadoGrafico = "ambos"; // 'ambos', 'USD', 'CAD'

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
    document.getElementById("moeda-inverso").textContent =
      moedaSelecionada === "USD" ? "Dólar Americano" : "Dólar Canadense";

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
    btnTexto.textContent = "Carregando taxas...";
    btnCalcular.disabled = true;
    inputTaxa.value = "Carregando...";
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
      console.log("Usando taxas do cache");
    } else {
      alert(
        "Não foi possível obter as taxas de câmbio. Tente novamente mais tarde."
      );
      inputTaxa.value = "";
    }
  } finally {
    if (btnTexto) {
      btnTexto.textContent = "Calcular Conversão";
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
    data: new Date().toLocaleString("pt-BR"),
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
    listaDiv.innerHTML =
      '<p style="text-align: center; color: #999;">Nenhuma conversão realizada ainda</p>';
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
      Taxa: ${item.taxa.toFixed(4)} | Serviço: R$ ${item.taxaServico.toFixed(2)}
    </div>
  `
    )
    .join("");
}

function limparHistorico() {
  if (confirm("Deseja realmente limpar o histórico?")) {
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
    alert("Digite um valor válido em reais.");
    return;
  }

  if (!taxaCambio || taxaCambio === 0) {
    alert("Taxa de câmbio não disponível. Tente atualizar.");
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
    moedaSelecionada === "USD" ? "Dólar Americano" : "Dólar Canadense";

  resultadoDiv.style.display = "block";
  resultadoDiv.innerHTML = `
    ${bandeira} <strong>Resultado da Conversão:</strong><br>
    Valor em BRL: R$ ${valor.toFixed(2)}<br>
    Taxa de câmbio: ${taxaCambio.toFixed(4)} ${moedaSelecionada}/BRL<br>
    Taxa de serviço: R$ ${taxaServico.toFixed(2)}<br>
    💵 <strong>Valor final em ${nomeMoeda}: $${valorFinal.toFixed(
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

  if (formInverso.style.display === "none") {
    formPrincipal.style.display = "none";
    formInverso.style.display = "block";
    document.getElementById(
      "btnInverter"
    ).innerHTML = `🔄 Conversão Normal (BRL → ${moedaSelecionada})`;
  } else {
    formPrincipal.style.display = "block";
    formInverso.style.display = "none";
    document.getElementById(
      "btnInverter"
    ).innerHTML = `🔄 Inverter Conversão (<span id="inverter-label">${moedaSelecionada}</span> → BRL)`;
  }
});

document.getElementById("form-inverso")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorDolar = parseFloat(document.getElementById("valorDolar").value);
  const taxaCambio = moedaSelecionada === "USD" ? taxaUSD : taxaCAD;

  if (isNaN(valorDolar) || valorDolar <= 0) {
    alert("Digite um valor válido em dólares.");
    return;
  }

  if (!taxaCambio || taxaCambio === 0) {
    alert("Taxa de câmbio não disponível. Tente atualizar.");
    return;
  }

  const valorReal = valorDolar / taxaCambio;
  const bandeira = moedaSelecionada === "USD" ? "🇺🇸" : "🇨🇦";

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.style.display = "block";
  resultadoDiv.innerHTML = `
    ${bandeira} <strong>Resultado da Conversão Inversa:</strong><br>
    Valor em ${moedaSelecionada}: $${valorDolar.toFixed(2)}<br>
    Taxa de câmbio: ${taxaCambio.toFixed(4)} ${moedaSelecionada}/BRL<br>
    💰 <strong>Valor em Reais: R$ ${valorReal.toFixed(2)}</strong>
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
        return data.toLocaleDateString("pt-BR", {
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
            label: "USD (Dólar Americano)",
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
            label: "CAD (Dólar Canadense)",
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
              text: "Taxa de Câmbio (BRL)",
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
              text: "Data",
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
    document.querySelector(".grafico-wrapper").innerHTML =
      '<p style="text-align: center; color: #e74c3c; padding: 50px;">Erro ao carregar gráfico. Tente novamente mais tarde.</p>';
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
