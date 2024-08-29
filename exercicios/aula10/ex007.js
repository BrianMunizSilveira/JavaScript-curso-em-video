function somar() {
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')

    console.log('Elemento tn1:', tn1);
    console.log('Elemento tn2', tn2);

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    console.log('Valor n1:', n1);
    console.log('Valor n2:', n2);

    var s = n1 + n2

    console.log('Soma s:', s);

    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}