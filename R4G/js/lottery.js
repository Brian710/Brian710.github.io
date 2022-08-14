let winner_list_container = document.querySelector("div.winners-list");
let list_time_block;

window.addEventListener("load", ()=>{
    if(window.innerWidth >= 1024){
        let br = document.getElementsByTagName("br");
        let brlist = Array.prototype.slice.call(br);
        for(let i = 0; i < brlist.length; i++){
            brlist[i].style.display = "none";
        }
    }
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