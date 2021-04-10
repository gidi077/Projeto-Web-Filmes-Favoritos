// DARK MODE

const darkModeBtn = document.getElementsByClassName('dark-mode-btn')

let darkModeVerify = false

function darkMode() {
  darkModeVerify = !darkModeVerify
  darkModeBtn[0].innerText = darkModeVerify ? 'Light Mode' : 'Dark Mode'
  darkModeBtn[1].innerText = darkModeVerify ? 'Light Mode' : 'Dark Mode'
  
  document.querySelector('header').classList.toggle('dark-mode')
  document.querySelector('header h1').classList.toggle('dark-mode')
  startAddMovieButton[0].classList.toggle('dark-mode')
  startAddMovieButton[1].classList.toggle('dark-mode')
  entryTextSection.classList.toggle('dark-mode')
  document.body.classList.toggle('dark-mode')
  darkModeBtn[0].classList.toggle('dark-mode')
  darkModeBtn[1].classList.toggle('dark-mode')
  addMovieModal.classList.toggle('dark-mode')
  const labels = document.getElementsByTagName('label')
  for (const label of labels) {
    label.classList.toggle('dark-mode')
  }
  backdrop.classList.toggle('dark-mode')
  cancelAddMovieModal.classList.toggle('dark-mode')
  const movies =  document.getElementsByClassName('movie-element')
  for (const movie of movies) {
    changeToDarkMode(movie)
  }
  const mobileToolBarIcon = document.getElementById('mobile-toolbar-icon').children
  for (const bar of mobileToolBarIcon) {
    bar.classList.toggle('dark-mode')
  }
  document.getElementById('mobile-toolbar').classList.toggle('dark-mode')
}

darkModeBtn[0].addEventListener('click', darkMode)
darkModeBtn[1].addEventListener('click', darkMode)

function changeToDarkMode(movie) {
  movie.classList.toggle('dark-mode')
  movie.querySelector('.movie-element__info h2').classList.toggle('dark-mode')
}

// LANGUAGE MODE

const portugueseModeBtn = document.getElementsByClassName('portuguese-mode-btn')

let portugueseModeVerify = false

