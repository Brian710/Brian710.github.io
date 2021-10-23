const IndustryType = [
    "營造工程類",
    "農、漁業",
    "製造業",
    "批發零售業",
    "科技業",
    "服務業",
    "住宿及餐飲業"
];
const IndustryType_EN = [
    "Construction Industry",
    "Agriculture/Fishing Industry",
    "Manufacturing Industry",
    "Wholesale & Retail Industry",
    "Technology Industry",
    "Service Industry",
    "Accommodation & Food Service Activities"
];
const IndustryType_JP = [
    "建設工学",
    "農、漁業",
    "製造",
    "卸売と小売り",
    "テクノロジー産業",
    "サービス",
    "宿泊およびケータリング業界"
];

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
    "Service/Accommodation & Food Service Activities",
    "WALRUS fit"
];
const MenuButton_JP = [
    "ホール",
    "建設工学",
    "製造",
    "テクノロジー産業",
    "卸売と小売り",
    "農業、漁業", 
    "服務/住宿餐サービス/宿泊およびケータリング業界",
    "カスタマイズ"
];

function Init(){
    embedpano({swf:"tour.swf", xml:"tour.xml", target:"pano", html5:"auto", mobilescale:1.0, passQueryParameters:true});
    Menu();
}

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
})

function Menu(){
    let _menucontainer = document.createElement("DIV");
    $(_menucontainer).addClass("pos-a t-0 MenuContainer").attr("id","MenuContainer").appendTo( "#pano" );

    let _menubtn = document.createElement("DIV");
    $(_menubtn).addClass("pos-r cur-p MenuBtn").html('<svg width="65" height="82" viewBox="0 0 65 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="morph" d="M34.0227 3.45643C38.4986 5.84602 43.5128 6.54299 48.0879 8.705C58.7677 13.7402 65.085 26.1718 65.0142 37.1525C64.9118 53.0207 53.5878 70.0063 40.085 78.0885C15.1349 91.7739 1.64373 67.5033 0.143971 42.5C-1.39585 16.8289 9.70492 -9.61455 34.0227 3.45643Z" fill="#00428E"/></svg>')
    .click(function(){
        if($("#MenuBGC").length){
            setTimeout(function(){
                $("#MenuBGC").remove();
                $("#MenuContent").remove();
            }, 1000);
            $("#MenuBGC").removeClass("Rollin-left").addClass("Rollout-left");
            $(".SceneBtnAni").removeClass("SceneBtnAni").addClass("SceneBtnAni-Out");
        }
        else{
            G_Menu(_menucontainer);
        }
    });
    let _menubtnimage = document.createElement("IMG");
    $(_menubtnimage).addClass("pos-a display-auto mg-auto").attr("src","./images/menu/Icon_Menu_list.png").appendTo($(_menubtn));
    
    

    $(_menucontainer).append($(_menubtn));
}

function Data(enableContent){
    $.getJSON( "./data/machineConfigure.json", function(_data) {
        Page(_data, enableContent);
    });
}

function Page(data, content){
    let _clickempty = document.createElement("DIV");
    $(_clickempty).addClass("pos-a w-100 h-100 t-0 r-0").appendTo( "#pano" );

    let _pagecontent = document.createElement("DIV");
    $(_pagecontent).addClass("pos-a h-100 t-0 r-0 PageContent PageContentAni").attr("id","PageContent").appendTo( "#pano" );

    let _container = document.createElement("DIV");
    $(_container).addClass("pos-a h-100 t-0 r-0 Container ProductPage")
    .attr("id","ProductContainer");

    $(_container).attr("data-item", data[content]["P-Name"]);

    let _top = document.createElement("DIV");
    $(_top).addClass("pos-r row justify-content-center align-content-center border-b-1").css({"width":"100%", "margin":"0"});
    G_Top(_top, data, content);

    let _btncontainer = document.createElement("DIV");
    $(_btncontainer).addClass("pos-a ProductBtnList");
    G_Btn(_btncontainer, data, content);
    
    let _close = document.createElement("IMG");
    $(_close).addClass("pos-a t-0 r-0 cur-p z-110")
    .attr("src", "./images/icon/Icon_Close.png").css({"width":"4.5rem", "padding":"0"})
    .click(function(){
        setTimeout(function(){
            $(_clickempty).remove();
            $(_pagecontent).remove();
        }, 500);
        $(_pagecontent).removeClass("PageContentAni").addClass("Rollout");
    });
    $(_pagecontent).append($(_btncontainer),$(_close));

    let _mid = document.createElement("DIV");
    $(_mid).addClass("pos-r row justify-content-center align-content-center ProductContent").css({"width":"100%", "margin":"1rem 0 1rem 0"});
    G_Mid(_mid, data, content);

    let _videoblock = document.createElement("DIV");
    $(_videoblock).addClass("row justify-content-center align-content-center");
    G_Video(_videoblock, data, content);

    let _bot = document.createElement("DIV");
    $(_bot).addClass("pos-r row justify-content-start align-content-start").css({"padding-left":"4rem", "padding-right":"4rem"});
    G_Bot(_bot, data, content);

    $(_container).append($(_top), $(_mid),$(_videoblock),$(_bot));
    $(_pagecontent).append($(_container));
}

