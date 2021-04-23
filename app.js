const p1 = {
    score: 0,
    button: document.querySelector('.p1game'),
    display: document.querySelector('#p1display')
}
const p2 = {
    score: 0,
    button: document.querySelector('.p2game'),
    display: document.querySelector('#p2display')
}

const reset = document.querySelector('.reset');
const maxScoreSelect = document.querySelector('#max');

let winningScore = 3;
let gameOver = false;



const upScore = (player, opponent)=> {
    if(!gameOver){
        player.score += 1;
        player.display.textContent = player.score;
        if(player.score === winningScore){
            gameOver = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
        }

    }
}
const resetFunc = () => {

    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'loser');
        gameOver = false;
    }
};
maxScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(maxScoreSelect.value);
    resetFunc();
});

p1.button.addEventListener('click', () => {
    upScore(p1, p2);
});
p2.button.addEventListener('click', () => {
    upScore(p2, p1);
});
reset.addEventListener('click', resetFunc);

