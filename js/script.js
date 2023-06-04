import { missions } from './missions.js';

// ROLL DICE //
  const diceElements = document.querySelectorAll('.dice');
  const rollBtns = document.querySelectorAll('.roll');
  const rollMissionBtn = document.querySelector('.roll-mission');

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

  
// CLEAN ADDED MISSION MESSAGE WHEN CLICKING ROLL //
  rollMissionBtn.addEventListener('click', () => {
      successMessage.textContent = "";
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
          console.log(error);
        });
    }
 
    
// APPLY CHARACTERS  //
  const characterOne = document.querySelectorAll(".character.one");
  const characterTwo = document.querySelectorAll(".character.two");
  
  characterOne.forEach(character => {
    getRandomHero(character);
  });

  characterTwo.forEach(character => {
    getRandomHero(character);
  });


// GET MOVIES FROM TMDB API //
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


// ADD NEW MISSION BY PLAYER // 
  function setCustomMission(missionFace, mission) {
    missionFace.innerHTML = '';

    const missionContainer = document.createElement('span');
    missionContainer.textContent = mission; 
    missionFace.appendChild(missionContainer);
  }

  function addMission() {
    const inputField = document.getElementById("newMissionInput");
    const newMission = inputField.value.trim();
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");

    if (newMission !== "") {
      missions.push(newMission);

      const frontMissionFace = document.querySelector(".face.mission");
        if (frontMissionFace) {
            setCustomMission(frontMissionFace, newMission);
        }

      inputField.value = ""; 
      errorMessage.textContent = ""; 
      successMessage.textContent = "Great job, new mission added. Keep rolling! To add more, click Mission refresh first."; 
    } else {
      errorMessage.textContent = "Please enter a valid mission";
    }
  }
  document.getElementById("addMissionButtonDesktop").addEventListener("click", addMission);


//// REFRESH BUTTONS ////

  // REFRESH CHARACTERS //
  function addRefreshButtonEventListener(refreshButton, characters) {
    refreshButton.addEventListener("click", () => {
        characters.forEach(character => {
          getRandomHero(character);
            const existingSpan = character.querySelector('.face span');
            if (existingSpan) {
              existingSpan.remove();
            }
        });
        if (refreshButton == refreshButtonOne) {
          let characterDie = document.querySelector('.dice.dice-character.one');
          characterDie.style.transform = 'rotateX(0deg) rotateY(0deg)';
        }
        else {
          let characterDie = document.querySelector('.dice.dice-character.two');
          characterDie.style.transform = 'rotateX(0deg) rotateY(0deg)';
        }   
    });
  }
  const refreshButtonOne = document.querySelector(".refresh-button.one");
  const refreshButtonTwo = document.querySelector(".refresh-button.two");
  addRefreshButtonEventListener(refreshButtonOne, characterOne);
  addRefreshButtonEventListener(refreshButtonTwo, characterTwo);

  // REFRESH MOVIES //
    const refreshButtonMovie = document.querySelector(".refresh-button.movie-refresh");
    refreshButtonMovie.addEventListener("click", () => {
      setRandomMovie();
      const movieDie = document.querySelector('.dice.dice-movie');
      movieDie.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });

  // REFRESH MISSIONS //
    const refreshButtonMission = document.querySelector(".refresh-button.mission-refresh");
    refreshButtonMission.addEventListener("click", () => {
      setRandomMission(missions);
      successMessage.textContent = ""; 
      const missionDie = document.querySelector('.dice.dice-mission');
      missionDie.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });