// Seleciona o elemento HTML que possui a classe CSS 'project__language' e armazena uma referência a ele na variável 'language'.
const language = document.querySelector('.project__language');

// Seleciona o elemento HTML que possui a classe CSS 'editor__code' e armazena uma referência a ele na variável 'codeArea'.
const codeArea = document.querySelector('.editor__code');

// Seleciona o elemento HTML que possui a classe CSS 'editor__button' e armazena uma referência a ele na variável 'button'.
const button = document.querySelector('.editor__button');

// Seleciona o elemento HTML que possui a classe CSS 'mode__toggle' e armazena uma referência a ele na variável 'modeButton'.
const modeButton = document.querySelector('.mode__toggle');

// Função para limpar o texto da área de edição ao clicar nela
function limparTexto() {
  codeArea.innerHTML = ''; // Limpa o conteúdo da área de edição
}

// Adiciona um ouvinte de evento de clique à área de edição
codeArea.addEventListener('click', limparTexto);

// Função para aplicar o destaque de sintaxe ao código inserido na área de edição
function applyHighlight() {
  // Usamos innerText para não gerar conflito entre as tags HTML da página e um provável código HTML que o usuário coloque no campo da página
  const code = codeArea.innerText.trim();
  codeArea.innerHTML = `<code class="hljs ${language.value}" aria-label="Editor de código"></code>`;
  codeArea.querySelector('code').textContent = code; // Usamos textContent para evitar a perda de quebras de linha
  hljs.highlightElement(codeArea.querySelector('code'));
}

// Adiciona um ouvinte de evento de clique ao botão
button.addEventListener('click', () => {
  applyHighlight(); // Chama a função applyHighlight() quando o botão é clicado
});