function G_Top(container, data, content){

    let _productimage = document.createElement("IMG");
    $(_productimage).addClass("pd-3-0 h-25 z-100").attr("src", "./images/product/1.TP825PTB.png").css({"width":"17rem"});
    let _logo = document.createElement("IMG");
    $(_logo).addClass("pos-a t-0 l-0").attr("src", "./images/icon/Page_Logo.png").css({"width":"5rem", "margin-top":"calc(0.5 * var(--bs-gutter-x))"});
    let _bgc = document.createElement("IMG");
    $(_bgc).addClass("pos-a t-0 r-0").attr("src", "./images/icon/Page_Bgc.png").css({"width":"13rem", "padding":"0", "opacity":"0.6"});

    let _itemmodel = document.createElement("P");
    $(_itemmodel).addClass("pos-a b-0 ModelText").html(data[content]["D-model"]);

    $(container).append(
        $(_productimage),
        $(_logo),
        $(_bgc),
        $(_itemmodel)
    );
}

function G_Btn(container, data, content){

    let _catalog_btn = document.createElement("DIV");
    $(_catalog_btn).addClass("d-flex flex-column ProductBtn");
    let _catalog_img = document.createElement("IMG");
    $(_catalog_img).attr("src","./images/icon/Icon_Catalog.png");
    let _catalog_text = document.createElement("P");
    $(_catalog_text).html("線上型錄");
    $(_catalog_btn).append($(_catalog_img),$(_catalog_text));

    let _info_btn = document.createElement("DIV");
    $(_info_btn).addClass("d-flex flex-column ProductBtn");
    let _info_img = document.createElement("IMG");
    $(_info_img).attr("src","./images/icon/Icon_Info.png");
    let _info_text = document.createElement("P");
    $(_info_text).html("更多資訊");
    $(_info_btn).append($(_info_img),$(_info_text));

    let _contact_btn = document.createElement("DIV");
    $(_contact_btn).addClass("d-flex flex-column ProductBtn");
    let _contact_img = document.createElement("IMG");
    $(_contact_img).attr("src","./images/icon/Icon_Contact.png");
    let _contact_text = document.createElement("P");
    $(_contact_text).html("聯絡我們");
    $(_contact_btn).append($(_contact_img),$(_contact_text));

    $(container).append($(_catalog_btn), $(_info_btn), $(_contact_btn));
}

function G_Mid(container, data, content){

    let _series = document.createElement("P");
    $(_series).addClass("ContentSeries mg-0 fs-1d5 fw-7").html(data[content]["Series"]).css({"padding-left":"2rem", "padding-right":"2rem"});
    let _name = document.createElement("P");
    $(_name).addClass("fs-1d25 fw-7").html(data[content]["P-Name"]).css({"padding-left":"43px", "padding-right":"2rem"});
    let _features = document.createElement("UL");
    $(_features).css({"padding-left":"60px", "padding-right":"2rem"});
    data[content]["Features"].forEach(el => {
        let _f_li = document.createElement("LI");
        $(_f_li).html(el).appendTo($(_features));
    });

    $(container).append(
        $(_series),
        $(_name),
        $(_features)
    );
}

