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

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    //check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);


       

        // ----------------------------------------
        // update score
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        

        // // 2. increase the score by 1
        // const newScore = currentScore + 1;
        
        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;

        // start new round
        // console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        console.log('you missed. you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

        //----------------------------------------------
        // step1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // step2: reduce the life count
        // const newLife = currentLife - 1;

        // // step3: display the updated life count
        // currentLifeElement.innerText = newLife;
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
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    continueGame();

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    //1. get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    
    removeBackgroundColorById(currentAlphabet);

}