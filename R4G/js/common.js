let vw = window.innerWidth * 0.01;
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vw', `${vw}px`);
document.documentElement.style.setProperty('--vh', `${vh}px`);
let _isScrolling;

window.addEventListener('DOMContentLoaded', ()=>{
    GenerateNavBar();
    InsertNoneObject();
});

// window.addEventListener("resize",()=>{
//     if(!_isScrolling){
//         location.reload();
//     }
// });

// window.addEventListener("scroll", ()=>{
//     _isScrolling = true;
// });

function GenerateNavBar(){
    let nav_container = document.getElementById("nav-bar-conatiner");
    nav_container.innerHTML = 
    '<div class="mobile-menu-btn" id="mobile-menu-btn">\
        <div class="menu-btn">&equiv;</div>\
        <p>選單</p>\
    </div>\
    <div class="nav-bar" id="nav-bar">\
        <div class="noise" style="width: 100%; height: 100%;"></div>\
        <div class="nav-bar-row row-4">\
            <div class="mobile-menu-arrow" id="mobile-menu-arrow">&larr;</div>\
            <a class="nav-bar-btn-home" href="./index.html"></a>\
        </div>\
        <div class="nav-bar-row row-8">\
            <div class="nav-bar-btn"><a href="./gameIntroduction.html"><p>遊戲介紹</p></a></div>\
            <div class="nav-bar-btn"><a><p>我的永續山丘</p></a></div>\
            <div class="nav-bar-btn"><a><p>永續樹任務</p></a></div>\
            <div class="nav-bar-btn"><a href="./ambassador.html"><p>永續森林大使</p></a></div>\
            <div class="nav-bar-btn"><a href="./lottery.html"><p>永續養樹抽好禮</p></a></div>\
            <div class="nav-bar-btn"><a href="https://www.fubon.com/r4g/#r4g"><p>Run For Green</p></a></div>\
        </div>\
    </div>';
    AddNavObjectListener();
}

function AddNavObjectListener(){
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
}

function InsertNoneObject(){
    if(window.innerWidth > window.innerHeight && window.innerWidth >= 1180){
        let noneObj = document.createElement("div");
        noneObj.setAttribute("class", "nav-bar-btn");
        document.getElementById("nav-bar").appendChild(noneObj);
    }
}