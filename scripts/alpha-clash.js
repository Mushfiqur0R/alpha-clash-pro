// function play(){
//     // step-1: hide the home screen to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     //show the the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }


function handleKeyboardButtonPress(){
    console.log('button pressed');
}
// captured keyboard key press
document.addEventListener('keyup',handleKeyboardButtonPress );


function continueGame(){
    //step 1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet', alphabet);

    //  set randomly generated alphabet to show the screen 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
    
}



function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}