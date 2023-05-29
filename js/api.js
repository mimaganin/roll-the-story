const randomScenarios = Array.from({ length: 6 }, function() {
  return (Math.floor(Math.random() * 100) + 1);
});

const scenarios = document.querySelectorAll(".scenario");

scenarios.forEach(function(element, index) {
  const randomScenario = randomScenarios[index];
  element.style.backgroundImage = `url("https://picsum.photos/id/${randomScenario}/200")`;
});

// fetch('https://api.unsplash.com/photos/random?query=object', {
//   headers: {
//     Authorization: 'Client-ID 1zfcnCeelLmlT704xeVPmWsqtvYeZq6fdhvcfQVouAg'
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     const objects = document.querySelectorAll(".object");
//     // objects.style.background = data
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// const crypto = require('crypto');
// const publicKey = '6547a23f165c59b9f23d9e30048fa66f';
// const privateKey = '6862883225799a0e5de143f796d5dcbec34531f3';
// const ts = Date.now().toString();
// const hash = crypto.createHash('md5').update(ts + privateKey + publicKey).digest('hex');
// const url = require('url');
// const baseUrl = 'http://gateway.marvel.com/v1/public/characters';
// const queryParams = {
//   ts: ts,
//   apikey: publicKey,
//   hash: hash
// };
// const apiUrl = url.format({ pathname: baseUrl, query: queryParams });

function getRandomHeroImage(element) {
  const randomHeroId = Math.floor(Math.random() * 731) + 1;
  const apiUrl = `https://superheroapi.com/api.php/6810662638961832/${randomHeroId}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.image.url;
      element.style.backgroundImage = `url(${imageUrl})`;
    })
    .catch(error => {
      console.log('Ops, we failed you', error);
    });
}

const characterOne = document.querySelectorAll(".character.one");
const characterTwo = document.querySelectorAll(".character.two");

characterOne.forEach(character => {
  getRandomHeroImage(character);
});

characterTwo.forEach(character => {
  getRandomHeroImage(character);
});




