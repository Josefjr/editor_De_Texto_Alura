// Cria uma constante para reunir a área onde os cartões serão exibidos e uma constante para reunir os projetos do localStorage
const allProjects = document.querySelector('.js-all-projects') // Elemento que contém todos os projetos
const projectsList = JSON.parse(localStorage.getItem('projects') || '[]') // Lista de projetos recuperados do localStorage ou um array vazio se não houver nenhum

// Itera sobre cada projeto na lista e cria cartões para exibi-los na interface do usuário
projectsList.forEach((project, index) => {
  // Cria um novo elemento div para representar um cartão de projeto
  const card = document.createElement('div')
  card.classList.add('cards') // Adiciona a classe 'cards' ao cartão
  card.innerHTML = `
    <div class="card__box" style="background: ${project.color};"> <!-- Caixa do cartão com cor de fundo do projeto -->
      <div class="card__border"> <!-- Borda do cartão -->
        <img src="Images/mac_buttons.svg" alt="Botões do Mac"> <!-- Imagem dos botões do Mac -->
        <div class="editor__code"> <!-- Área de código do editor -->
          <code class="hljs ${project.projectLanguage}" style="white-space: pre-wrap;">${project.code}</code> <!-- Código com destaque de sintaxe -->
        </div>
        <div class="overlay" style="background: ${project.color};"></div> <!-- Overlay com a cor do projeto -->
        <div class="delete__button"><a href="#"><img src="Images/trash.svg"></a></div> <!-- Botão de exclusão do projeto -->
      </div>
    </div>
    <div class="card__content"> <!-- Conteúdo do cartão -->
      <h1>${project.projectName}</h1> <!-- Nome do projeto -->
      <p>${project.projectDescription}</p> <!-- Descrição do projeto -->
    </div>
    <div class="card__actions"> <!-- Ações do cartão -->
      <div class="card__buttons"> <!-- Botões do cartão -->
        <button type="button" class="card__comments"><i class="icon-bubble"></i>0</button> <!-- Botão de comentários -->
        <button type="button" class="card__favorites"><i class="icon-heart"></i><span>0</span></button> <!-- Botão de favoritos -->
      </div>
      <a class="card__owner"> <!-- Proprietário do cartão -->
        <i class="header__user--photo icon-sign-in" style="font-size: 2rem"></i> <!-- Ícone de usuário -->
        <h1 class="user--name">Fazer login</h1> <!-- Nome do usuário -->
      </a>
    </div>
  `
  // Adiciona o cartão à área de projetos na interface do usuário
  allProjects.appendChild(card)

  // Seleciona todos os elementos .hljs (código com destaque de sintaxe) e atualiza o conteúdo de cada um com o código do projeto correspondente
  const codeContent = allProjects.querySelectorAll('.hljs')
  codeContent[index].textContent = project.code
})
