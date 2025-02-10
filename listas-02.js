// Obter elementos HTML
const listaItens = document.getElementById('lista-itens');
const btnInserir = document.getElementById('btn-inserir');


btnInserir.addEventListener('click',()=>{
    const nomeItem=document.getElementById('item-nome').value;
    // Crie um novo elemento "li" para a lista
    const novoItem=Document.createElement('li');
    novoItem.textContent=nomeItem;

})

// Crie e adicione o botão de excluir
const btnExcluir=document.createElement('button');
btnExcluir.textContent='Excluir';
btnExcluir.id='btn-excluir';
btnExcluir.addEventListener('click',()=>{
novoItem.parentNode.removeChild(novoItem);
})

// Crie e adicione o botão de exibir


novoItem.appendChild(btnExcluir);