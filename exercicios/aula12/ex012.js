var agora = new Date();
var hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas.`);

if (hora < 6) {
  console.log("Boa madrugada!");
} else if (hora < 12) {
  console.log("Bom Dia!");
} else if (hora < 18) {
  console.log("Boa Tarde!");
} else if (hora < 24) {
  console.log("Boa Noite!");
} else {
  console.log("Hora Inválida!");
}
