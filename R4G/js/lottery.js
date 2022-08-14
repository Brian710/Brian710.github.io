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