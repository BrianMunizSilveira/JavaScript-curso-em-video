let nomes = []

function adicionarNome() {
    let nome = document.getElementById('nome').value
    if (nome !== '') {
        nomes.push(nome)
        nomes.sort()
        atualizarLista()
        document.getElementById('nome').value = ''
    }
}

function atualizarLista() {
    let lista = document.getElementById('lista')
    lista.innerHTML = ''
    for (let pos in nomes) {
        let item = document.createElement('li')
        item.textContent = `Nome: ${nomes[pos]}`
        lista.appendChild(item)
    }
}