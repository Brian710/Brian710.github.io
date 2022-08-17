let vw = window.innerWidth * 0.01;
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vw', `${vw}px`);
document.documentElement.style.setProperty('--vh', `${vh}px`);
let nav_container = document.getElementById("nav-bar-conatiner");
let _isScrolling;

window.addEventListener('DOMContentLoaded', ()=>{
    GenerateNavBar();
    GenerateFixPlayIcon();
    InsertNoneObject();
});

window.addEventListener("resize",()=>{
    if(!_isScrolling){
        location.reload();
    }
});

window.addEventListener("scroll", ()=>{
    _isScrolling = true;
});

document.body.addEventListener('click', (el)=>{
    if(el.target != document.getElementById("menu-btn") && el.target != document.getElementById("noise")){
        if(document.getElementById("nav-bar").getAttribute("data") == "open"){
            document.getElementById("mobile-menu-btn").style.display = "flex";
            document.getElementById("nav-bar").style.display = "none";
            document.getElementById("nav-bar-click-zone").style.display = "none";
        }
    }
});

function GenerateNavBar(){
    nav_container.innerHTML = 
    '<div class="mobile-menu-btn" id="mobile-menu-btn">\
        <div class="menu-btn" id="menu-btn">&equiv;</div>\
    </div>\
    <div class="nav-bar" id="nav-bar" data="close">\
        <div class="noise" id="noise" style="width: 100%; height: 100%; z-index: 10;"></div>\
        <div class="nav-bar-row row-4">\
            <div class="mobile-menu-arrow" id="mobile-menu-arrow">&larr;</div>\
            <a class="nav-bar-btn-home" href="https://www.fubon.com/financialholdings/home/index.html"></a>\
        </div>\
        <div class="nav-bar-row row-8">\
            <div class="nav-bar-btn"><a href="./game.html"><p>勇闖森林GO!</p></a></div>\
            <div class="nav-bar-btn"><a href="./gameIntroduction.html"><p>森林遊戲介紹</p></a></div>\
            <div class="nav-bar-btn"><a href="./lottery.html"><p>抽獎好禮&中獎名單</p></a></div>\
            <div class="nav-bar-btn"><a href="https://www.fubon.com/r4g/#r4g" target="_blank"><p>Run For Green</p></a></div>\
            <div class="nav-bar-btn" id="btn-home"><a href="./index.html"><p>回首頁</p></a></div>\
        </div>\
    </div>\
    <div class="nav-bar-click-zone" id="nav-bar-click-zone"></div>';
    AddNavObjectListener();
}

function AddNavObjectListener(){
    let menu_btn = document.getElementById("mobile-menu-btn");
    menu_btn.addEventListener('click', ()=>{
        menu_btn.style.display = "none";
        document.getElementById("nav-bar").style.display = "flex";
        document.getElementById("nav-bar-click-zone").style.display = "flex";
        document.getElementById("nav-bar").setAttribute("data", "open");
    });

    let mobile_menu_arrow = document.getElementById("mobile-menu-arrow");
    mobile_menu_arrow.addEventListener('click', ()=>{
        menu_btn.style.display = "flex";
        document.getElementById("nav-bar").style.display = "none";
        document.getElementById("nav-bar-click-zone").style.display = "none";
        document.getElementById("nav-bar").setAttribute("data", "close");
    });

    let home_btn = document.getElementById("btn-home");
    if(nav_container.getAttribute("data") == "index"){
        home_btn.style.display = "none";
    }
}

function InsertNoneObject(){
    if(window.innerWidth > window.innerHeight && window.innerWidth >= 1180){
        let noneObj = document.createElement("div");
        noneObj.setAttribute("class", "nav-bar-btn");
        document.getElementById("nav-bar").appendChild(noneObj);
    }
}

function GenerateFixPlayIcon(){
    let icon_container = document.createElement("div");
    icon_container.setAttribute("class", "PlayIcon");

    let icon = document.createElement("img");
    icon.setAttribute("src", "./images/common/playIcon.svg");

    icon_container.appendChild(icon);

    icon_container.addEventListener('click', ()=>{
        location.href = "./game.html";
    });

    document.body.appendChild(icon_container);
}

