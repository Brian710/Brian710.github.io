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
    duration: 10200,
    easing: 'linear',
    loop: true
});
anime({
    targets: RunCenter,
    translateX: window.innerWidth * 1.5,
    duration: 10000,
    easing: 'linear',
    loop: true
});
anime({
    targets: RunLeft,
    translateX: window.innerWidth * 1.5,
    duration: 10100,
    easing: 'linear',
    loop: true
});