function somar() {
    var tn1 = window.document.getElementById('n1')
    var tn2 = window.document.querySelector('input#n1')
    var res = window.document.getElementById('res')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    var s = n1 + n2

    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong style="color: #f18f01"> ${s} </strong>`
}