function G_Video(container, data, content){

    data[content]["P-Video"].forEach(object => {
        let _videodiv = document.createElement("DIV");
        $(_videodiv).addClass("pos-r col-10 h-25 VideoContent").attr("data-content", object)
        .click(function(){
            G_VideoPlay(object);
        });

        let _video = document.createElement("IMG");
        $(_video).addClass("w-100").attr("src","https://img.youtube.com/vi/"+ object +"/sddefault.jpg");

        let _videobtn = document.createElement("IMG");
        $(_videobtn).addClass("pos-a VideoBtn").attr("src","./images/icon/Video.png");

        $(_videodiv).append($(_video),$(_videobtn));
        $(container).append($(_videodiv));
    });
}

function G_Bot(container, data, content){

    let _industrytitle = document.createElement("P");
    $(_industrytitle).addClass("fw-7").html("適用產業範圍").css({"color":"#00428E"});
    $(container).append($(_industrytitle));

    for(let i = 1; i <= 7; i++){
        let _industrycontainer = document.createElement("DIV");
        let _industryimg = document.createElement("IMG");
        let _industrytext = document.createElement("P");

        if($("#PageContent").outerWidth() > 400){
            $(_industrycontainer).addClass("col-6 d-flex flex-column text-center").css({"margin-bottom":"1.25rem"});
            $(_industryimg).css({"width":"3rem","height":"3rem","display":"block","margin":"auto"});
        }
        else{
            $(_industrycontainer).addClass("col-12 d-flex flex-row").css({"margin-bottom":"1.25rem"});
        }
        $(_industryimg).addClass("IndustryImg");
        if($("#PageContent").outerWidth() > 400){
            $(_industrytext).addClass("align-content-center fw-7").html(IndustryType[i - 1]).css({"height":"2.5rem","font-size":"15px", "margin":"10px 0"});
        }
        else{
            $(_industrytext).addClass("fw-7").html(IndustryType[i - 1]).css({"font-size":"12px", "margin":"15px"});
        }        
        for(let j = 0; j < data[content]["P-Industry"].length; j++){
            if(i == data[content]["P-Industry"][j]){
                $(_industryimg).attr("src","./images/icon/Use_"+ i +".png");
                $(_industrytext).css("color","#00428E");
                break;
            }
            else{
                $(_industryimg).attr("src","./images/icon/Use_"+ i +"N.png");
                $(_industrytext).css("color","#9E9E9E");
            }
        }
        $(_industrycontainer).append($(_industryimg),$(_industrytext));
        $(container).append($(_industrycontainer));
    }
}

function G_VideoPlay(id){

    let _videocontainer = document.createElement("DIV");
    $(_videocontainer).css({"position":"absolute","top":"0","background-color":"#000","width":"100vw","height":"100vh","z-index":"150"}).appendTo( "#pano" );

    let _videoplay = document.createElement("IFRAME");
    $(_videoplay).addClass("VideoPlayer").attr("frameborder", "0")
    .attr("allowfullscreen","1").attr("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;")
    .attr("src","https://www.youtube.com/embed/" + id +"?&autoplay=1").appendTo($(_videocontainer));

    let _close = document.createElement("IMG");
    $(_close).addClass("pos-a t-0 r-0 cur-p")
    .attr("src", "./images/icon/Icon_Close.png").css({"width":"7rem", "padding":"0", "z-index":"10"})
    .click(function(){
        $(_videocontainer).remove();
    }).appendTo($(_videocontainer));
}

function G_Menu(container){

    let _menubgc = document.createElement("DIV");
    $(_menubgc).addClass("pos-a MenuBgc Rollin-left").attr("id","MenuBGC");

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
    $(_menulogo).addClass("SceneBtnAni").attr("src","./images/menu/Icon_IP.png")
    .css({"width":"12rem","margin-left":"2rem"}).appendTo($(_menucontentcontainer));

    $(container).append($(_menubgc),$(_menucontentcontainer));
}

