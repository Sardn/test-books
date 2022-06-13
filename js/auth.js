const auth = () => {



  const buttonAuth = document.querySelector('.button-auth')
  const modalAuth = document.querySelector('.modal-auth')
  const buttonOut = document.querySelector('.button-out')
  const userName = document.querySelector('.user-name')
  const closeAuth = document.querySelector('.close-auth')
  const logInForm = document.getElementById('logInForm')
  const inputLogin = document.getElementById('login')
  const inputPassword = document.getElementById('password')
  const buttonCart = document.querySelector('.button-cart')

  const Red_Color = '#ff0000';
  function notAuthorized() {
    function login(event) {
      event.preventDefault();
      if (validName(loginInput.value)) {
        login = loginInput.value;
        localStorage.setItem('', login)
        modalAuth();

        buttonAuth.removeEventListener('click', modalAuth);
        closeAuth.removeEventListener('click', modalAuth);
        logInForm.removeEventListener('submit', login)
        logInForm.reset();
        closeAuth();
      } else {
        loginInput.style.borderColor = Red_Color;
        loginInput.value = '';
      }
    }
  }

 
  function validName(str) {
    const regName = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
    return regName.test(str);
  }

  const login = (user) => {
    buttonAuth.style.display = 'none'
    buttonOut.style.display = 'flex'
    userName.style.display = 'flex'
    buttonCart.style.display = 'flex'
    userName.textContent = user.login
    modalAuth.style.display = 'none'
  }


  const logout = () => {
    buttonAuth.style.display = 'flex'
    buttonOut.style.display = 'none'
    userName.style.display = 'none'
    userName.textContent = ''
    buttonCart.style.display = 'none'
    localStorage.removeItem('user')
  }

  buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex'
  })
  closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none'
  })

  buttonOut.addEventListener('click', () => {
    logout()
  })

  logInForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const user = {
      login: inputLogin.value,
      password: inputPassword.value

    }


    localStorage.setItem('user', JSON.stringify(user))
    login(user);

  })

  if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')))
  }
}

auth()

