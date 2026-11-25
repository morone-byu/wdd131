const anoAtual = document.querySelector("#ano-atual");
const ultimaModificacao = document.querySelector("#ultima-modificacao");

anoAtual.textContent = new Date().getFullYear();
ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;

const temperatura = 28; // ºC
const velocidadeVento = 15; // km/h

function calcularSensacaoTermica(temp, vento) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16);
}

const sensacaoElemento = document.querySelector("#sensacao-termica");

if (temperatura <= 10 && velocidadeVento > 4.8) {
    sensacaoElemento.textContent = `${calcularSensacaoTermica(temperatura, velocidadeVento).toFixed(1)} ºC`;
} else {
    sensacaoElemento.textContent = "N/A";
}