function G_MenuBtnList(contatiner){

    let _langbtn_tc_div = document.createElement("DIV");
    let _langbtn_tc_img = document.createElement("IMG");
    $(_langbtn_tc_img).attr("src","./images/menu/Btn_Bg.png");
    let _langbtn_tc_text = document.createElement("P");
    $(_langbtn_tc_text).addClass("pos-a").html("繁");
    $(_langbtn_tc_div).addClass("pos-r text-center MenuBtnListDIV")
    .mouseover(function(){
        $(_langbtn_tc_text).css("color","#FFD900");
    })
    .mouseout(function(){
        $(_langbtn_tc_text).css("color","#FFFFFF");
    }).append($(_langbtn_tc_img),$(_langbtn_tc_text));

    let _langbtn_en_div = document.createElement("DIV");
    let _langbtn_en_img = document.createElement("IMG");
    $(_langbtn_en_img).attr("src","./images/menu/Btn_Bg.png");
    let _langbtn_en_text = document.createElement("P");
    $(_langbtn_en_text).addClass("pos-a").html("En");
    $(_langbtn_en_div).addClass("pos-r text-center MenuBtnListDIV")
    .mouseover(function(){
        $(_langbtn_en_text).css("color","#FFD900");
    })
    .mouseout(function(){
        $(_langbtn_en_text).css("color","#FFFFFF");
    }).append($(_langbtn_en_img),$(_langbtn_en_text));

    let _langbtn_jp_div = document.createElement("DIV");
    let _langbtn_jp_img = document.createElement("IMG");
    $(_langbtn_jp_img).attr("src","./images/menu/Btn_Bg.png");
    let _langbtn_jp_text = document.createElement("P");
    $(_langbtn_jp_text).addClass("pos-a").html("日");
    $(_langbtn_jp_div).addClass("pos-r text-center MenuBtnListDIV")
    .mouseover(function(){
        $(_langbtn_jp_text).css("color","#FFD900");
    })
    .mouseout(function(){
        $(_langbtn_jp_text).css("color","#FFFFFF");
    }).append($(_langbtn_jp_img),$(_langbtn_jp_text));

    let _soundbtn_div = document.createElement("DIV");
    let _soundbtn_img = document.createElement("IMG");
    $(_soundbtn_img).attr("src","./images/menu/Btn_Bg.png");
    let _soundbtn_icon = document.createElement("IMG");
    $(_soundbtn_icon).addClass("pos-a SoundBtn").attr("src","./images/menu/Btn_Video_On.png");
    $(_soundbtn_div).addClass("pos-r text-center MenuBtnListDIV").append($(_soundbtn_img),$(_soundbtn_icon));

    $(contatiner).append($(_langbtn_tc_div),$(_langbtn_en_div),$(_langbtn_jp_div),$(_soundbtn_div));
}

