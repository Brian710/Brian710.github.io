var _url = "";

window.onload = function(){
    Init();
}
function Init(){
    let JSON_Key = parent.document.getElementById("Content").getAttribute("data");
    var url = "../PageInformation.json"
    var request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var json = JSON.parse(request.responseText);
            Photo(json, JSON_Key);
            Title(json, JSON_Key);
            _url = json[JSON_Key.toString()]["text"];
        }
    }
}

function Photo(json, JSON_Key){
    let Photo = document.getElementById("ContentImage");
    if(json[JSON_Key.toString()]["image"] != ""){
        Photo.setAttribute('src','./images/'+ json[JSON_Key.toString()]["image"]);
    }
    else{
        Photo.style.display = "none";
    }
}

function Title(json, JSON_Key){
    let Title = document.getElementById("ContentTitle");
    Title.innerHTML= json[JSON_Key.toString()]["title"];
}

document.getElementById("WebBtn").addEventListener("click", function(){
    window.open(_url);
});

function CheckDevice(){
    var u = navigator.userAgent,
    ua = navigator.userAgent.toLowerCase(),
    isLineApp = u.indexOf("Line") > -1,
    isInstagramApp = u.indexOf("Instagram") > -1,
    isFbApp = u.indexOf("FBAV") > -1,
    isWeixinApp = ua.match(/MicroMessenger/i) == "micromessenger",
    isQQApp = ua.match(/QQ/i) == "qq",
    isweiboApp = ua.match(/WeiBo/i) == "weibo";
    document.getElementById("ios_btn").style.display = "none";
    document.getElementById("android_btn").style.display = "none";
    document.getElementById("desk_btn").style.display = "none";
    document.getElementById("inAPP_btn").style.display = "none";

    if (isLineApp || isInstagramApp || isFbApp || isWeixinApp || isQQApp || isweiboApp) {
        document.getElementById("inAPP_btn").style.display = "";
    }
    else if (/(iPhone|iPad|iPod|iOS&&!safari)/i.test(ua)) {
        document.getElementById("ios_btn").style.display = "";
    }
    else if (/(Android)/i.test(ua)) {
        document.getElementById("android_btn").style.display = "";
    }
    else{
        document.getElementById("desk_btn").style.display = "";
    };
}

function InsertComponent(){
    document.getElementById('arButton').innerHTML = 
    '<div id="android_btn">\
        <a id="AndroidAR"><button class="btn-2 ARBtn"><img src="./images/AR-icon.svg">AR</button></a>\
    </div>\
    <div id="ios_btn">\
        <a rel="ar" id="ar-link"><img class="" src="" alt="" style="display:none"><button class="btn-2 ARBtn"><img src="./images/AR-icon.svg">AR</button></a>\
    </div>\
    <div id="desk_btn">\
        <a href="#open-moda"><button class="btn-2 ARBtn"><img src="./images/AR-icon.svg">AR</button></a>\
        <div id="open-moda" class="modal-window">\
            <div><img class="QrcodeImage" id="QrcodeImage"><br><p class="pop_desk_device" id="pop_desk_device"></p><a href="#modal-close" title="Close" class="modal-close"></a></div>\
        </div>\
    </div>\
    <div id="inAPP_btn">\
        <a href="#open-modainAPP"><button class="btn-2 ARBtn"><img src="./images/AR-icon.svg">AR</button></a>\
        <div id="open-modainAPP" class="modal-window inAPP"><div id="pop_inapp_device"></div></div>\
    </div>';
}