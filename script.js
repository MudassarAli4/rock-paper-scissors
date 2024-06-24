const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resetButton = document.getElementById('reset-button');

const userChoiceBox = document.getElementById('user-choice-box');
const computerChoiceBox = document.getElementById('computer-choice-box');
const resultBox = document.getElementById('result-box');

const choicesArray = ['✊', '✋', '✌️'];

let userScore = 0;
let computerScore = 0;

choices.forEach(choice => choice.addEventListener('click', (e) => {
    const userChoice = e.target.id;
    const userChoiceEmoji = e.target.textContent;
    userChoiceDisplay.textContent = `Your Choice: ${userChoiceEmoji}`;
    
    const computerChoice = getComputerChoice();
    computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`;

    const result = getResult(userChoice, computerChoice);
    resultDisplay.textContent = `Result: ${result}`;
    updateScores(result);
    updateResultBox(result);

    e.target.classList.add('active');

    setTimeout(() => {
        e.target.classList.remove('active');
    }, 100);
}));

resetButton.addEventListener('click', resetGame);

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choicesArray[randomIndex];
}

function getResult(userChoice, computerChoice) {
    const userChoiceEmoji = choicesArray[['rock', 'paper', 'scissors'].indexOf(userChoice)];
    if ((userChoiceEmoji === '✊' && computerChoice === '✌️') || 
        (userChoiceEmoji === '✋' && computerChoice === '✊') || 
        (userChoiceEmoji === '✌️' && computerChoice === '✋')) {
        return 'You Win!';
    } else if ((userChoiceEmoji === '✊' && computerChoice === '✋') || 
               (userChoiceEmoji === '✋' && computerChoice === '✌️') || 
               (userChoiceEmoji === '✌️' && computerChoice === '✊')) {
        return 'You Lose!';
    } else {
        return 'It\'s a Draw!';
    }
}

function updateScores(result) {
    if (result === 'You Win!') {
        userScore++;
        userScoreDisplay.textContent = `Your Score: ${userScore}`;
    } else if (result === 'You Lose!') {
        computerScore++;
        computerScoreDisplay.textContent = `Computer's Score: ${computerScore}`;
    }
}

function updateResultBox(result) {
    resultBox.classList.remove('win', 'lose', 'draw');
    if (result === 'You Win!') {
        resultBox.classList.add('win');
    } else if (result === 'You Lose!') {
        resultBox.classList.add('lose');
    } else {
        resultBox.classList.add('draw');
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.textContent = `Your Score: ${userScore}`;
    computerScoreDisplay.textContent = `Computer's Score: ${computerScore}`;
    userChoiceDisplay.textContent = `Your Choice: -`;
    computerChoiceDisplay.textContent = `Computer's Choice: -`;
    resultDisplay.textContent = `Result: -`;
    resultBox.classList.remove('win', 'lose', 'draw');
}
