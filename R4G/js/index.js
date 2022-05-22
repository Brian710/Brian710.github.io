let vw = window.innerWidth * 0.01;
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vw', `${vw}px`);
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.onload = function(){
    if(window.innerWidth <= 768){
        console.log("請使用橫式");
        alert("請使用橫式");
    };
    window.addEventListener("resize",()=>{
        if(window.innerWidth <= 768){
            alert("請使用橫式");
            console.log("請使用橫式");
        }
        else{
            location.reload();
        }
    });
};

let windowButton = document.getElementById("StartButton");
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

let RunRight = document.getElementById("RunRight");
let RunLeft = document.getElementById("RunLeft");
let RunCenter = document.getElementById("RunCenter");
anime({
    targets: RunRight,
    translateX: window.innerWidth * 1.5,
    duration: 6200,
    easing: 'linear',
    loop: true
});
anime({
    targets: RunCenter,
    translateX: window.innerWidth * 1.5,
    duration: 6000,
    easing: 'linear',
    loop: true
});
anime({
    targets: RunLeft,
    translateX: window.innerWidth * 1.5,
    duration: 6100,
    easing: 'linear',
    loop: true
});