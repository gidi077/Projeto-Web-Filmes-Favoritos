const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.getElementsByClassName('add-movie-btn');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieModal = document.querySelector('#add-modal .modal__actions').firstElementChild;
const confirmAddMovieModal = cancelAddMovieModal.nextElementSibling;
const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const orderOptions = document.getElementById('order-options');

let movies = [];
const portugueseNoPhotoAvailableLink = "data:image/png;base64,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"
const englishNoPhotoAvailableLink = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"

const removeBackdrop = () => backdrop.classList.remove('visible');
const displayBackdrop = () => backdrop.classList.add('visible');

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
}

const closeAddMovieModal = () => {
  addMovieModal.classList.remove('visible');
  removeBackdrop();
};

const startAddMovieModal = () => {
  mobileToolbarVerify ? backdrop.removeEventListener('click', closeMobileToolbar) : null
  mobileToolbarVerify ? closeMobileToolbar() : null
  addMovieModal.classList.add('visible');
  displayBackdrop();
  clearMovieInput();
  
  backdrop.addEventListener('click', closeAddMovieModal);
  cancelAddMovieModal.addEventListener('click', closeAddMovieModal);
  confirmAddMovieModal.addEventListener('click', addMovie);
};

const isMovieListEmpty = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
    orderOptions.style.display = 'none';
  } else {
    entryTextSection.style.display = 'none';
    orderOptions.style.display = 'block';
  }
};

const closeDeleteMovieModal = () => {
  deleteMovieModal.classList.remove('visible');
  removeBackdrop();
};

const startDeleteMovieModal = movieID => {
  deleteMovieModal.classList.add('visible');
  displayBackdrop();

  backdrop.addEventListener('click', closeDeleteMovieModal);
  
  const cancelBtn = deleteMovieModal.querySelector('.modal__actions .btn--passive');
  cancelBtn.removeEventListener('click', closeDeleteMovieModal);
  cancelBtn.addEventListener('click', closeDeleteMovieModal);

  let deleteBtn = deleteMovieModal.querySelector('.modal__actions .btn--danger');
  deleteBtn.replaceWith(deleteBtn.cloneNode(true));
  deleteBtn = deleteMovieModal.querySelector('.modal__actions .btn--danger');
  deleteBtn.addEventListener('click', deleteMovie.bind(null, movieID));
};

function findMovieIndex(movieAttribute, parameterValue) {
  let [movieIndex, movieIndexes] = [0, []]
  for (const movie of movies) {
    if (parameterValue == (movieAttribute === 'id' ? movie.id :
      movieAttribute == 'title' ? movie.title :
      movieAttribute == 'rating' ? movie.rating :
      movieAttribute == 'year' ? movie.year :
      null)) {
        movieIndexes.push(movieIndex)
    }
    movieIndex++
  }
  return movieIndexes.length > 1 ? movieIndexes : movieIndexes[0]
}

const deleteMovie = movieID => {
  const movieIndex = findMovieIndex('id', movieID);
  movies.splice(movieIndex, 1);
  const movieListEl = document.getElementById('movie-list');
  movieListEl.children[movieIndex].remove();
  console.log(movies);
  isMovieListEmpty();
  closeDeleteMovieModal();
};

const displayNewMovie = (id, title, image, rating, year) => {
  const noPhotoAvailableLink = portugueseModeVerify ? portugueseNoPhotoAvailableLink : englishNoPhotoAvailableLink;
  const newMovieEl = document.createElement('li');
  newMovieEl.className = 'movie-element';
  newMovieEl.innerHTML = `
    <div class="movie-element__image">
      <img src="${image}" onerror="this.onerror=null;this.src='${noPhotoAvailableLink}';">
    </div>
    <div class="movie-element__info">
      <h2> ${title} </h2>
      <p class='rating'> ${rating}/5 stars </p>
      <p class='year'> Year: ${year} </p>
      <button class='delete-movie'> Delete </button>
      <span class='delete-movie-mobile'> X </span>
    </div>
  `;
  
  const movieListEl =  document.getElementById('movie-list');
  movieListEl.appendChild(newMovieEl);
  isMovieListEmpty();

  const deleteMovieEl = newMovieEl.querySelector('button.delete-movie');
  const deleteMovieMobileEl = newMovieEl.querySelector('span.delete-movie-mobile');
  deleteMovieEl.addEventListener('click', startDeleteMovieModal.bind(null, id));
  deleteMovieMobileEl.addEventListener('click', startDeleteMovieModal.bind(null, id));

  darkModeVerify ? changeToDarkMode(newMovieEl) : null
  portugueseModeVerify ? changeToPortugueseMode(newMovieEl) : null
};

const addMovie = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value.length = 1 ? Number(userInputs[2].value) : Number(userInputs[2].value).toFixed(1);
  const yearValue = Number(userInputs[3].value).toFixed(0);

  if (titleValue == '' || imageUrlValue == '' || ratingValue == '' || yearValue == '') {
    portugueseModeVerify ? alert('Você precisa preencher todos os campos!') : alert('You need to fill all the fields!');
  } else if (ratingValue > 5 || ratingValue < 1) {
    portugueseModeVerify ? alert('A nota máxima é 5 a nota mínima é 1!') : alert('The maximum rating is 5 and the minimum rating is 1!')
  } else {

    const newMovie = {
      id: Math.random(),
      title: titleValue,
      image: imageUrlValue,
      rating: ratingValue,
      year: yearValue
    }
    movies.push(newMovie);
    console.log(movies);
    closeAddMovieModal();
    displayNewMovie(newMovie.id, newMovie.title, newMovie.image, newMovie.rating, newMovie.year);
  }
}

const orderMovies = () => {
  const attributeSelected = orderOptions.querySelector('#order-by-attribute').value;
  const typeSelected = orderOptions.querySelector('#order-type').value;
  const movieListEl =  document.getElementById('movie-list');
  const [movieListElCopy, moviesCopy] = [[], []]
  
  for (const movie of movieListEl.childNodes) {
    movieListElCopy.push(movie.cloneNode(true));
  }

  movieListEl.innerHTML = '';

  const movieAttributes = []
  for (const movie of movies) {
    movieAttributes.push(attributeSelected === 'id' ? movie.id :
                         attributeSelected === 'title' ? movie.title :
                         attributeSelected === 'rating' ? movie.rating :
                         attributeSelected === 'year' ? movie.year :
                         null)
  }

  let sortedAttributes = typeSelected == 'ascending' ? movieAttributes.sort() : movieAttributes.sort().reverse()
  sortedAttributes = Array.from(new Set(sortedAttributes))
  for (const value of sortedAttributes) {
    movieIndex = findMovieIndex(attributeSelected, value)
    if (Array.isArray(movieIndex)) {
      for (const index of movieIndex) {
        movieListEl.appendChild(movieListElCopy[index])
        moviesCopy.push(movies[index])
      }
    }
    else {
      movieListEl.appendChild(movieListElCopy[movieIndex])
      moviesCopy.push(movies[movieIndex])
    }
  }

  movies = moviesCopy.slice()
};

startAddMovieButton[0].addEventListener('click', startAddMovieModal);
startAddMovieButton[1].addEventListener('click', startAddMovieModal);