function calcular() {
  var txtv = document.querySelector("input#txtvel");
  var res = document.querySelector("div#res");
  var vel = Number(txtv.value);
  res.innerHTML = `<p>Sua velocidade atual e de <strong>${vel} km/h</strong></p>`;
  if (vel > 60) {
    res.innerHTML +=
      '<p>Você está <strong class="multado">MULTADO</strong> por excesso de velocidade!!</p>';
  }
  res.innerHTML +=
    "<p>Dirija sempre com cinto de segurança! Atividade pra não virar saudade</p>";
}
