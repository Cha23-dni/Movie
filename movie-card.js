// "use strict";

// import { imageBaseURL } from "./api.js";

// /*-------
// Movie Card
// --------*/

// export function createMovieCard(movie) {
//   const { title, release_date, poster_path, vote_average, id } = movie;

//   const card = document.createElement("div");
//   card.classList.add("movie-card");

//   card.innerHTML = `
//     <figure class="poster-box card-banner">
//       <img
//         class="img-cover"
//         src="${imageBaseURL}w342${poster_path}"
//         alt="${title}"
//         loading="lazy"
//       />
//     </figure>

//     <h4 class="title">${title}</h4>

//     <div class="meta-list">
//       <div class="meta-item">
//         <img
//           src="./assets/images/star.png"
//           width="20"
//           height="20"
//           loading="lazy"
//           alt="rating"
//           style="margin-bottom: 5px"
//         />

//         <span class="span">${vote_average.toFixed(1)}</span>
//       </div>

//       <div class="card-badge">${release_date.split("-")[0]}</div>
//     </div>

    // <a href="./detail.html" class="card-btn" title="${title}" onClick="getMovieDetail(${id})"></a>
//   `;

//   return card;
// }


// "use strict";

// import { imageBaseURL } from "./api.js";

// /*-------
// Movie Card
// --------*/

// export function createMovieCard(movie) {
//   const { title, release_date, poster_path, vote_average, id } = movie;

//   const card = document.createElement("div");
//   card.classList.add("movie-card");

//   card.innerHTML = `
//     <figure class="poster-box card-banner">
//       <img
//         class="img-cover"
//         src="${imageBaseURL}w342${poster_path}"
//         alt="${title}"
//         loading="lazy"
//       />
//     </figure>

//     <h4 class="title">${title}</h4>

//     <div class="meta-list">
//       <div class="meta-item">
//         <img
//           src="./assets/images/star.png"
//           width="20"
//           height="20"
//           loading="lazy"
//           alt="rating"
//           style="margin-bottom: 5px"
//         />

//         <span class="span">${vote_average.toFixed(1)}</span>
//       </div>

//       <div class="card-badge">${release_date.split("-")[0]}</div>
//     </div>

//     <div class="watch-later-btn" data-id="${id}">
//       <i class="fa fa-clock"></i> Watch Later
//     </div>

//     <a href="./detail.html" class="card-btn" title="${title}" onClick="getMovieDetail(${id})"></a>
//   `;

//   // Watch Later button functionality
//   const watchLaterBtn = card.querySelector('.watch-later-btn');
//   watchLaterBtn.addEventListener('click', () => addToWatchLater(movie));

//   return card;
// }

// // Function to add movie to localStorage
// function addToWatchLater(movie) {
//   let watchLaterList = JSON.parse(localStorage.getItem('watchLaterMovies')) || [];

//   // Check if the movie is already in the list
//   const exists = watchLaterList.some(item => item.id === movie.id);
//   if (!exists) {
//     watchLaterList.push(movie);
//     localStorage.setItem('watchLaterMovies', JSON.stringify(watchLaterList));
//     alert(`${movie.title} has been added to your Watch Later list!`);
//   } else {
//     alert(`${movie.title} is already in your Watch Later list!`);
//   }
// }

"use strict";

import { imageBaseURL } from "./api.js";

/*-------
Movie Card
--------*/

export function createMovieCard(movie) {
  const { title, release_date, poster_path, vote_average, id } = movie;

  const card = document.createElement("div");
  card.classList.add("movie-card");

  card.innerHTML = `
    <figure class="poster-box card-banner">
      <img
        class="img-cover"
        src="${imageBaseURL}w342${poster_path}"
        alt="${title}"
        loading="lazy"
      />
    </figure>

    <h4 class="title">${title}</h4>

    <div class="meta-list">
      <div class="meta-item">
        <img
          src="./assets/images/star.png"
          width="20"
          height="20"
          loading="lazy"
          alt="rating"
          style="margin-bottom: 5px"
        />
        <span class="span">${vote_average.toFixed(1)}</span>
      </div>
      <div class="card-badge">${release_date.split("-")[0]}</div>
    </div>

    <div class="watch-later-btn" data-id="${id}">
      <i class="fa fa-clock"></i> Watch Later
    </div>

    <a href="./detail.html" class="card-btn" title="${title}" onClick="getMovieDetail(${id})"></a>
  `;

 
  const watchLaterBtn = card.querySelector('.watch-later-btn');
  watchLaterBtn.addEventListener('click', function(event) {
    event.stopPropagation(); 
    event.preventDefault(); // Prevents the default behavior if the button is inside a form or other clickable area
    addToWatchLater(movie);
  });


  return card;
}

// Function to add movie to localStorage
function addToWatchLater(movie) {
  let watchLaterList = JSON.parse(localStorage.getItem('watchLaterMovies')) || [];
  
  // Check if the movie is already in the list
  const exists = watchLaterList.some(item => item.id === movie.id);
  if (!exists) {
    watchLaterList.push(movie);
    localStorage.setItem('watchLaterMovies', JSON.stringify(watchLaterList));
    alert(`${movie.title} has been added to your Watch Later list!`);
  } else {
    alert(`${movie.title} is already in your Watch Later list!`);
  }
}
