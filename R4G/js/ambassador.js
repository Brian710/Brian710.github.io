let checkmycertificate_1 = document.getElementById("playername");
let checkmycertificate_2 = document.getElementById("certificate");
let close_certificate = document.getElementById("close-block");

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
close_certificate.addEventListener('click', ()=>{
    document.getElementById("mycertificate").style.display = "none";
    document.getElementById("nav-bar-conatiner").style.zIndex = "10000";
});