function G_MenuScenesBtnList(container){

    let _home = document.createElement("DIV");
    $(_home).addClass("cur-p d-flex flex-row justify-content-start align-content-center SceneBtnAni");
    let _home_img = document.createElement("IMG");
    $(_home_img).attr("src","./images/menu/Home.png");
    let _home_text = document.createElement("P");
    $(_home_text).addClass("mg-0 pd-10-15").html(MenuButton[0]);
    $(_home).mouseover(function(){
        $(_home_img).hide();
        $(_home_text).css({"color":"#00428E","font-weight":"700","border-bottom": "2px solid #00428E"});
    }).mouseout(function(){
        $(_home_img).show();
        $(_home_text).css({"color":"#000000","font-weight":"400","border-bottom": ""});
    }).append($(_home_img),$(_home_text));

    let _construction = document.createElement("DIV");
    $(_construction).addClass("cur-p d-flex flex-row justify-content-start align-content-center SceneBtnAni");
    let _construction_img = document.createElement("IMG");
    $(_construction_img).attr("src","./images/icon/Use_1.png");
    let _construction_text = document.createElement("P");
    $(_construction_text).addClass("mg-0 pd-10-15").html(MenuButton[1]);
    $(_construction).mouseover(function(){
        $(_construction_img).hide();
        $(_construction_text).css({"color":"#00428E","font-weight":"700","border-bottom": "2px solid #00428E"});
    }).mouseout(function(){
        $(_construction_img).show();
        $(_construction_text).css({"color":"#000000","font-weight":"400","border-bottom": ""});
    }).append($(_construction_img),$(_construction_text));

    let _manufacturing = document.createElement("DIV");
    $(_manufacturing).addClass("cur-p d-flex flex-row justify-content-start align-content-center SceneBtnAni");
    let _manufacturing_img = document.createElement("IMG");
    $(_manufacturing_img).attr("src","./images/icon/Use_3.png");
    let _manufacturing_text = document.createElement("P");
    $(_manufacturing_text).addClass("mg-0 pd-10-15").html(MenuButton[2]);
    $(_manufacturing).mouseover(function(){
        $(_manufacturing_img).hide();
        $(_manufacturing_text).css({"color":"#00428E","font-weight":"700","border-bottom": "2px solid #00428E"});
    }).mouseout(function(){
        $(_manufacturing_img).show();
        $(_manufacturing_text).css({"color":"#000000","font-weight":"400","border-bottom": ""});
    }).append($(_manufacturing_img),$(_manufacturing_text));

    let _tech = document.createElement("DIV");
    $(_tech).addClass("cur-p d-flex flex-row justify-content-start align-content-center SceneBtnAni");
    let _tech_img = document.createElement("IMG");
    $(_tech_img).attr("src","./images/icon/Use_5.png");
    let _tech_text = document.createElement("P");
    $(_tech_text).addClass("mg-0 pd-10-15").html(MenuButton[3]);
    $(_tech).mouseover(function(){
        $(_tech_img).hide();
        $(_tech_text).css({"color":"#00428E","font-weight":"700","border-bottom": "2px solid #00428E"});
    }).mouseout(function(){
        $(_tech_img).show();
        $(_tech_text).css({"color":"#000000","font-weight":"400","border-bottom": ""});
    }).append($(_tech_img),$(_tech_text));

    let _retail = document.createElement("DIV");
    $(_retail).addClass("cur-p d-flex flex-row justify-content-start align-content-center SceneBtnAni");
    let _retail_img = document.createElement("IMG");
    $(_retail_img).attr("src","./images/icon/Use_4.png");
    let _retail_text = document.createElement("P");
    $(_retail_text).addClass("mg-0 pd-10-15").html(MenuButton[4]);
    $(_retail).mouseover(function(){
        $(_retail_img).hide();
        $(_retail_text).css({"color":"#00428E","font-weight":"700","border-bottom": "2px solid #00428E"});
    }).mouseout(function(){
        $(_retail_img).show();
        $(_retail_text).css({"color":"#000000","font-weight":"400","border-bottom": ""});
    }).append($(_retail_img),$(_retail_text));

    let _fishing = document.createElement("DIV");
    $(_fishing).addClass("cur-p d-flex flex-row justify-content-start align-content-center SceneBtnAni");
    let _fishing_img = document.createElement("IMG");
    $(_fishing_img).attr("src","./images/icon/Use_2.png");
    let _fishing_text = document.createElement("P");
    $(_fishing_text).addClass("mg-0 pd-10-15").html(MenuButton[5]);
    $(_fishing).mouseover(function(){
        $(_fishing_img).hide();
        $(_fishing_text).css({"color":"#00428E","font-weight":"700","border-bottom": "2px solid #00428E"});
    }).mouseout(function(){
        $(_fishing_img).show();
        $(_fishing_text).css({"color":"#000000","font-weight":"400","border-bottom": ""});
    }).append($(_fishing_img),$(_fishing_text));

    let _food = document.createElement("DIV");
    $(_food).addClass("cur-p d-flex flex-row justify-content-start align-content-center SceneBtnAni");
    let _food_img = document.createElement("IMG");
    $(_food_img).attr("src","./images/icon/Use_7.png");
    let _food_text = document.createElement("P");
    $(_food_text).addClass("mg-0 pd-10-15").html(MenuButton[6]);
    $(_food).mouseover(function(){
        $(_food_img).hide();
        $(_food_text).css({"color":"#00428E","font-weight":"700","border-bottom": "2px solid #00428E"});
    }).mouseout(function(){
        $(_food_img).show();
        $(_food_text).css({"color":"#000000","font-weight":"400","border-bottom": ""});
    }).append($(_food_img),$(_food_text));

    let _fit = document.createElement("DIV");
    $(_fit).addClass("cur-p d-flex flex-row justify-content-start align-content-center SceneBtnAni");
    let _fit_img = document.createElement("IMG");
    $(_fit_img).attr("src","./images/menu/Use_8.png");
    let _fit_text = document.createElement("P");
    $(_fit_text).addClass("mg-0 pd-10-15").html(MenuButton[7]);
    $(_fit).mouseover(function(){
        $(_fit_img).hide();
        $(_fit_text).css({"color":"#00428E","font-weight":"700","border-bottom": "2px solid #00428E"});
    }).mouseout(function(){
        $(_fit_img).show();
        $(_fit_text).css({"color":"#000000","font-weight":"400","border-bottom": ""});
    }).append($(_fit_img),$(_fit_text));


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