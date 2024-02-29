// Seleciona todos os ícones de favoritos dos cartões de projeto na página
const faveIcon = document.querySelectorAll('.card__favorites')

// Itera sobre cada ícone de favoritos
faveIcon.forEach(function (elem) {
  // Define uma variável para rastrear se o "like" foi dado ou não inicialmente como falso
  let isLikeGiven = false

  // Adiciona um ouvinte de evento de clique a cada ícone de favoritos
  elem.addEventListener('click', function () {
    // Seleciona o elemento <span> dentro do ícone de favoritos, que contém o número de curtidas
    const span = elem.querySelector('span')
    // Seleciona o ícone dentro do ícone de favoritos
    const icon = elem.querySelector('i')

    // Obtém o número atual de curtidas como um número
    let likeCount = Number(span.innerText)

    // Verifica se o "like" já foi dado
    if (isLikeGiven) {
      // Se sim, diminui o número de curtidas em 1, muda a cor do ícone para branco e redefine a flag para falso
      span.innerText = likeCount - 1
      icon.style.color = 'white'
      isLikeGiven = false
    } else {
      // Se não, aumenta o número de curtidas em 1, muda a cor do ícone para vermelho e define a flag para verdadeiro
      span.innerText = likeCount + 1
      icon.style.color = '#F65151'
      isLikeGiven = true
    }
  })
})
