var onEnableiframe = "";
var onEnableroll = "";
var pano = "";
var roll = ["roll_a_1","roll_a_2","roll_a_3","roll_a_4","roll_a_5",
            "roll_a_6","roll_a_7","roll_a_8","roll_a_9","roll_a_10",
            "roll_a_11","roll_a_12","roll_a_13","roll_a_14","roll_a_15","roll_a_16"];

window.onload = function(){
    embedpano({swf:"tour.swf", xml:"tour.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
    pano = parent.window.document.getElementById("krpanoSWFObject");
    AppendLogoImage();
    SetTimerChangeContent("hotspot_94");
}

function AppendLogoImage(){
    let _img = document.createElement('IMG');
    _img.setAttribute("class", "Logo");
    _img.setAttribute("id", "TMBALogo");
    _img.addEventListener('click', ()=>{
        window.open("https://www.tmba.org.tw/");
    });
    let _guide = document.createElement('IMG');
    _guide.setAttribute("class","UserGuide");
    _guide.setAttribute("id","UserGuide");
    _guide.addEventListener('click', ()=>{
        let _guideImage = document.createElement('DIV');
        _guideImage.setAttribute("class","GuideContainer");
        _guideImage.setAttribute("id","GuideContainer");
        let _Image = document.createElement("IMG");
        _Image.setAttribute("class","GuideImage");
        if(window.innerWidth <= 1024){
            _Image.style.content = "url('./images/Guide_phone.png')";
        }
        else{
            _Image.style.content = "url('./images/Guide.jpg')";
        }
        
        let _Close = document.createElement('IMG');
        _Close.setAttribute("class","GuideClose");
        _Close.style.content = "url('./images/close.png')";
        _Close.addEventListener('click', ()=>{
            document.getElementById("GuideContainer").remove();
        });
        let _BG = document.createElement('DIV');
        _BG.setAttribute("class","GUideBG");
        _guideImage.appendChild(_Image);
        _guideImage.appendChild(_Close);
        _guideImage.appendChild(_BG);
        pano.appendChild(_guideImage);
    });
    pano.appendChild(_guide);
    pano.appendChild(_img);
}

function SetSpotInit(name){
    if(name != document.getElementById("Content").getAttribute("data")){
        pano.call("do_animation(" + name + ", 3000)");
    }
    else{
        pano.call("do_animation(" + name + ", 100)");
    }
}

function SetEnableFrame(name){
    if(name != onEnableiframe){
        SetDisableFrame();
    }
    onEnableiframe = name;
    document.getElementById("Content").setAttribute("data", onEnableiframe);
    pano.call("set(hotspot[" + name + "].url, '%FIRSTXML%/add_hotspot/picture/clickNow.png')");
}

function SetEnableFrame_Other(name){
    if(name != onEnableiframe){
        SetDisableFrame();
    }
    onEnableiframe = name;
    document.getElementById("Content").setAttribute("data", name);
    pano.call("set(hotspot[" + name + "].url, '%FIRSTXML%/add_hotspot/picture/Btn_m_click.png')");
}

function SetDisableFrame(){
    document.getElementById("Content").setAttribute("data", "");
    if(onEnableiframe.includes("other")){
        pano.call("set(hotspot[" + onEnableiframe + "].url, '%FIRSTXML%/add_hotspot/picture/Btn_m_o.png')");
    }
    else{
        pano.call("set(hotspot[" + onEnableiframe + "].url, '%FIRSTXML%/add_hotspot/picture/Plus_Btn.png')");
    }
    onEnableiframe = "";
}

function SetRollingPaperImage(name){
    if(name != onEnableroll && onEnableroll != ""){
        pano.call("open_or_close_door("+ onEnableroll +"); open_or_close_door(door_hitarea_a_1);");
    }
    if(name != onEnableroll){
        if(onEnableroll != ""){
            console.log(name);
            setTimeout(() => {
                ChangeRollPaper(name);
                pano.call("open_or_close_door(door_hitarea_a_1);");
                onEnableroll = name;
            }, 1000);
        }
        else{
            ChangeRollPaper(name);
            pano.call("open_or_close_door(door_hitarea_a_1);");
            onEnableroll = name;
        }
    }
    else{
        ChangeRollPaper(name);
        pano.call("open_or_close_door(door_hitarea_a_1);");
        onEnableroll = "";
    }
}

function SetEnableFrame_Wall(name){
    document.getElementById("Content").setAttribute("data", name);
}

function SetTimerChangeContent(name){
    if(document.getElementById("Content").getAttribute("data-ar") != "" && document.getElementById("Content").getAttribute("data-ar") != null){
        if(document.getElementById("Content").getAttribute("data-ar") == "UB660"){
            document.getElementById("Content").setAttribute("data-ar", "VTL1600A")
            pano.call("set(hotspot["+ name +"].url, %FIRSTXML%/add_hotspot/picture/VTL1600A.png)");
        }
        else{
            document.getElementById("Content").setAttribute("data-ar", "UB660")
            pano.call("set(hotspot["+ name +"].url, %FIRSTXML%/add_hotspot/picture/UB-660.png)");
        }
    }
    else{
        document.getElementById("Content").setAttribute("data-ar", "UB660");
    }

    setTimeout(function(){
        SetTimerChangeContent(name);
    }, 5000);
}

function ChangeRollPaper(name){
    if(name != onEnableroll){
        for(let i=0; i < roll.length; i++){
            if(name == "door_hitarea11"){
                if(i < 10){
                    pano.call("set(hotspot["+ roll[i] +"].url, 'images/rollingpaper/Q1/Q1_0"+ i +".png')");
                }
                else{
                    pano.call("set(hotspot["+ roll[i] +"].url, 'images/rollingpaper/Q1/Q1_"+ i +".png')");
                }
            }
            else if(name == "door_hitarea12"){
                if(i < 10){
                    pano.call("set(hotspot["+ roll[i] +"].url, 'images/rollingpaper/Q2/Q2_0"+ i +".png')");
                }
                else{
                    pano.call("set(hotspot["+ roll[i] +"].url, 'images/rollingpaper/Q2/Q2_"+ i +".png')");
                }
            }
            else if(name == "door_hitarea13"){
                if(i < 10){
                    pano.call("set(hotspot["+ roll[i] +"].url, 'images/rollingpaper/Q3/Q3_0"+ i +".png')");
                }
                else{
                    pano.call("set(hotspot["+ roll[i] +"].url, 'images/rollingpaper/Q3/Q3_"+ i +".png')");
                }
            }
            else if(name == "door_hitarea14"){
                if(i < 10){
                    pano.call("set(hotspot["+ roll[i] +"].url, 'images/rollingpaper/Q4/Q4_0"+ i +".png')");
                }
                else{
                    pano.call("set(hotspot["+ roll[i] +"].url, 'images/rollingpaper/Q4/Q4_"+ i +".png')");
                }
            }
            else if(name == "door_hitarea15"){
                if(i < 10){
                    pano.call("set(hotspot["+ roll[i] +"].url, 'images/rollingpaper/Q5/Q5_0"+ i +".png')");
                }
                else{
                    pano.call("set(hotspot["+ roll[i] +"].url, 'images/rollingpaper/Q5/Q5_"+ i +".png')");
                }
            }
        }
    }
}

function ChangeSceneCloseFrame(){
    pano.call("set(visible,false);tween(layer[IFRAME_HTML].oy, -350);tween(layer[IFRAME_HTML].alpha, 0);tween(layer[freim_bg_Adhs].alpha, 0);set(layer[fon_zad_plan_adhs].enabled, false);tween(layer[fon_zad_plan_adhs].alpha, 0);delayedcall(0.3,removelayer(IFRAME_HTML);removelayer(freim_bg_Adhs);")
    SetDisableFrame();
    onEnableroll = "";
}

function DisplayLogo(status){
    if(status == "true"){
        document.getElementById("TMBALogo").style.display = "";
        document.getElementById("UserGuide").style.display = "";
    }
    else if(status == "false"){
        document.getElementById("TMBALogo").style.display = "none";
        document.getElementById("UserGuide").style.display = "none";
    }
}

function InitRollScene(){
    pano.call("open_or_close_door(door_hitarea15);");
    SetRollingPaperImage("door_hitarea15");
}