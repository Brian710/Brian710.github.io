let checkmycertificate_1 = document.getElementById("playername");
let checkmycertificate_2 = document.getElementById("certificate");

window.addEventListener('load', ()=>{
    document.getElementById("mycertificate").style.display = "none";
    document.getElementById("nav-bar-conatiner").style.zIndex = "10000";
});

checkmycertificate_1.addEventListener('click', ()=>{
    document.getElementById("mycertificate").style.display = "";
    document.getElementById("nav-bar-conatiner").style.zIndex = "9999";
});
checkmycertificate_2.addEventListener('click', ()=>{
    document.getElementById("mycertificate").style.display = "";
    document.getElementById("nav-bar-conatiner").style.zIndex = "9999";
});