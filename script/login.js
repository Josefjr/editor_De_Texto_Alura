function login() {
  swal({ // Exibe um pop-up com SweetAlert
    text: 'Digite seu nome de usuário no Github', // Texto informativo
    content: 'input', // Campo de entrada de texto
    icon: 'Images/github_icon.svg', // Ícone personalizado
    button: { // Botão personalizado
      text: 'Buscar' // Texto do botão
    }
  })
    .then(user => { // Manipula a resposta do usuário
      if (!user) throw null // Se o usuário cancelar, não faz nada

      return fetch(`https://api.github.com/users/${user}`) // Retorna a promessa de uma requisição à API do GitHub
    })
    .then(response => response.json()) // Converte a resposta da API para JSON
    .then(data => { // Manipula os dados obtidos da API
      if (data.message == 'Not Found') { // Verifica se o usuário não foi encontrado
        swal({ // Exibe um pop-up de erro
          title: 'Usuário não encontrado', // Título do pop-up
          icon: 'error' // Ícone de erro
        })
        throw new Error('Usuário inexistente') // Lança um erro
      }
      const userInfo = { // Cria um objeto com as informações do usuário
        userName: data.name, // Nome do usuário
        userLink: data.html_url, // URL do perfil do usuário no GitHub
        userImage: data.avatar_url // URL da imagem do perfil do usuário
      }
      localStorage.setItem('user', JSON.stringify(userInfo)) // Armazena as informações do usuário no localStorage
      location.reload() // Recarrega a página
    })
}

function toggleLoginLogout() {
  const userExists = JSON.parse(localStorage.getItem('user')); // Verifica se o usuário está logado

  if (userExists != null) { // Se o usuário está logado
    localStorage.removeItem('user'); // Remove as informações de usuário do localStorage
    location.reload(); // Recarrega a página
  } else { // Se o usuário não está logado
    login(); // Chama a função de login
  }
}

const userTag = document.querySelectorAll('.card__owner, .header__user, .user'); // Seleciona os elementos que representam o usuário

userTag.forEach(tag => { // Para cada elemento selecionado
  tag.addEventListener('click', toggleLoginLogout); // Adiciona um ouvinte de evento de clique para alternar entre login e logout
});

const userExists = JSON.parse(localStorage.getItem('user')) // Verifica se o usuário está logado

if (userExists != null) { // Se o usuário está logado
  userTag.forEach(elem => { // Para cada elemento do usuário
    elem.innerHTML = `<img src="${userExists.userImage}" class="header__user--photo" style="height: 2rem; clip-path: circle();"/>
    <h1 class="header__user--name" style="color:white;">${userExists.userName}</h1>` // Insere a imagem e o nome do usuário
  })
  userTag.forEach(link => { // Para cada link do usuário
    link.setAttribute('href', `${userExists.userLink}`) // Define o link para o perfil do usuário no GitHub
    link.setAttribute('target', '_blank') // Abre o link em uma nova aba
    link.removeAttribute('onclick') // Remove qualquer evento de clique
  })
}
