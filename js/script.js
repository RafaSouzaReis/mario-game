const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const cloud01 = document.querySelector('.cloud01')
const cloud02 = document.querySelector('.cloud02')
const scoreTag = document.querySelector('.score')

var score = 0;

const Jump = () =>{
    mario.classList.add('jump')
    setTimeout(() =>{
        mario.classList.remove('jump')
    }, 500)
}

const Death = () =>{
    const pipePosition = pipe.offsetLeft;
    const cloudPosition01 = cloud01.offsetLeft;
    const cloudPosition02 = cloud02.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
    
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './img/mario-jump-images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        cloud01.style.animation = 'none'
        cloud01.style.left = `${cloudPosition01}px`

        cloud02.style.animation = 'none'
        cloud02.style.left = `${cloudPosition02}px`
    }
}

const ScoreCalculator = () =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(!(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 )){
        score += 0.01
    }
}

const SetScore = () => {
    scoreTag.textContent = score.toFixed()
}

const gameLoop = setInterval(() =>{
    Death() 
    ScoreCalculator()
    SetScore()
}, 10)

document.addEventListener('keydown', Jump)