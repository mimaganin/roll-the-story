import { missions } from './missions.js';

const diceElements = document.querySelectorAll('.dice');
const rollBtns = document.querySelectorAll('.roll');

const randomDice = (diceElement) => {
    const random = Math.floor(Math.random() * 6) + 1;
    rollDice(diceElement, random);
}

const rollDice = (diceElement, random) => {
    diceElement.style.animation = 'rolling 4s';

    setTimeout(() => {
        switch (random) {
            case 1:
                diceElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 6:
                diceElement.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            case 2:
                diceElement.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 5:
                diceElement.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 3:
                diceElement.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 4:
                diceElement.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            default:
                break;
        }

        diceElement.style.animation = 'none';
    }, 4050);
}

rollBtns.forEach((rollBtn, index) => {
    rollBtn.addEventListener('click', () => {
        randomDice(diceElements[index]);
    });
});

// GET CHARACTERS FROM SUPERHERO API //
function getRandomHero(element) {
    const randomHeroId = Math.floor(Math.random() * 731) + 1;
    const apiUrl = `https://superheroapi.com/api.php/6810662638961832/${randomHeroId}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const characterData = {
          imgUrl: data.image.url,
          charachterName: data.name
        }
        const imageUrl = characterData.imgUrl;
        const characterName = characterData.charachterName;
        element.style.backgroundImage = `url(${imageUrl})`;
        
        const nameContainer = document.createElement('span');
        nameContainer.textContent = characterName
        element.appendChild(nameContainer); 
      })
      .catch(error => {
        console.log('Ops, we failed you', error);
      });
  }
  
  // APPLY CHARACTERS #1 AND #2 //
  const characterOne = document.querySelectorAll(".character.one");
  const characterTwo = document.querySelectorAll(".character.two");
  
  characterOne.forEach(character => {
    getRandomHero(character);
  });
  
  characterTwo.forEach(character => {
    getRandomHero(character);
  });


  // GET MOVIES FROM MDTB API //
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGFmZTg0NTliMTBiZDRlNGU2NjQwMTdmNGM5Njc3NyIsInN1YiI6IjY0NzUzNWVmYzI4MjNhMDBhOGQ0Nzk1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6mqizukTf4Q-kZocxkcp-RpzflWp5cGyQEQJkf00Ps'
    }
  };
  
  const moviePoster = [];
  function setRandomMovie() {
    const randomMoviePage = Math.floor(Math.random() * 500);
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${randomMoviePage}`, options)
      .then(response => response.json())
      .then(data => {
        const movieData = data.results;
        movieData.forEach(result => {
          const posterUrl = `https://image.tmdb.org/t/p/w200${result.poster_path}`;
          moviePoster.push(posterUrl);
        });
        const movieDice = document.querySelectorAll('.movie');

        movieDice.forEach((face) => {
            const randomIndex = Math.floor(Math.random() * moviePoster.length);
            const movie = moviePoster[randomIndex];
            face.style.backgroundImage = `url(${movie})`;
        });
  });
}
setRandomMovie();

 // GET MISSIONS FROM MISSION.JS //
  function setRandomMission(missions) {
    const missionFaces = document.querySelectorAll(".mission");

    missionFaces.forEach(function(missionFace) {
        missionFace.innerHTML = '';

        const randomMission = Math.floor(Math.random() * missions.length);
        const mission = missions[randomMission];

        const missionContainer = document.createElement('span');
        missionContainer.textContent = mission; 
        missionFace.appendChild(missionContainer);
    });
}
setRandomMission(missions);
  
  // REFRESH BUTTONS //
  function addRefreshButtonEventListener(refreshButton, characters) {
    refreshButton.addEventListener("click", () => {
      characters.forEach(character => {
        getRandomHero(character);

          const existingSpan = character.querySelector('.face span');
          if (existingSpan) {
            existingSpan.remove();
          }
      
      });
    });
  }

  const refreshButtonOne = document.querySelector(".refresh-button.one");
  const refreshButtonTwo = document.querySelector(".refresh-button.two");
  
  addRefreshButtonEventListener(refreshButtonOne, characterOne);
  addRefreshButtonEventListener(refreshButtonTwo, characterTwo);  

  const refreshButtonMovie = document.querySelector(".refresh-button.movie-refresh");
  refreshButtonMovie.addEventListener("click", () => {
    setRandomMovie();
  });

  const refreshButtonMission = document.querySelector(".refresh-button.mission-refresh");
  refreshButtonMission.addEventListener("click", () => {
  setRandomMission(missions);
});
  


  
  