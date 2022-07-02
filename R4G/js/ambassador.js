let checkmycertificate_1 = document.getElementById("playername");
let checkmycertificate_2 = document.getElementById("certificate");

window.addEventListener('load', ()=>{
    document.getElementById("mycertificate").style.display = "none";
});

checkmycertificate_1.addEventListener('click', ()=>{
    document.getElementById("mycertificate").style.display = "";
});
checkmycertificate_2.addEventListener('click', ()=>{
    document.getElementById("mycertificate").style.display = "";
});