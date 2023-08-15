var num= Math.random();
num=num*6;
var num1=Math.floor(num);
num1=num1+1;
var diceImage="dice"+num1+".png";
var setImage="images/" + diceImage;
document.querySelectorAll("img")[0].setAttribute("src",setImage);
var num2= Math.random();
num2=num2*6;
var num3=Math.floor(num2);
num3=num3+1;
var diceImage2="dice"+num3+".png";
var setImage2="images/" + diceImage2;
document.querySelectorAll("img")[1].setAttribute("src",setImage2);


if (num1<num3){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else if (num1>num3){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else {
    document.querySelector("h1").innerHTML="Its a Tie!";
}