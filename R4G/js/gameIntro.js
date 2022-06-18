let vw = window.innerWidth * 0.01;
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vw', `${vw}px`);
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.onload = function(){
    if(window.innerWidth < window.innerHeight && window.innerWidth < 1440){
        console.log("請使用橫式");
        alert("請使用橫式");
    };
};
window.addEventListener("resize",()=>{
    if(window.innerWidth < window.innerHeight && window.innerWidth < 1440){
        alert("請使用橫式");
        console.log("請使用橫式");
    }
    else{
        location.reload();
    }
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