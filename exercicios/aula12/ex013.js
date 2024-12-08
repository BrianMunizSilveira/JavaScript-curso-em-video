var agora = new Date();
var diaSem = agora.getDay();

/* 
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

console.log(diaSem);

switch (diaSem) {
  case 0:
    console.log("Domingo");
    break; // O USO DE BREAK QUANDO SE UTILIZA 'switch' É OBRIGATÓTIO.
  case 1:
    console.log("Segunda-Feira");
    break; // O USO DE BREAK QUANDO SE UTILIZA 'switch' É OBRIGATÓTIO.
  case 2:
    console.log("Terça-Feira");
    break; // O USO DE BREAK QUANDO SE UTILIZA 'switch' É OBRIGATÓTIO.
  case 3:
    console.log("Quarta-Feira");
    break; // O USO DE BREAK QUANDO SE UTILIZA 'switch' É OBRIGATÓTIO.
  case 4:
    console.log("Quinta-Feira");
    break; // O USO DE BREAK QUANDO SE UTILIZA 'switch' É OBRIGATÓTIO.
  case 5:
    console.log("Sexta-Feira");
    break; // O USO DE BREAK QUANDO SE UTILIZA 'switch' É OBRIGATÓTIO.
  case 6:
    console.log("Sábado");
    break; // O USO DE BREAK QUANDO SE UTILIZA 'switch' É OBRIGATÓTIO.
  default:
    console.log("[ERRO] Dia Inválido!");
    break; // O USO DE BREAK QUANDO SE UTILIZA 'switch' É OBRIGATÓTIO.
}
