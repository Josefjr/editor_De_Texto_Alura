// Variáveis que serão usadas para coletar informações fornecidas pelo usuário
const userLanguage = document.querySelector('.js-language'); // Seleciona o elemento que representa a linguagem escolhida pelo usuário
const userCode = document.querySelector('.js-codearea'); // Seleciona o elemento que representa o código fornecido pelo usuário
const previewButton = document.querySelector('.js-preview'); // Seleciona o botão de pré-visualização
const saveButton = document.querySelector('.js-save'); // Seleciona o botão de salvar
const projectTitle = document.querySelector('.js-title'); // Seleciona o elemento que representa o título do projeto
const projectDescription = document.querySelector('.js-description'); // Seleciona o elemento que representa a descrição do projeto
const cardColor = document.querySelector('.project__color'); // Seleciona o elemento que representa a cor do cartão do projeto

// Define o localStorage para cada saveButton no html
saveButton.addEventListener('click', () => {
  if (typeof Storage !== 'undefined') { // Verifica se o navegador suporta localStorage
    if (!userCode.querySelector('code')) { // Verifica se o usuário não forneceu código
      swal( // Exibe uma mensagem de erro
        'Oops...',
        'Por favor, clique no botão "Visualizar com o Highlight" antes de salvar.',
        'error'
      );
    }
    checkLogin(); // Verifica se o usuário está logado
    saveToLocal(); // Salva o projeto no localStorage
    swal( // Exibe uma mensagem de sucesso
      'Seu projeto foi salvo!',
      'Visite a página da Comunidade para visualizá-lo.',
      'success'
    );
  } else { // Se o navegador não suporta localStorage
    swal( // Exibe uma mensagem de erro
      'Algo deu errado...',
      'Por favor, tente novamente mais tarde ou use outro navegador compatível.',
      'error'
    );
  }
});

// Função para salvar o projeto no localStorage
function saveToLocal() {
  const project = { // Cria um objeto representando os detalhes do projeto
    projectName: projectTitle.value, // Nome do projeto fornecido pelo usuário
    projectDescription: projectDescription.value, // Descrição do projeto fornecida pelo usuário
    projectLanguage: userLanguage.value, // Linguagem do projeto escolhida pelo usuário
    color: cardColor.value, // Cor do cartão do projeto escolhida pelo usuário
    code: userCode.querySelector('code').innerText // Código do projeto fornecido pelo usuário
  };

  if (projectTitle.value === '') { // Verifica se o título do projeto está vazio
    swal( // Exibe uma mensagem informativa
      'Falta o nome do projeto',
      'Por favor, forneça o nome do projeto antes de prosseguir.',
      'info'
    );
    throw new Error('Falta informar o nome do projeto'); // Lança um erro
  }

  const projectsList = JSON.parse(localStorage.getItem('projects') || '[]'); // Recupera a lista de projetos do localStorage ou cria uma nova lista vazia

  projectsList.push(project); // Adiciona o projeto à lista de projetos

  localStorage.setItem('projects', JSON.stringify(projectsList)); // Salva a lista de projetos atualizada no localStorage
  // setItem joga tudo dentro dos parênteses para o localStorage
  // JSON.stringify transforma tudo em strings (formato padrão de dados dentro do localStorage)
}

// Função para verificar se o usuário está logado
function checkLogin() {
  const userLogged = JSON.parse(localStorage.getItem('user')); // Verifica se há informações de usuário no localStorage
  if (userLogged === null) { // Se não houver informações de usuário
    swal('Faça login', 'Por favor, faça login antes de prosseguir.', 'info'); // Exibe uma mensagem informativa
    throw new Error('Falta fazer login'); // Lança um erro
  }
}
