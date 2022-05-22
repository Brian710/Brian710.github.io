window.onload = function(){
    if(screen.width <= 768){
        console.log("請使用橫式");
        alert("請使用橫式");
    };
    window.addEventListener("resize",()=>{
        if(screen.width <= 768){
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
    translateX: screen.width,
    duration: 4300,
    easing: 'linear',
    loop: true
});
anime({
    targets: RunLeft,
    translateX: screen.width,
    duration: 4700,
    easing: 'linear',
    loop: true
});
anime({
    targets: RunCenter,
    translateX: screen.width,
    duration: 4500,
    easing: 'linear',
    loop: true
});