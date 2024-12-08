function contar() {
  // Capturando os elementos de Input
  let inicio = document.getElementById("inicio").value;
  let fim = document.getElementById("fim").value;
  let passos = document.getElementById("passo").value;
  let resultado = document.getElementById("resultado");

  // Convertendo os valores dos inputs para números
  let i = Number(inicio);
  let f = Number(fim);
  let p = Number(passos);

  // Validando se os valores estão válidos
  if (inicio.length == 0 || fim.length == 0 || passos.length == 0) {
    resultado.innerHTML =
      "Os valores são inválidos. Por favor, digite um número em todos os campos.";
    return;
  }

  // Limpando o resultado antes de começar a contagem
  resultado.innerHTML = "Contando: <br>";

  // Verificando se o passo é válido
  if (p <= 0) {
    alert("Passo inválido! Considerando passo 1.");
    p = 1;
  }

  // Realiza a contagem
  if (i < f) {
    // Contagem crescente
    for (let contador = i; contador <= f; contador += p) {
      resultado.innerHTML += `${contador} \u{1F449} `;
    }
  } else {
    // Contagem regressiva
    for (let contador = i; contador >= f; contador -= p) {
      resultado.innerHTML += `${contador} \u{1F449} `;
    }
  }

  resultado.innerHTML += `\u{1F3C1}`; // Bandeira sinalizando o fim da contagem
}
