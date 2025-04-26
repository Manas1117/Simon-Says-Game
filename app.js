let gameSeq = [];
let userSeq = [];
let btns = ["r","y","g","p"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function btnFlash(randbtn){
    randbtn.classList.add("flash");
    setTimeout(function(){
        randbtn.classList.remove("flash")
    },100);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText =`level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    // console.log(randIdx);
    // console.log(randCol);
    // console.log(randBtn);
    gameSeq.push(randCol);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    // let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500);
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b> ${level} </b> <br> Press any key to start the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white"; 
        },150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}