function calcular() {
    var produto = prompt('Qual produto você comprou?');
    var custo = Number(prompt(`Quanto custa ${produto} que você esta comprando?`));
    var valor = prompt(`Qual foi o valor que você pagou para comprar ${produto}?`);
    var troco = valor - custo;

    alert(`Dec LTDA confirma que: 
        \n Você comprou ${produto} que custou R$${custo}. 
        \n Deu para pagar R$${valor} e vai receber R$${troco.toFixed(2)} de troco. 
        \n Volte Sempre! (Приходите почаще!)`);
}