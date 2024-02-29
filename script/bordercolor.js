// Script para alterar a cor da borda do editor de código

// Obtém a referência para o elemento que representa a borda do editor de código
const border = document.getElementById('editor__box')

// Obtém a referência para o elemento input do tipo color
const input = document.getElementById('colorpicker')

// Adiciona um ouvinte de evento de input ao elemento input
input.addEventListener('input', setColor)

// Função que define a cor da borda com base no valor selecionado no seletor de cores
function setColor() {
  // Define a cor de fundo da borda como o valor selecionado no seletor de cores
  border.style.background = input.value
}
