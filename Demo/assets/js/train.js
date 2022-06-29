let home = document.getElementById("btn-home");
let btn_plus = document.getElementById("plus");
let btn_minus = document.getElementById("minus");
let count = document.getElementById("input-pour");
let loaded = false;
let first = false;
let pano = "";
let CurrentPour = "";
let pourcount = 0;
let mainindex = 0;
let hardenerindex = 0;
let dispensingindex = 0;

window.addEventListener('load', ()=>{
    embedpano({swf:"tour.swf", xml:"tour.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
    pano = parent.window.document.getElementById("krpanoSWFObject");
});

home.addEventListener("click", ()=>{
    window.location.href = "Mission.html";
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

lottie.loadAnimation({
    wrapper: document.getElementById("logoanimation"),
    animType: 'svg',
    loop: true,
    path: './assets/animation/logo.json'
});

setTimeout(function(){
    document.getElementById("cutscenes").remove();
}, 2500);

function Pour(name){
    CurrentPour = name;
    if(!first){
        document.getElementById("pour-container").style.visibility = "visible";
        pano.call("set(hotspot[bucket].url, '')");
        first = true;
    }
    OpenPourWindow(name);
}

btn_plus.addEventListener('click', ()=>{
    let curVal = parseInt(count.value);
    if(count.value < 110){
        count.value = curVal + 10;
    }
});

btn_minus.addEventListener('click', ()=>{
    let curVal = parseInt(count.value);
    if(curVal > 0){
        count.value = curVal - 10;
    }
});

document.getElementById("btn-pour-submit").addEventListener('click', ()=>{
    SubmitPour();
});

document.getElementById("btn-submit").addEventListener("click", ()=>{
    SubmitResult();
})

function OpenPourWindow(name){
    document.getElementById("popwindow").style.visibility = "visible";
    document.getElementById("pour-window-container").style.visibility = "visible";

    document.getElementById("pour-object").style.content = "url(./assets/images/train/" + name + ".png)";
}

function SubmitPour(){
    document.getElementById("popwindow").style.visibility = "hidden";
    document.getElementById("pour-window-container").style.visibility = "hidden";

    if(parseInt(count.value) > 110) count.value = 110;

    switch(CurrentPour){
        case "main":
            if(mainindex == 0){
                pourcount++;
                PourBucket("#FFFF66");
                mainindex = pourcount;
            }
            else{
                RePour(mainindex);
            }
            document.getElementById("main-count").innerHTML = parseInt(count.value);            
            break;
        case "hardener":
            if(hardenerindex == 0){
                pourcount++;
                PourBucket("#FD282A");
                hardenerindex = pourcount;
            }
            else{
                RePour(hardenerindex);
            }
            document.getElementById("hardener-count").innerHTML = parseInt(count.value);
            break;
        case "dispensing":
            if(dispensingindex == 0){
                pourcount++;
                PourBucket("#2D7FBF");
                dispensingindex = pourcount;
            }
            else{
                RePour(dispensingindex);
            }
            document.getElementById("dispensing-count").innerHTML = parseInt(count.value);
            break;
    }
    count.value = 0;
}

function PourBucket(color){
    if(pourcount == 1){
        document.getElementById("pour-1").style.backgroundColor = color;
        document.getElementById("pour-1").style.height = `${(parseInt(count.value) / 110) * 5}rem`;
    }
    else if(pourcount == 2){
        document.getElementById("pour-2").style.backgroundColor = color;
        document.getElementById("pour-2").style.height = `${(parseInt(count.value) / 110) * 5}rem`;
    }
    else if(pourcount == 3){
        document.getElementById("pour-3").style.backgroundColor = color;
        document.getElementById("pour-3").style.height = `${(parseInt(count.value) / 110) * 5}rem`;
    }
}

function RePour(index){
    if(index == 1){
        // document.getElementById("pour-1").style.backgroundColor = color;
        document.getElementById("pour-1").style.height = `${(parseInt(count.value) / 110) * 5}rem`;
    }
    else if(index == 2){
        // document.getElementById("pour-2").style.backgroundColor = color;
        document.getElementById("pour-2").style.height = `${(parseInt(count.value) / 110) * 5}rem`;
    }
    else if(index == 3){
        // document.getElementById("pour-3").style.backgroundColor = color;
        document.getElementById("pour-3").style.height = `${(parseInt(count.value) / 110) * 5}rem`;
    }
}

function SubmitResult(){
    document.getElementById("popwindow").style.visibility = "visible";
    document.getElementById("submit-window-container").style.visibility = "visible";

    let main_count = document.getElementById("main-count").innerHTML;
    let hardener_count = document.getElementById("hardener-count").innerHTML;
    let dispensing_count = document.getElementById("dispensing-count").innerHTML;

    document.getElementById("main-result-count").innerHTML = main_count;
    document.getElementById("hardener-result-count").innerHTML = hardener_count;
    document.getElementById("dispensing-result-count").innerHTML = dispensing_count;

    if(main_count == 80 && hardener_count == 20 && dispensing_count == 10){
        document.getElementById("submit-result").style.content = "url(./assets/images/train/FinCorrect.svg)";
    }
    else{
        document.getElementById("submit-result").style.content = "url(./assets/images/train/FinError.svg)";
    }
}

document.getElementById("restart").addEventListener('click', ()=>{
    // window.location.href = "Exam.html";
    document.getElementById("popwindow").style.visibility = "hidden";
    document.getElementById("submit-window-container").style.visibility = "hidden";
});
document.getElementById("next").addEventListener('click', ()=>{
    window.location.href = "Mission.html";
});