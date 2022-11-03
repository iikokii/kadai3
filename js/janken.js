
const hands = ['rock','paper','scissors'];


funcA();

function funcA () {
    console.log('Hello world');
}


const funcB =function (){
    console.log("Hello from function expression");
}

function onHandClick(btn){
    const playerHand = btn.id;
    // console.log(btn.id);




// const i = Math.floor(Math.random() * 3);
const i = Math.floor(Math.random() * hands.length);

const computerHand = hands[i];
// console.log(computerHand);
const computerElement = document.querySelector('#computerHand');
// console.log(computerElement);
computerElement.innerText = computerHand;


const result = judge(playerHand, computerHand);


document.querySelector('#outcome').innerText = result;
}


// floor→小数点を切る
// var random = Math.floor(Math.random() * 3);
// console.log(random, "ランダムな数字")


function judge(playerHand, computerHand){
    let result = undefined;

    if (playerHand === computerHand) {
        result = 'Draw';
    } else if (
        (playerHand === 'rock' && computerHand === 'scissors') ||
        (playerHand === 'paper' && computerHand === 'rock') ||
        (playerHand === 'scissors' && computerHand === 'paper') 
    ) {
        result = 'Win';
    } else {
        result = 'Lose';
    }



    return result;
}

const reset = function () {
    location.reload();
}




for (let playerHand of hands){
    for (let computerHand of hands) {
        const result = judge(playerHand, computerHand);
        

        let str ='p:' + (playerHand + ',').padEnd('scissors, '.length);
        str += 'c: ' + (computerHand + ', ') .padEnd('scissors, '.length);
        str += 'player: ' + result;
        console.log(str);
    }
}


