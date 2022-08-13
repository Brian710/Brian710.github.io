let winner_list_container = document.querySelector("div.winners-list");
let list_time_block;

window.addEventListener("load", ()=>{
    
});

document.getElementById("btnEarly").addEventListener('click', ()=>{
    JumpTo("Early");
});
document.getElementById("btnMission").addEventListener('click', ()=>{
    JumpTo("Mission");
});

document.getElementById("btnAmbassador").addEventListener('click', ()=>{
    JumpTo("Ambassador");
});

function JumpTo(id){
    var url = location.href;
    location.href = "#" + id;
    history.replaceState(null,null,url);
}