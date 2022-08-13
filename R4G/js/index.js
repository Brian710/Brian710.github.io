let windowButton = document.getElementById("StartButton");
let RunRight = document.getElementById("RunRight");
let RunLeft = document.getElementById("RunLeft");
let RunCenter = document.getElementById("RunCenter");
var distance = 0;

window.addEventListener('load', ()=>{
    if(window.innerWidth < window.innerHeight && window.innerWidth < 1180){
        distance = window.innerHeight * 1.5;
    }
    else{
        distance = window.innerWidth * 1.5;
    }
    anime({
        targets: RunRight,
        translateX: distance,
        duration: 10200,
        easing: 'linear',
        loop: true
    });
    anime({
        targets: RunCenter,
        translateX: distance,
        duration: 10000,
        easing: 'linear',
        loop: true
    });
    anime({
        targets: RunLeft,
        translateX: distance,
        duration: 10100,
        easing: 'linear',
        loop: true
    });
});
windowButton.addEventListener("click", ()=>{
    alert("開始養樹");
});
windowButton.addEventListener("mouseover", ()=>{
    windowButton.style.backgroundColor = "#009C9A";
    windowButton.children[0].style.color = "#FFFFFF";
});
windowButton.addEventListener("mouseout", ()=>{
    windowButton.style.backgroundColor = null;
    windowButton.children[0].style.color = "#009C9A";
});