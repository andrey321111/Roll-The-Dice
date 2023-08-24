function rollDice(){
    var runNumber=Math.floor((Math.random()*6)+1);
    var p1=runNumber;
    var runNumber=Math.floor((Math.random()*6)+1);
    var p2=runNumber;

    if(p1==1){
        document.getElementById("player-one").setAttribute("src","./assets/one.png")
    }else if(p1==2){
        document.getElementById("player-one").setAttribute("src","./assets/two.png")
    }else if(p1==3){
        document.getElementById("player-one").setAttribute("src","./assets/three.png")
    }else if(p1==4){
        document.getElementById("player-one").setAttribute("src","./assets/four.png")
    }else if(p1==5){
        document.getElementById("player-one").setAttribute("src","./assets/five.png")
    }else if(p1==6){
        document.getElementById("player-one").setAttribute("src","./assets/six.png")
    }

    if(p2==1){
        document.getElementById("player-two").setAttribute("src","./assets/one.png")
    }else if(p2==2){
        document.getElementById("player-two").setAttribute("src","./assets/two.png")
    }else if(p2==3){
        document.getElementById("player-two").setAttribute("src","./assets/three.png")
    }else if(p2==4){
        document.getElementById("player-two").setAttribute("src","./assets/four.png")
    }else if(p2==5){
        document.getElementById("player-two").setAttribute("src","./assets/five.png")
    }else if(p2==6){
        document.getElementById("player-two").setAttribute("src","./assets/six.png")
    }

    if(p1>p2){
        document.querySelector("h1").textContent="Player 1 Won!";
        document.getElementById("p1Img").style.visibility="visible";
        document.getElementById("p2Img").style.visibility="hidden";
    }else if(p1<p2){
        document.querySelector("h1").textContent="Player 2 Won!";
        document.getElementById("p1Img").style.visibility="hidden";
        document.getElementById("p2Img").style.visibility="visible";
    }else{
        document.querySelector("h1").textContent="Draw!!";
        document.getElementById("p1Img").style.visibility="visible";
        document.getElementById("p2Img").style.visibility="visible";
    }



}
document.querySelector("button").addEventListener("click",function(){
    rollDice();
})