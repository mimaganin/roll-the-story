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

