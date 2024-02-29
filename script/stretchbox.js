// Script para redimensionar a caixa de texto da área de texto

// Seleciona o elemento de textarea pelo ID 'textarea' (para desktop)
const textarea = document.getElementById('textarea')

// Adiciona um ouvinte de evento de entrada ao textarea
textarea.addEventListener('input', function (e) {
  // Define a altura do textarea como 'auto' para que ele possa redimensionar conforme necessário
  this.style.height = 'auto'
  // Define a altura do textarea para ser igual à altura da área de rolagem do conteúdo (scrollHeight)
  this.style.height = this.scrollHeight + 'px'
})