function portugueseMode() {
  portugueseModeVerify = !portugueseModeVerify
  portugueseModeBtn[0].innerText = portugueseModeVerify ? 'Modo Inglês' : 'Portuguese Mode'
  portugueseModeBtn[1].innerText = portugueseModeVerify ? 'Modo Inglês' : 'Portuguese Mode'
  portugueseModeBtn[0].classList.toggle('english-mode')
  portugueseModeBtn[1].classList.toggle('english-mode')
  darkModeBtn[0].innerText = portugueseModeVerify ? darkModeVerify ? 'Modo Claro' : 'Modo Escuro' : darkModeVerify ? 'Light Mode' : 'Dark Mode'
  darkModeBtn[1].innerText = portugueseModeVerify ? darkModeVerify ? 'Modo Claro' : 'Modo Escuro' : darkModeVerify ? 'Light Mode' : 'Dark Mode'
  document.querySelector('header h1').innerText = portugueseModeVerify ? 'Filmes Favoritos' : 'Favorite Movies'
  startAddMovieButton[0].innerText = portugueseModeVerify ? 'ADICIONAR FILME' : 'ADD MOVIE'
  startAddMovieButton[1].innerText = portugueseModeVerify ? 'ADICIONAR FILME' : 'ADD MOVIE'
  entryTextSection.querySelector('p').innerText = portugueseModeVerify ? 'Seu banco de dados de filmes pessoal!' : 'Your personal movie database!'
  const labels = document.getElementsByTagName('label')
  labels[0].innerText = portugueseModeVerify ? 'Título do Filme' : 'Movie Title'
  labels[1].innerText = portugueseModeVerify ? 'URL da Imagem' : 'Image URL'
  labels[2].innerText = portugueseModeVerify ? 'Sua Nota' : 'Your Rating'
  labels[3].innerText = portugueseModeVerify ? 'Ano' : 'Year'
  cancelAddMovieModal.innerText = portugueseModeVerify ? 'Cancelar' : 'Cancel'
  confirmAddMovieModal.innerText = portugueseModeVerify ? 'Adicionar' : 'Add'
  const movies =  document.getElementsByClassName('movie-element')
  for (const movie of movies) {
    changeToPortugueseMode(movie)
  }
  deleteMovieModal.querySelector('h2').innerText = portugueseModeVerify ? 'Tem Certeza?' : 'Are you sure?'
  deleteMovieModal.querySelector('p').innerText = portugueseModeVerify ?
  'Tem certeza que deseja excluir esse item? Essa ação não pode ser desfeita!' :
  "Are you sure you want to delete this item? This action can't be made undone!"
  deleteMovieModal.querySelector('.btn--passive').innerText = portugueseModeVerify ? 'Não (Cancelar)' : 'No (Cancel)'
  deleteMovieModal.querySelector('.btn--danger').innerText = portugueseModeVerify ? 'Sim' : 'Yes'
  const orderOptionsContainer = document.getElementById('order-options')
  orderOptionsContainer.querySelector('label[for="order-by-attribute"]').innerText = 'Ordenar por:'
  const orderByAttributeOptions = orderOptionsContainer.getElementsByClassName('attribute')
  orderByAttributeOptions[0].innerText = portugueseModeVerify ? 'Aleatório' : 'Random'
  orderByAttributeOptions[1].innerText = portugueseModeVerify ? 'Nota' : 'Rating'
  orderByAttributeOptions[2].innerText = portugueseModeVerify ? 'Título' : 'Title'
  orderOptionsContainer.querySelector('label[for="order-type"]').innerText = 'Tipo:'
  const orderTpeOptions = orderOptionsContainer.getElementsByClassName('type')
  orderTpeOptions[0].innerText = portugueseModeVerify ? 'Crescente' : 'Ascending'
  orderTpeOptions[1].innerText = portugueseModeVerify ? 'Decrescente' : 'Descending'
  document.getElementById('apply-order').innerText = portugueseModeVerify ? 'ORDENAR' : 'ORDER'
}

function changeToPortugueseMode(movie) {
  movieImg = movie.querySelector('img')

  if (movieImg.src === englishNoPhotoAvailableLink) {
    movieImg.src = portugueseNoPhotoAvailableLink
  } else if (movieImg.src === portugueseNoPhotoAvailableLink) {
    movieImg.src = englishNoPhotoAvailableLink
  }

  const rating = movie.querySelector('.movie-element__info p.rating')
  rating.innerText = portugueseModeVerify ? rating.innerText.replace(/stars/, 'estrelas') : rating.innerText.replace(/estrelas/, 'stars')
  const year = movie.querySelector('.movie-element__info p.year')
  year.innerText = portugueseModeVerify ? year.innerText.replace(/Year/, 'Ano') : year.innerText.replace(/Ano/, 'year')
  const deleteBtn = movie.querySelector('.movie-element__info .delete-movie')
  deleteBtn.innerText = portugueseModeVerify ? deleteBtn.innerText.replace(/Delete/, 'Excluir') : deleteBtn.innerText.replace(/Excluir/, 'Delete')
}

portugueseModeBtn[0].addEventListener('click', portugueseMode)
portugueseModeBtn[1].addEventListener('click', portugueseMode)

// Mobile Toolbar

const mobileToolbarIcon = document.getElementById('mobile-toolbar-icon')
let mobileToolbarVerify = false

const displayMobileToolbar = () => {
  mobileToolbarVerify = !mobileToolbarVerify
  document.getElementById('mobile-toolbar').classList.toggle('visible')
  displayBackdrop()
  backdrop.addEventListener('click', closeMobileToolbar)
}

const closeMobileToolbar = () => {
  if (mobileToolbarVerify) {
    mobileToolbarVerify = !mobileToolbarVerify
    removeBackdrop()
    document.getElementById('mobile-toolbar').classList.remove('visible')      
  }
}

const desktopMode = window.matchMedia('(min-width: 451px) and (min-height: 451px)')
desktopMode.addListener(closeMobileToolbar)

mobileToolbarIcon.addEventListener('click', displayMobileToolbar)