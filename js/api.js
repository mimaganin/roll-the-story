// const randomScenarios = Array.from({ length: 6 }, function() {
//   return (Math.floor(Math.random() * 100) + 1);
// });

// const scenarios = document.querySelectorAll(".scenario");

// scenarios.forEach(function(element, index) {
//   const randomScenario = randomScenarios[index];
//   element.style.backgroundImage = `url("https://picsum.photos/id/${randomScenario}/200")`;
// });

// GET CHARACTERS FROM SUPERHERO API //
// function getRandomHero(element) {
//   const randomHeroId = Math.floor(Math.random() * 731) + 1;
//   const apiUrl = `https://superheroapi.com/api.php/6810662638961832/${randomHeroId}`;

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       const imageUrl = data.image.url;
//       element.style.backgroundImage = `url(${imageUrl})`;
//     })
//     .catch(error => {
//       console.log('Ops, we failed you', error);
//     });
// }

// // APPLY CHARACTERS #1 AND #2 //
// const characterOne = document.querySelectorAll(".character.one");
// const characterTwo = document.querySelectorAll(".character.two");

// characterOne.forEach(character => {
//   getRandomHero(character);
// });

// characterTwo.forEach(character => {
//   getRandomHero(character);
// });

// // GET MOVIES FROM IMDB API //

// // var requestOptions = {
// //   method: 'GET',
// //   redirect: 'follow'
// // };

// // fetch('https://imdb-api.com/en/API/Top250Movies/k_2c0pz6sl')
// //   .then(response => response.json())
// //   .then(data => {
// //     const filmTitle = data;
// //     console.log(filmTitle); 

// //   })
// //   .catch(error => {
// //     console.log('Ocorreu um erro:', error);
// //   });

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGFmZTg0NTliMTBiZDRlNGU2NjQwMTdmNGM5Njc3NyIsInN1YiI6IjY0NzUzNWVmYzI4MjNhMDBhOGQ0Nzk1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6mqizukTf4Q-kZocxkcp-RpzflWp5cGyQEQJkf00Ps'
//   }
// };

// REFRESH BUTTONS //
// function addRefreshButtonEventListener(refreshButton, characters) {
//   refreshButton.addEventListener("click", () => {
//     characters.forEach(character => {
//       getRandomHero(character);
//     });
//   });
// }

// const refreshButtonOne = document.querySelector(".refresh-button.one");
// const refreshButtonTwo = document.querySelector(".refresh-button.two");

// addRefreshButtonEventListener(refreshButtonOne, characterOne);
// addRefreshButtonEventListener(refreshButtonTwo, characterTwo);  



