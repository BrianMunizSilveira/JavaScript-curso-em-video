let tarefas = []

function adicionarTarefa() {
    let tarefa = document.getElementById('tarefa').value
    if (tarefa !== '') {
        tarefas.push(tarefa)
        atualizarLista()
        document.getElementById('tarefa').value = ''
    }
}

function atualizarLista() {
    let lista = document.getElementById('lista')
    lista.innerHTML = ''
    for (let pos in tarefas) {
        let item = document.createElement('li')
        item.textContent = tarefas[pos]
        item.onclick = function() {
            removerTarefa(pos)
        }
        lista.appendChild(item)
    }
}

function removerTarefa(pos) {
    tarefas.splice(pos, i)
    atualizarLista()
}