let x = Math.ceil(Math.random()*6);
let y = Math.ceil(Math.random()*6);
document.getElementById("img1").src = "./images/dice"+x+".png";
document.getElementById("img2").src = "./images/dice"+y+".png";
if(x>y){
    document.getElementById("result").innerHTML = `Player 1 Wins!`;
}
else if(x<y){
    document.getElementById("result").innerHTML = `Player 2 Wins!`;
}
else{
    document.getElementById("result").innerHTML = `Draw!`;
}