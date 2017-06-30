//var colors=["rgb(255, 0, 0)","rgb(255, 255, 0)",
//"rgb(0, 255, 0)","rgb(0, 255, 255)","rgb(0, 0, 255)",
//"rgb(255, 0, 255)"];
var colors= generateRandomColor(6);

var h1= document.querySelector("h1");
var square=document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay= document.querySelector("#targetColor");
colorDisplay.textContent=pickedColor;

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares=3;
    colors=generateRandomColor(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0; i< square.length; i++){
        if(colors[i]){
            square[i].style.background=colors[i];
        }else{
            square[i].style.background="none";
        }
    }
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares=6;
    colors=generateRandomColor(numSquares);
    pickedColor=pickColor();
    for(var i=0;i< square.length; i++){
         square[i].style.background=colors[i];
         square[i].style.background="block";
    }
});





var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click",function(){
    colors = generateRandomColor(numSquares);
    pickedColor= pickColor();
    colorDisplay.textContent=pickedColor;
    this.textContent="New Colors";
    message.textContent="";
    for (var i=0; i<square.length;i++){
        square[i].style.background=colors[i];
    }
    h1.style.background="steelblue";
});



var message= document.querySelector("#message");
for (var i=0; i<square.length;i++){
    square[i].style.background=colors[i];

    square[i].addEventListener("click",function(){
        var clickedColor=this.style.background;
        if (clickedColor===pickedColor){
            message.textContent="Correct!";
            resetButton.textContent="Play Again?"
            changeColor(pickedColor);
            h1.style.background=clickedColor;
        }else{
            this.style.background="#232323";
            message.textContent ="Try Again!"
        }

    });

}

function changeColor(color){
    for (var i=0; i<square.length;i++){
        square[i].style.background=color;
    }
}

function pickColor(){
    var random= Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var red =Math.floor(Math.random() *255+1);
    var green =Math.floor(Math.random() *255+1);
    var blue =Math.floor(Math.random() *255+1);
    return "rgb(" + red +", "+green +", "+ blue +")";

}