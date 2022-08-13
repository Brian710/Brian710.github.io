let winner_list_container = document.querySelector("div.winners-list");
let list_time_block;

window.addEventListener("load", ()=>{
    // WinnersListLoad();
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

function WinnersListLoad(){
    let block_length = 3;
    for(let i = 0; i < block_length; i++){
        list_time_block = document.createElement("div");
        list_time_block.setAttribute("class", "list-time-block");
        GetWinnersListTime();
        GetWinnersList();
        winner_list_container.appendChild(list_time_block);
    }
}

function GetWinnersListTime(){
    let list_title = document.createElement("div");
    list_title.setAttribute("class", "list-time");
    let innerHTMLTxt = "";
    innerHTMLTxt += "遊戲期間：";
    innerHTMLTxt += "{{ Time }}";
    innerHTMLTxt += " 得獎名單";
    list_title.innerHTML = innerHTMLTxt;

    list_time_block.appendChild(list_title);
}

function GetWinnersList(){
    let list_container = document.createElement("div");
    list_container.setAttribute("class", "list-container");

    let list_length = 16;

    let list_row_container_1 = document.createElement("div");
    list_row_container_1.setAttribute("class", "list-row");
    let list_row_container_2 = document.createElement("div");
    list_row_container_2.setAttribute("class", "list-row");

    for(let i = 0; i < list_length; i++){
        if(window.innerWidth <= 1024){
            GenerateListInfo(list_container, list_row_container_1);
        }
        else{
            if(i < 8){
                GenerateListInfo(list_container, list_row_container_1);
            }
            else{
                list_row_container_1.style.borderRight = "1px #004F74 solid";
                GenerateListInfo(list_container, list_row_container_2);
            }
        }
    }

    list_time_block.appendChild(list_container);
}

function GenerateListInfo(container, row){
    let list_row = document.createElement("div");
    list_row.setAttribute("class", "list-info");

    let info_id = document.createElement("p");
    info_id.innerHTML = "{{ % 得獎人id % }}";

    let info_name = document.createElement("p");
    info_name.innerHTML = "{{ % 得獎人 % }}";

    let info_award = document.createElement("p");
    info_award.innerHTML = "{{ % 獎品項目 % }}";

    list_row.appendChild(info_id);
    list_row.appendChild(info_name);
    list_row.appendChild(info_award);

    row.appendChild(list_row);
    container.appendChild(row);
}