// function play(){
//     // step-1: hide the home screen to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     //show the the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }


function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    //check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('you get a point');
        // update score
        // 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);

        // 2. increase the score by 1
        const newScore = currentScore + 1;
        
        // 3. show the updated score
        currentScoreElement.innerText = newScore;


        // console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        console.log('you missed. you lost a life');

        // step1: get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        // step2: reduce the life count
        const newLife = currentLife - 1;

        // step3: display the updated life count
        currentLifeElement.innerText = newLife;
    }
}
// captured keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame() {
    //step 1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log('your random alphabet', alphabet);

    //  set randomly generated alphabet to show the screen 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);

}



function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}