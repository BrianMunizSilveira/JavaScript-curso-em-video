// Selecionando elementos
const lista = document.getElementById('lista');
const botaoAdicionar = document.getElementById('adicionar');
const botaoRemover = document.getElementById('remover');
const nomeItemInput = document.getElementById('nomeItem');

// Função para adicionar itens
function adicionarItem() {
    const nomeItem = nomeItemInput.value.trim();
    if (nomeItem === "") {
        alert('Por favor, digite um nome para o item.');
        return;
    }
    const novoItem = document.createElement('li');
    novoItem.textContent = nomeItem;
    lista.appendChild(novoItem);
    nomeItemInput.value = ''; //Limpa o campo de entrada
}

// Função para remover item
function removerItem() {
    if (lista.children.length > 0) {
        lista.removeChild(lista.lastChild);
    } else {
        alert('Não há itens para remover!');
    }
}

// Adicionar event listeners aos botões 
botaoAdicionar.addEventListener('click', adicionarItem);
botaoRemover.addEventListener('click', removerItem);