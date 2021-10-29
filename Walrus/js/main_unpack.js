const MenuButton = [
    "大廳",
    "營造工程類",
    "製造業",
    "科技業",
    "批發零售業",
    "農、漁業", 
    "服務/住宿餐飲業",
    "客製化"
];
const MenuButton_EN = [
    "Hall",
    "Construction Industry",
    "Manufacturing Industry",
    "Technology Industry",
    "Wholesale & Retail Industry",
    "Agriculture/Fishing Industry", 
    "Service/Accommodation<br> & Food Service Activities",
    "WALRUS fit"
];
const MenuButton_JP = [
    "ホール",
    "建設工学",
    "製造",
    "テクノロジー産業",
    "卸売と小売り",
    "農業、漁業", 
    "服務/宿泊、飲食サービス業",
    "カスタマイズ"
];

let _home_text, _construction_text, _manufacturing_text, _tech_text, _retail_text, _fishing_text, _food_text, _fit_text;
let pano;
var loaded = false;

let timer = new Timer(function() {
    $("#WaveAnim").removeClass("Wave").hide();
    $("#CanvasDiv").remove();
    timer.stop();
}, 2200);

function Init(){  
    let height = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${height}px`);
    embedpano({swf:"tour.swf", xml:"tour.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
    pano = parent.window.document.getElementById("WALRUS");
    if(!loaded){
        let _CanvasLogoDiv = document.createElement("DIV");
        $(_CanvasLogoDiv).addClass("pos-a t-0 w-100 h-100 ClickEmpty").attr("id","CanvasDiv");
        let _CanvasLogo = document.createElement("IMG");
        $(_CanvasLogo).addClass("pos-r WelcomeLogo").attr("src","./images/transitions/WALRUS_Logo.png").appendTo($(_CanvasLogoDiv));
        $(_CanvasLogoDiv).click(function(){
            $("#AudioPlayer")[0].play();
            $(_CanvasLogoDiv).remove();
        }).appendTo($("#pano"));
        
        $("#pano").attr("data-lang","TC").attr("data-sound","on");
        G_Audio();
        loaded = true;
        timer.stop();
    }
    Menu();
}

$(window).resize(function() {
    if(CheckDevice() && Math.abs(window.orientation) == 90){
        $("html").css({
            "transform": "rotate(-90deg)",
            "transform-origin": "left top",
            "width": "100vh",
            "height": "100vw",
            "overflow-x": "hidden",
            "position": "absolute",
            "top": "100%",
            "left": "0",
        });
    }
    else{
        $("html").css({
            "transform": "",
            "transform-origin": "",
            "width": "",
            "height": "",
            "overflow-x": "",
            "position": "",
            "top": "",
            "left": "",
        });
    }
});
Init();

var _polymorph = anime({
    targets: '.morph',
    d: [
        { value: 'M32.4999 1.49994C45.4999 3.99987 51.9999 7.50007 59.9999 18C67.1557 27.3919 64.9999 44.9999 59.9999 54.9999C54.9999 64.9999 35 92.4999 21.4999 76.0001C6.4046 57.5505 -1.96726 59.6392 1.99988 38C7.49982 7.9999 15.7768 -1.71594 32.4999 1.49994Z' },
        { value: 'M34.0227 3.45643C38.4986 5.84602 43.5128 6.54299 48.0879 8.705C58.7677 13.7402 65.085 26.1718 65.0142 37.1525C64.9118 53.0207 53.5878 70.0063 40.085 78.0885C15.1349 91.7739 1.64373 67.5033 0.143971 42.5C-1.39585 16.8289 9.70492 -9.61455 34.0227 3.45643Z' },
    ],
    easing: 'easeOutQuad',
    duration: 5000,
    loop: true,
});

function G_Audio(){
    let _audio = document.createElement("audio");
    let _source = document.createElement("source");
    $(_source).attr("src","./data/audio/WALRUS_Music.m4a");
    $(_source).attr("type","audio/mp4");
    $(_audio).attr("id","AudioPlayer").append($(_source));
    $(_audio)[0].loop = true;

    $("#pano").append($(_audio));
}

function Menu(){
    let _menucontainer = document.createElement("DIV");
    $(_menucontainer).addClass("pos-a t-0 MenuContainer").attr("id","MenuContainer").appendTo( "#pano" );

    let _menubtn = document.createElement("DIV");
    $(_menubtn).addClass("pos-r cur-p MenuBtn").html('<svg width="50" height="63" viewBox="0 0 65 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="morph" d="M34.0227 3.45643C38.4986 5.84602 43.5128 6.54299 48.0879 8.705C58.7677 13.7402 65.085 26.1718 65.0142 37.1525C64.9118 53.0207 53.5878 70.0063 40.085 78.0885C15.1349 91.7739 1.64373 67.5033 0.143971 42.5C-1.39585 16.8289 9.70492 -9.61455 34.0227 3.45643Z" fill="#00428E"/></svg>')
    .click(function(){
        if($("#MenuBGC").length){
            setTimeout(function(){
                $("#MenuBGC").remove();
                $("#MenuContent").remove();
            }, 300);
            $("#MenuBGC").removeClass("Rollin-left").addClass("Rollout-left");
            $(".SceneBtnAni").removeClass("SceneBtnAni").addClass("SceneBtnAni-Out");
            $("#MenuLogo").hide();
        }
        else{
            G_Menu(_menucontainer);
        }
    });
    let _menubtnimage = document.createElement("IMG");
    $(_menubtnimage).addClass("pos-a display-auto mg-auto").attr("src","./images/menu/Icon_Menu_List.png").appendTo($(_menubtn));    

    $(_menucontainer).append($(_menubtn));
}

function G_Menu(container){

    let _menubgcdiv = document.createElement("DIV");
    $(_menubgcdiv).addClass("pos-r MenuBgcDiv").attr("id","MenuBGC");
    let _menubgc = document.createElement("DIV");
    $(_menubgc).addClass("pos-a MenuBgc Rollin-left");

    let _menucontentcontainer = document.createElement("DIV");
    $(_menucontentcontainer).addClass("pos-a MenuContent").attr("id","MenuContent");

    let _menubtnlist = document.createElement("DIV");
    $(_menubtnlist).addClass("pos-r d-flex flex-row justify-content-between MenuBtnList SceneBtnAni").appendTo($(_menucontentcontainer));
    G_MenuBtnList(_menubtnlist);

    let _menuscenesbtnlist = document.createElement("DIV");
    $(_menuscenesbtnlist).addClass("pos-r d-flex flex-column MenuSceneBtn")
    .css({"margin-left":"3rem"}).appendTo($(_menucontentcontainer));
    G_MenuScenesBtnList(_menuscenesbtnlist);

    let _menulogo = document.createElement("IMG");
    $(_menulogo).addClass("MenuLogo SceneBtnAni").attr("id","MenuLogo").attr("src","./images/menu/Icon_IP.png");

    $(_menubgcdiv).append($(_menubgc),$(_menulogo));
    $(container).append($(_menubgcdiv),$(_menucontentcontainer));
}

function G_MenuBtnList(contatiner){

    let _langbtn_tc_div = document.createElement("DIV");
    let _langbtn_tc_text = document.createElement("P");
    $(_langbtn_tc_text).html("繁");

    let _langbtn_en_div = document.createElement("DIV");
    let _langbtn_en_text = document.createElement("P");
    $(_langbtn_en_text).html("En");

    let _langbtn_jp_div = document.createElement("DIV");
    let _langbtn_jp_text = document.createElement("P");
    $(_langbtn_jp_text).html("日");

    let _soundbtn_div = document.createElement("DIV");
    let _soundbtn_icon = document.createElement("IMG");
    $(_soundbtn_icon).addClass("SoundBtn").attr("src","./images/menu/Btn_Video_On.png");
    $(_soundbtn_div).addClass("pos-r MenuBtnListDIV")
    .click(function(){
        if($("#pano").attr("data-sound")=="off"){
            $("#pano").attr("data-sound","on");
            $(_soundbtn_icon).attr("src","./images/menu/Btn_Video_On.png");
            $("#AudioPlayer")[0].play();
        }
        else{
            $("#pano").attr("data-sound","off");
            $(_soundbtn_icon).attr("src","./images/menu/Btn_Video_Of.png");
            $("#AudioPlayer")[0].pause();
        }
    }).append($(_soundbtn_icon));

    $(_langbtn_tc_div).addClass("pos-r MenuBtnListDIV")
    .click(function(){
        $("#pano").attr("data-lang","TC");
        $(_langbtn_tc_text).css("color","#FFD900");
        $(_langbtn_en_text).css("color","#FFFFFF");
        $(_langbtn_jp_text).css("color","#FFFFFF");
        ChangeMenuTextLang();
    })
    .mouseover(function(){
        $(_langbtn_tc_text).css("color","#FFD900");
    })
    .mouseout(function(){
        if($("#pano").attr("data-lang")!="TC")
            $(_langbtn_tc_text).css("color","#FFFFFF");
    }).append($(_langbtn_tc_text));
    if($("#pano").attr("data-lang")=="TC"){
        $(_langbtn_tc_text).css("color","#FFD900");
    }

    $(_langbtn_en_div).addClass("pos-r MenuBtnListDIV")
    .click(function(){
        $("#pano").attr("data-lang","EN");
        $(_langbtn_tc_text).css("color","#FFFFFF");
        $(_langbtn_en_text).css("color","#FFD900");
        $(_langbtn_jp_text).css("color","#FFFFFF");
        ChangeMenuTextLang();
    })
    .mouseover(function(){
        $(_langbtn_en_text).css("color","#FFD900");
    })
    .mouseout(function(){
        if($("#pano").attr("data-lang")!="EN")
            $(_langbtn_en_text).css("color","#FFFFFF");
    }).append($(_langbtn_en_text));
    if($("#pano").attr("data-lang")=="EN"){
        $(_langbtn_en_text).css("color","#FFD900");
    }

    $(_langbtn_jp_div).addClass("pos-r MenuBtnListDIV")
    .click(function(){
        $("#pano").attr("data-lang","JP");
        $(_langbtn_tc_text).css("color","#FFFFFF");
        $(_langbtn_en_text).css("color","#FFFFFF");
        $(_langbtn_jp_text).css("color","#FFD900");
        ChangeMenuTextLang();
    })
    .mouseover(function(){
        $(_langbtn_jp_text).css("color","#FFD900");
    })
    .mouseout(function(){
        if($("#pano").attr("data-lang")!="JP")
            $(_langbtn_jp_text).css("color","#FFFFFF");
    }).append($(_langbtn_jp_text));

    if($("#pano").attr("data-lang")=="JP"){
        $(_langbtn_jp_text).css("color","#FFD900");
    }

    $(contatiner).append($(_langbtn_tc_div),$(_langbtn_en_div),$(_langbtn_jp_div),$(_soundbtn_div));
}

function G_MenuScenesBtnList(container){

    let _home = document.createElement("DIV");
    $(_home).addClass("cur-p d-flex flex-row justify-content-start align-content-center MenuScenesBtnDiv SceneBtnAni");
    let _home_img = document.createElement("IMG");
    $(_home_img).attr("src","./images/menu/Home.png");
    _home_text = document.createElement("P");
    $(_home_text).html(MenuButton[0]);
    let _home_line = document.createElement("DIV");
    $(_home_line).addClass("pos-a MenuBtnLine");
    $(_home)
    .click(function(){
        G_WaveCanvas();
        pano.call("loadscene(scene_0000,null,MERGE,BLEND(0.5));");
    }).mouseover(function(){
        $(_home_img).hide();
        $(_home_text).removeClass("text-roll-right-out").addClass("text-roll-left-in").css({"color":"#00428E"});
        $(_home_line).removeClass("line-roll-right-out").addClass("line-roll-right-in");
    }).mouseout(function(){
        $(_home_img).show();
        $(_home_text).removeClass("text-roll-left-in").addClass("text-roll-right-out").css({"color":"#545454"});
        $(_home_line).removeClass("line-roll-right-in").addClass("line-roll-right-out");
    }).append($(_home_img),$(_home_text),$(_home_line));

    let _construction = document.createElement("DIV");
    $(_construction).addClass("cur-p d-flex flex-row justify-content-start align-content-center MenuScenesBtnDiv SceneBtnAni");
    let _construction_img = document.createElement("IMG");
    $(_construction_img).attr("src","./images/icon/Use_1.png");
    _construction_text = document.createElement("P");
    $(_construction_text).html(MenuButton[1]);
    let _construction_line = document.createElement("DIV");
    $(_construction_line).addClass("pos-a MenuBtnLine");
    $(_construction).click(function(){
        G_WaveCanvas();
        pano.call("loadscene(scene_0007,null,MERGE,BLEND(0.5));");
    }).mouseover(function(){
        $(_construction_img).hide();
        $(_construction_text).removeClass("text-roll-right-out").addClass("text-roll-left-in").css({"color":"#00428E"});
        $(_construction_line).removeClass("line-roll-right-out").addClass("line-roll-right-in");
    }).mouseout(function(){
        $(_construction_img).show();
        $(_construction_text).removeClass("text-roll-left-in").addClass("text-roll-right-out").css({"color":"#545454"});
        $(_construction_line).removeClass("line-roll-right-in").addClass("line-roll-right-out");
    }).append($(_construction_img),$(_construction_text),$(_construction_line));

    let _manufacturing = document.createElement("DIV");
    $(_manufacturing).addClass("cur-p d-flex flex-row justify-content-start align-content-center MenuScenesBtnDiv SceneBtnAni");
    let _manufacturing_img = document.createElement("IMG");
    $(_manufacturing_img).attr("src","./images/icon/Use_3.png");
    _manufacturing_text = document.createElement("P");
    $(_manufacturing_text).html(MenuButton[2]);
    let _manufacturing_line = document.createElement("DIV");
    $(_manufacturing_line).addClass("pos-a MenuBtnLine");
    $(_manufacturing).click(function(){
        G_WaveCanvas();
        pano.call("loadscene(scene_0009,null,MERGE,BLEND(0.5));");
    }).mouseover(function(){
        $(_manufacturing_img).hide();
        $(_manufacturing_text).removeClass("text-roll-right-out").addClass("text-roll-left-in").css({"color":"#00428E"});
        $(_manufacturing_line).removeClass("line-roll-right-out").addClass("line-roll-right-in");
    }).mouseout(function(){
        $(_manufacturing_img).show();
        $(_manufacturing_text).removeClass("text-roll-left-in").addClass("text-roll-right-out").css({"color":"#545454"});
        $(_manufacturing_line).removeClass("line-roll-right-in").addClass("line-roll-right-out");
    }).append($(_manufacturing_img),$(_manufacturing_text),$(_manufacturing_line));

    let _tech = document.createElement("DIV");
    $(_tech).addClass("cur-p d-flex flex-row justify-content-start align-content-center MenuScenesBtnDiv SceneBtnAni");
    let _tech_img = document.createElement("IMG");
    $(_tech_img).attr("src","./images/icon/Use_5.png");
    _tech_text = document.createElement("P");
    $(_tech_text).html(MenuButton[3]);
    let _tech_line = document.createElement("DIV");
    $(_tech_line).addClass("pos-a MenuBtnLine");
    $(_tech).click(function(){
        G_WaveCanvas();
        pano.call("loadscene(scene_0011,null,MERGE,BLEND(0.5));");
    }).mouseover(function(){
        $(_tech_img).hide();
        $(_tech_text).removeClass("text-roll-right-out").addClass("text-roll-left-in").css({"color":"#00428E"});
        $(_tech_line).removeClass("line-roll-right-out").addClass("line-roll-right-in");
    }).mouseout(function(){
        $(_tech_img).show();
        $(_tech_text).removeClass("text-roll-left-in").addClass("text-roll-right-out").css({"color":"#545454"});
        $(_tech_line).removeClass("line-roll-right-in").addClass("line-roll-right-out");
    }).append($(_tech_img),$(_tech_text),$(_tech_line));

    let _retail = document.createElement("DIV");
    $(_retail).addClass("cur-p d-flex flex-row justify-content-start align-content-center MenuScenesBtnDiv SceneBtnAni");
    let _retail_img = document.createElement("IMG");
    $(_retail_img).attr("src","./images/icon/Use_4.png");
    _retail_text = document.createElement("P");
    $(_retail_text).html(MenuButton[4]);
    let _retail_line = document.createElement("DIV");
    $(_retail_line).addClass("pos-a MenuBtnLine");
    $(_retail).click(function(){
        G_WaveCanvas();
        pano.call("loadscene(scene_0013,null,MERGE,BLEND(0.5));");
    }).mouseover(function(){
        $(_retail_img).hide();
        $(_retail_text).removeClass("text-roll-right-out").addClass("text-roll-left-in").css({"color":"#00428E"});
        $(_retail_line).removeClass("line-roll-right-out").addClass("line-roll-right-in");
    }).mouseout(function(){
        $(_retail_img).show();
        $(_retail_text).removeClass("text-roll-left-in").addClass("text-roll-right-out").css({"color":"#545454"});
        $(_retail_line).removeClass("line-roll-right-in").addClass("line-roll-right-out");
    }).append($(_retail_img),$(_retail_text),$(_retail_line));

    let _fishing = document.createElement("DIV");
    $(_fishing).addClass("cur-p d-flex flex-row justify-content-start align-content-center MenuScenesBtnDiv SceneBtnAni");
    let _fishing_img = document.createElement("IMG");
    $(_fishing_img).attr("src","./images/icon/Use_2.png");
    _fishing_text = document.createElement("P");
    $(_fishing_text).html(MenuButton[5]);
    let _fishing_line = document.createElement("DIV");
    $(_fishing_line).addClass("pos-a MenuBtnLine");
    $(_fishing).click(function(){
        G_WaveCanvas();
        pano.call("loadscene(scene_0015,null,MERGE,BLEND(0.5));");
    }).mouseover(function(){
        $(_fishing_img).hide();
        $(_fishing_text).removeClass("text-roll-right-out").addClass("text-roll-left-in").css({"color":"#00428E"});
        $(_fishing_line).removeClass("line-roll-right-out").addClass("line-roll-right-in");
    }).mouseout(function(){
        $(_fishing_img).show();
        $(_fishing_text).removeClass("text-roll-left-in").addClass("text-roll-right-out").css({"color":"#545454"});
        $(_fishing_line).removeClass("line-roll-right-in").addClass("line-roll-right-out");
    }).append($(_fishing_img),$(_fishing_text),$(_fishing_line));

    let _food = document.createElement("DIV");
    $(_food).addClass("cur-p d-flex flex-row justify-content-start align-content-center MenuScenesBtnDiv SceneBtnAni");
    let _food_img = document.createElement("IMG");
    $(_food_img).attr("src","./images/icon/Use_7.png");
    _food_text = document.createElement("P");
    $(_food_text).html(MenuButton[6]);
    let _food_line = document.createElement("DIV");
    $(_food_line).addClass("pos-a MenuBtnLine");
    $(_food).click(function(){
        G_WaveCanvas();
        pano.call("loadscene(scene_0017,null,MERGE,BLEND(0.5));");
    }).mouseover(function(){
        $(_food_img).hide();
        $(_food_text).removeClass("text-roll-right-out").addClass("text-roll-left-in").css({"color":"#00428E"});
        $(_food_line).removeClass("line-roll-right-out").addClass("line-roll-right-in");
    }).mouseout(function(){
        $(_food_img).show();
        $(_food_text).removeClass("text-roll-left-in").addClass("text-roll-right-out").css({"color":"#545454"});
        $(_food_line).removeClass("line-roll-right-in").addClass("line-roll-right-out");
    }).append($(_food_img),$(_food_text),$(_food_line));

    let _fit = document.createElement("DIV");
    $(_fit).addClass("cur-p d-flex flex-row justify-content-start align-content-center MenuScenesBtnDiv SceneBtnAni");
    let _fit_img = document.createElement("IMG");
    $(_fit_img).attr("src","./images/menu/Use_8.png");
    _fit_text = document.createElement("P");
    $(_fit_text).html(MenuButton[7]);
    let _fit_line = document.createElement("DIV");
    $(_fit_line).addClass("pos-a MenuBtnLine");
    $(_fit).click(function(){
        G_WaveCanvas();
        pano.call("loadscene(scene_0019,null,MERGE,BLEND(0.5));");
    }).mouseover(function(){
        $(_fit_img).hide();
        $(_fit_text).removeClass("text-roll-right-out").addClass("text-roll-left-in").css({"color":"#00428E"});
        $(_fit_line).removeClass("line-roll-right-out").addClass("line-roll-right-in");
    }).mouseout(function(){
        $(_fit_img).show();
        $(_fit_text).removeClass("text-roll-left-in").addClass("text-roll-right-out").css({"color":"#545454"});
        $(_fit_line).removeClass("line-roll-right-in").addClass("line-roll-right-out");
    }).append($(_fit_img),$(_fit_text),$(_fit_line));


    $(container).append(
        $(_home),
        $(_construction),
        $(_manufacturing),
        $(_tech),
        $(_retail),
        $(_fishing),
        $(_food),
        $(_fit)
    );
}

function ChangeMenuTextLang(){
    if($("#pano").attr("data-lang") == "TC"){
        $(_home_text).html(MenuButton[0]);
        $(_construction_text).html(MenuButton[1]);
        $(_manufacturing_text).html(MenuButton[2]);
        $(_tech_text).html(MenuButton[3]);
        $(_retail_text).html(MenuButton[4]);
        $(_fishing_text).html(MenuButton[5]);
        $(_food_text).html(MenuButton[6]);
        $(_fit_text).html(MenuButton[7]);
    }
    else if($("#pano").attr("data-lang") == "EN"){
        $(_home_text).html(MenuButton_EN[0]);
        $(_construction_text).html(MenuButton_EN[1]);
        $(_manufacturing_text).html(MenuButton_EN[2]);
        $(_tech_text).html(MenuButton_EN[3]);
        $(_retail_text).html(MenuButton_EN[4]);
        $(_fishing_text).html(MenuButton_EN[5]);
        $(_food_text).html(MenuButton_EN[6]);
        $(_fit_text).html(MenuButton_EN[7]);
    }
    else if($("#pano").attr("data-lang") == "JP"){
        $(_home_text).html(MenuButton_JP[0]);
        $(_construction_text).html(MenuButton_JP[1]);
        $(_manufacturing_text).html(MenuButton_JP[2]);
        $(_tech_text).html(MenuButton_JP[3]);
        $(_retail_text).html(MenuButton_JP[4]);
        $(_fishing_text).html(MenuButton_JP[5]);
        $(_food_text).html(MenuButton_JP[6]);
        $(_fit_text).html(MenuButton_JP[7]);
    }
}

function CheckDevice(){
    var u = navigator.userAgent,
    ua = navigator.userAgent.toLowerCase(),
    isLineApp = u.indexOf("Line") > -1,
    isInstagramApp = u.indexOf("Instagram") > -1,
    isFbApp = u.indexOf("FBAV") > -1,
    isWeixinApp = ua.match(/MicroMessenger/i) == "micromessenger",
    isQQApp = ua.match(/QQ/i) == "qq",
    isweiboApp = ua.match(/WeiBo/i) == "weibo";
    // document.getElementById("ios_btn").style.display = "none";
    // document.getElementById("android_btn").style.display = "none";
    // document.getElementById("desk_btn").style.display = "none";
    // document.getElementById("inAPP_btn").style.display = "none";

    if (isLineApp || isInstagramApp || isFbApp || isWeixinApp || isQQApp || isweiboApp) {
        // document.getElementById("inAPP_btn").style.display = "";
        // $("html").attr("data-d","inApp");
        return true;
    }
    else if (/(iPhone|iPad|iPod|iOS&&!safari)/i.test(ua)) {
        // document.getElementById("ios_btn").style.display = "";
        // $("html").attr("data-d","iOS");
        return true;
    }
    else if (/(Android)/i.test(ua)) {
        // document.getElementById("android_btn").style.display = "";
        // $("html").attr("data-d","Android");
        return true;
    }
    else{
        // document.getElementById("desk_btn").style.display = "";
        // $("html").attr("data-d","Desktop");
        return false;
    };
}

function G_WaveCanvas(){
    let _CanvasLogoDiv = document.createElement("DIV");
    $(_CanvasLogoDiv).addClass("pos-a t-0 w-100 h-100").attr("id","CanvasDiv");
    let _CanvasLogo = document.createElement("IMG");
    $(_CanvasLogo).addClass("pos-r CanvasLogo").attr("src","./images/transitions/WALRUS_Logo.png").appendTo($(_CanvasLogoDiv));
    $("#pano").append($(_CanvasLogoDiv));
    $("#WaveAnim").addClass("Wave").show();
    timer.start();
}

function Timer(fn, t) {
    var timerObj = setInterval(fn, t);
    this.stop = function() {
        if (timerObj) {
            clearInterval(timerObj);
            timerObj = null;
        }
        return this;
    }
    // start timer using current settings (if it's not already running)
    this.start = function() {
        if (!timerObj) {
            this.stop();
            timerObj = setInterval(fn, t);
        }
        return this;
    }
    // start with new or original interval, stop current interval
    this.reset = function(newT = t) {
        t = newT;
        return this.stop().start();
    }
}