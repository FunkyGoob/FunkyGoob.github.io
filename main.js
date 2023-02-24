let firstNumber = 0;
let secondNumber = 0;
let highScore = 0;

function startGame(){
    document.getElementById("page-1").id = "noPage";
    document.getElementById("noPage2").id = "page-2";
    loadGame();
}


function loadGame(){
    firstNumber = random();
    document.getElementById("number").innerHTML = firstNumber;
    var name = (document.getElementById("name").value);
    if(name == ""){
        document.getElementById("player").innerHTML = "Anonymous";
    }else{
    document.getElementById("player").innerHTML = name;}
}

function buttonH(){
    secondNumber = firstNumber;
    firstNumber = random();
    if(checker(firstNumber, secondNumber) == true){
        scoreUpdate();
        document.getElementById("previous").innerHTML = secondNumber;
        document.getElementById("number").innerHTML = firstNumber;
    }else{
        scoreUpdate();
        document.getElementById("page-2").id = "noPage2";
    }
}

function buttonL(){
    secondNumber = firstNumber;
    firstNumber = random();
    if(checker(firstNumber, secondNumber) == false){
        scoreUpdate();
        document.getElementById("previous").innerHTML = secondNumber;
        document.getElementById("number").innerHTML = firstNumber;
    }else{
        scoreUpdate();
        document.getElementById("page-2").id = "noPage2";
    }
}



function scoreUpdate(){
    var num = document.getElementById("score");
    var newScore = parseInt(num.innerHTML);
    num.innerHTML = newScore + 1;
}

function checker(num1, num2){
    if(num1 > num2){
        return true;
    }
    else{
        return false;
    }
}


function random(){
    return Math.floor(Math.random() * 50000)
}