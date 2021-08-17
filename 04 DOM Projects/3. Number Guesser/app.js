//Select
let game = document.querySelector('#game')
let minNum = document.querySelector('.min-num')
let maxNum = document.querySelector('.max-num')

let guessNum = document.querySelector('#guess-num')
let btn = document.querySelector('#submit-btn')
let message = document.querySelector('.message')

//Game values
let min = 1
let max = 10

let winnningNum = Math.floor(Math.random() * (max - min + 1) + min)

let maxTries = 3

minNum.textContent = min
maxNum.textContent = max

game.addEventListener('mousedown', (e) => {
    if (e.target.className === 'play-again') {
        window.location.reload()
    }
})


btn.addEventListener('click', () => {
    let guess = parseInt(guessNum.value)

    //Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between between ${min} and ${max}`, 'red')
    }

    if(guess === winnningNum) {
        gameOver(true, `${winnningNum} is correct!`)

    } else {
        maxTries -= 1

        if (maxTries === 0) {
            gameOver(false, `Game is over! Correct number is ${winnningNum}`)
        } else {
            guessNum.value = ''
            setMessage(`${guess} is not correct, ${maxTries} guesses left`, 'red')
            guessNum.style.borderColor = 'red'
        }
    }
})


function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg) {
    let color
    won === true ? color = 'green' : color = 'red'
    guessNum.disabled = true
    guessNum.style.borderColor = color
    message.style.color = color
    setMessage(msg)

    btn.value = 'Play again'
    btn.className += 'play-again'
}
