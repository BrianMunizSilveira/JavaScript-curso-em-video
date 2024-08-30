let notas = []

function adicionarNota() {
    let nota = parseFloat(document.getElementById('nota').value)
    if(!isNaN(nota)) {
        notas.push(nota)
        atualizarLista()
        calcularMedia()
        document.getElementById('nota').value = ''
    }
}

function atualizarLista() {
    let listaNotas = document.getElementById('listaNotas')
    listaNotas.innerHTML = ''
    for (let pos in notas) {
        let item = document.createElement('li')
        item.textContent = `Nota: ${notas[pos]}`
        listaNotas.appendChild(item)
    }
}

function calcularMedia() {
    let soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    let media = soma / notas.length
    document.getElementById('media').textContent = media.toFixed(2)
}