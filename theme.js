let gameSeq = [];
let userSeq = [];
let hiScore = [];
let gameStart = false;
let btns = ['cyan','green','brown','purple'];
let level = 0;
let sub_heading = document.querySelector('h3');

//=================== Key Press To start ========================
document.addEventListener('keypress', function(){
    if(gameStart == false){
        console.log(gameStart);
        gameStart = true;

        levelUp();
    }
});

//=================== Button Flash Function ========================
function btnFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },150);
}

//=================== Level Up Function ========================
function levelUp() {
    userSeq = [];
    level++;
    sub_heading.innerHTML = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randomColor}`)
    gameSeq.push(randomColor);
    btnFlash(randBtn);
}

//=================== Check Answer  Function ========================
function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx] ){
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000)
        }
    } 
    else {
        sub_heading.innerHTML = `Game Over!<br> Your sore: ${level}<br>Press Any Key To Restart Game`;
        document.querySelector('body').style.background ="red";
        setTimeout(function(){
            document.querySelector('body').style.background ="white";
        },150);
        highScore();
        reset();
    }

}
//=================== Button Press Function ========================
function btnPressed(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute('id');
    userSeq.push(userColor); 
    checkAns(userSeq.length-1);   
}
let allBtns = document.querySelectorAll('.box');
for(all of allBtns) {
    all.addEventListener('click', btnPressed)
}

//=================== Reset Function ========================

function reset(){
    gameStart = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}

function highScore() {
    hiScore.push(level);
    console.log(hiScore);
    let max = hiScore[0];
    for (let i = 0; i < hiScore.length; i++) {
        if (hiScore[i] > max) {
            max = hiScore[i];
        }
    }
    console.log('max', max);
    let strong = document.querySelector('strong');
    strong.innerText = max;
}