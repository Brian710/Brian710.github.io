let time_rangeline = Object.values(document.getElementsByClassName("time-rangeline"));
let timeline_gifticon = Object.values(document.getElementsByClassName("drawday-icon"));
let timeline_text_month = Object.values(document.getElementsByClassName("timeline-text-month"));
let time = document.querySelector("div.card-title > span");
let awards_list_container = document.querySelector("div.card-content");
let drawday = document.querySelector("div.card-drawtime > span");
let winner_list_container = document.querySelector("div.winners-list");
let list_time_block;

window.addEventListener("load", ()=>{
    TimeLineInit();
    TimeLineLoad();
    WinnersListLoad();
});

function TimeLineInit(){
    time_rangeline.forEach((element)=>{
        element.style.display = "none";
    });
    timeline_gifticon.forEach((element)=>{
        element.style.display = "none";
    });
    timeline_text_month.forEach((element)=>{
        element.style.opacity = 0.3;
    });
}

function TimeLineLoad(){
    let timeline_selected = document.getElementById("awards-timeline").getAttribute("data-month");
    awards_list_container.innerHTML = "";
    for(let i = 0; i < time_rangeline.length; i++){
        if(time_rangeline[i].parentElement.getAttribute("class").match(timeline_selected)){
            time_rangeline[i].style.display = "";
            timeline_gifticon[i + 1].style.display = "";
            timeline_text_month[i].style.opacity = 1;
            timeline_text_month[i + 1].style.opacity = 1;
            time.innerHTML = awards_drawday_items[timeline_selected]["time"];
            for(let i = 0; i < awards_drawday_items[timeline_selected]["awards"].length; i++){
                let content = document.createElement("p");
                content.innerHTML = awards_drawday_items[timeline_selected]["awards"][i];
                awards_list_container.appendChild(content);
            }
            drawday.innerHTML = awards_drawday_items[timeline_selected]["drawday"];
        }
        if(!time_rangeline[i].parentElement.getAttribute("class").match("jan")){
            time_rangeline[i].parentElement.addEventListener('click', ()=>{
                document.getElementById("awards-timeline").setAttribute("data-month", time_rangeline[i].parentElement.getAttribute("class").substring(9,12));
                OnTimelineSelect(i);
            });
        }
    }
}

function OnTimelineSelect(index){
    TimeLineInit();
    let timeline_selected = document.getElementById("awards-timeline").getAttribute("data-month");
    awards_list_container.innerHTML = "";
    time.innerHTML = awards_drawday_items[timeline_selected]["time"];
    for(let i = 0; i < awards_drawday_items[timeline_selected]["awards"].length; i++){
        let content = document.createElement("p");
        content.innerHTML = awards_drawday_items[timeline_selected]["awards"][i];
        awards_list_container.appendChild(content);
    }
    drawday.innerHTML = awards_drawday_items[timeline_selected]["drawday"];
    time_rangeline[index].style.display = "";
    timeline_gifticon[index + 1].style.display = "";
    timeline_text_month[index].style.opacity = 1;
    timeline_text_month[index + 1].style.opacity = 1;
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