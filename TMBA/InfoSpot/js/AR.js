var _url = "";

window.onload = function(){
    Init();
}
function Init(){
    let JSON_Key = parent.document.getElementById("Content").getAttribute("data-ar");
    var url = "../PageInformation.json"
    var request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status == 200) {
            var json = JSON.parse(request.responseText);
            Photo(json, JSON_Key);
            Title(json, JSON_Key);
            _url = json["hotspot_94"][JSON_Key]["text"];
            InsertComponent(json, JSON_Key);
        }
    }
}

function Photo(json, JSON_Key){
    let Photo = document.getElementById("ContentImage");
    let Logo = document.getElementById("LogoImage");
    Photo.setAttribute('src','./images/'+ json["hotspot_94"][JSON_Key]["image"]);
    Logo.setAttribute('src','./images/'+ json["hotspot_94"][JSON_Key]["logo"]);
}

function Title(json, JSON_Key){
    let Title = document.getElementById("ContentTitle");
    Title.innerHTML= json["hotspot_94"][JSON_Key]["title"];
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

function InsertComponent(json, JSON_Key){
    document.getElementById('ARBtn').innerHTML = 
    '<div id="android_btn" style="text-align: center;">\
        <a id="AndroidAR" href='+ json["hotspot_94"][JSON_Key]["android_ar"] +'>\
            <button type="button" class="col-6 btn btn-primary" style="width:57%;">點擊AR</button>\
        </a>\
    </div>\
    <div id="ios_btn" style="text-align: center;">\
        <a rel="ar" id="ar-link" href='+ json["hotspot_94"][JSON_Key]["ios_ar"] +' ><img class="" src="" alt="" style="display:none">\
            <button type="button" class="col-6 btn btn-primary"style="width:57%;">點擊AR</button>\
        </a>\
    </div>\
    <div class="row justify-content-center" id="desk_btn">\
    <p class="ARText col-12">▼掃描點擊AR體驗▼</p>\
        <img class="col-12" src="./images/'+ json["hotspot_94"][JSON_Key]["qrcode"] +'">\
    </div>\
    <div class="row justify-content-center" id="inAPP_btn">\
        <div>\
            <p>請使用預設瀏覽器<img src="./images/safari-icon.png">&nbsp;<img src="./images/Chrome-icon.png">開啟體驗</p>\
        </div>\
    </div>';
    CheckDevice();
}