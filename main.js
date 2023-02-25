let firstNumber = 0;
let secondNumber = 0;
let highScore = 0;
document.getElementById("name").addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        document.getElementById("button").click();
    }
})

function startGame(){
    document.getElementById("page-1").id = "noPage";
    document.getElementById("noPage2").id = "page-2";
    loadGame();
    
}


function loadGame(){
    resetScore();
    firstNumber = random();
    document.getElementById("number").innerHTML = firstNumber;
    let name = (document.getElementById("name").value);
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
        finalScore();
        document.getElementById("page-2").id = "noPage2";
        document.getElementById("noPage3").id = "page-3";
        let name = (document.getElementById("name").value);
        if(name == ""){
            document.getElementById("endPlayer").innerHTML = "Anonymous";
        }else{
        document.getElementById("endPlayer").innerHTML = name;}
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
        finalScore();
        document.getElementById("page-2").id = "noPage2";
        document.getElementById("noPage3").id = "page-3";
        let name = (document.getElementById("name").value);
        if(name == ""){
            document.getElementById("endPlayer").innerHTML = "Anonymous";
        }else{
        document.getElementById("endPlayer").innerHTML = name;}
    }
}

function mainScreen(){
    document.getElementById("page-3").id = "noPage3";
    document.getElementById("noPage").id = "page-1";
    firstNumber = 0;
    secondNumber = 0;
    if(highScore < document.getElementById("final").innerHTML){
    highScore = document.getElementById("final").innerHTML;
    document.getElementById("highScore").innerHTML = highScore;}
    var value = document.getElementById("name");
    value.value = "";
}

function scoreUpdate(){
    var num = document.getElementById("score");
    var newScore = parseInt(num.innerHTML);
    num.innerHTML = newScore + 1;
}

function finalScore(){
    var num = document.getElementById("score");
    var final = document.getElementById("final")
    var newScore = parseInt(num.innerHTML);
    final.innerHTML = newScore + 1;
}

function resetScore(){
    var num = document.getElementById("score");
    num.innerHTML = 0;
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