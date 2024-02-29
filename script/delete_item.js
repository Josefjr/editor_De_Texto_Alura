// Seleciona todos os botões de exclusão de projeto na página
const deleteButton = document.querySelectorAll('.delete__button')

// Recupera a lista de projetos do localStorage e a converte de volta para um array JavaScript
const item = JSON.parse(localStorage.getItem('projects'))

// Imprime os botões de exclusão no console para fins de depuração
console.log(deleteButton)

// Adiciona um evento de clique a cada botão de exclusão de projeto
deleteButton.forEach(elem => {
  elem.addEventListener('click', function () {
    // Obtém o elemento pai do botão de exclusão, que é o cartão do projeto
    const card = elem.parentNode.parentNode.parentNode
    // Obtém o nome do projeto do texto dentro do elemento <h1> do cartão
    const cardName = card.querySelector('h1').textContent
    // Encontra o índice do projeto na lista com base no nome do projeto
    const cardIndex = item.findIndex(item => item.projectName === cardName)
    // Remove o projeto da lista com base no índice encontrado
    item.splice(cardIndex, 1)
    // Atualiza a lista de projetos no localStorage
    localStorage.setItem('projects', JSON.stringify(item))
    // Recarrega a página para refletir as mudanças feitas
    location.reload()
  })
})

// Código comentado que anteriormente lidava com a exclusão de projetos com base em algum evento de clique
// cardToDelete.forEach(elem => {
//   elem.addEventListener('click', function () {
//     item.splice(elem, 1)
//     localStorage.setItem('projects', JSON.stringify(item))
//     location.reload()
//   })
// })
