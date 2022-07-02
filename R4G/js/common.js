let vw = window.innerWidth * 0.01;
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vw', `${vw}px`);
document.documentElement.style.setProperty('--vh', `${vh}px`);
let _isScrolling;

window.onload = function(){
    if(window.innerWidth < window.innerHeight && window.innerWidth < 1440){
        document.body.style.transformOrigin = "top left";
        document.body.style.transform = "rotate(90deg) translate(0,-100vmin)";
    }
    InsertNoneObject();
};

window.addEventListener("resize",()=>{
    if(!_isScrolling){
        location.reload();
    }
});

window.addEventListener("scroll", ()=>{
    _isScrolling = true;
});

let menu_btn = document.getElementById("mobile-menu-btn");
menu_btn.addEventListener('click', ()=>{
    menu_btn.style.display = "none";
    document.getElementById("nav-bar").style.display = "flex";
});

let mobile_menu_arrow = document.getElementById("mobile-menu-arrow");
mobile_menu_arrow.addEventListener('click', ()=>{
    menu_btn.style.display = "flex";
    document.getElementById("nav-bar").style.display = "none";
});

function InsertNoneObject(){
    if(window.innerWidth > window.innerHeight && window.innerWidth >= 1180){
        let noneObj = document.createElement("div");
        noneObj.setAttribute("class", "nav-bar-btn");
        document.getElementById("nav-bar").appendChild(noneObj);
    }
}