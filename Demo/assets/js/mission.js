let train = document.getElementById("TrainMode");
let logout = document.getElementById("btn-logout");
let loaded = false;

window.addEventListener('load', ()=>{
});

train.addEventListener("click", ()=>{
    window.location.href = "Train.html";
});

logout.addEventListener("click", ()=>{
    window.location.href = "index.html";
});

document.body.addEventListener('click', ()=>{
    if(!loaded){
        document.querySelector("#AudioPlayer").play();
        document.body.setAttribute("data-sound", "on");
        loaded = true;
    }
});

document.getElementById("btn-sound").addEventListener('click', ()=>{
    let _active = document.body.getAttribute("data-sound");
    if(_active == "on"){
        document.querySelector("#AudioPlayer").pause();
        document.body.setAttribute("data-sound", "off")
    }
    else if(_active == "off"){
        document.querySelector("#AudioPlayer").play();
        document.body.setAttribute("data-sound", "on")
    }
});