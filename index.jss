var r1= (Math.floor(Math.random()*6 ))+1 ;
var r2= (Math.floor(Math.random()*6 ))+1 ;

var ri1="images/dice"+r1+".png";
var ri2="images/dice"+r2+".png";

document.querySelector(".ima1").setAttribute("src",ri1);
document.querySelector(".ima2").setAttribute("src",ri2);

if(r1>r2){
    document.querySelector("h1").innerHTML=" 🚩PLAYER 1 WINS";
}
else if(r1==r2)
    document.querySelector("h1").innerHTML="DRAW!";
else{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS 🚩";
}

