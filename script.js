var timer  = 60;
var newhit;
var sco = 0;
function scoreinc(){
    sco+=10;
    document.querySelector("#score").textContent=sco;
}
function gethit(){
    newhit = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=newhit;
}

function makeBubble(){
    var dump = "";
for(var i=0;i<108;i++){
    var num = Math.floor(Math.random()*10);
    dump+=`<div class="bubble">${num}</div>`
}
document.querySelector("#btmb").innerHTML = dump;
}
function timst(){
    var timint = setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#tim").textContent = timer;
    }
    else{
        clearInterval(timint);
        document.querySelector("#btmb").innerHTML = `<h1>GAME OVER</h1>`;
    }
     },1000)
}

document.querySelector("#btmb").addEventListener("click",function(dets){
    var clickeda = Number(dets.target.textContent);
    if(clickeda === newhit){
        scoreinc();
        makeBubble();
        gethit();
    }
})
timst();
makeBubble();
gethit();
