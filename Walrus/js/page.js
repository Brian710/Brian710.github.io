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

function Data(enableContent){
    enableContent = enableContent.toUpperCase();
    if($("#pano").attr("data-lang") == "TC"){
        $.getJSON( "./data/machineConfigure_tc.json", function(_data) {
            Page(_data, enableContent);
        });
    }
    else if($("#pano").attr("data-lang") == "EN"){
        $.getJSON( "./data/machineConfigure_en.json", function(_data) {
            Page(_data, enableContent);
        });
    }
    else if($("#pano").attr("data-lang") == "JP"){
        $.getJSON( "./data/machineConfigure_jp.json", function(_data) {
            Page(_data, enableContent);
        });
    }
    setTimeout(function(){
        $("#MenuBGC").remove();
        $("#MenuContent").remove();
    }, 300);
    $("#MenuBGC").removeClass("Rollin-left").addClass("Rollout-left");
    $(".SceneBtnAni").removeClass("SceneBtnAni").addClass("SceneBtnAni-Out");
}

function Page(data, content){
    let _clickempty = document.createElement("DIV");
    $(_clickempty).addClass("pos-a w-100 h-100 t-0 r-0 z-50 bgc-black").click(function(){
        setTimeout(function(){
            $(_clickempty).remove();
            $(_pagecontent).remove();
        }, 500);
        $(_pagecontent).removeClass("PageContentAni").addClass("Rollout");
    }).appendTo( "#pano" );

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
    $(_productimage).addClass("pd-3-0 h-25 z-100").attr("src", "./images/product/"+data[content]["P-Image"]).css({"width":"17rem","margin-top":"2rem"});
    let _logo = document.createElement("IMG");
    $(_logo).addClass("pos-a t-0 l-0").attr("src", "./images/icon/Page_Logo.png").css({"width":"5rem", "margin-top":"calc(0.5 * var(--bs-gutter-x))"});
    let _bgc = document.createElement("IMG");
    $(_bgc).addClass("pos-a t-0 r-0").attr("src", "./images/icon/Page_Bgc.png").css({"width":"13rem", "padding":"0", "opacity":"0.6"});

    let _itemmodel = document.createElement("P");
    $(_itemmodel).addClass("pos-r b-0 ModelText")
    if(data[content]["D-model"].length > 0){
        if($("#pano").attr("data-lang")=="TC")
            $(_itemmodel).html("展示機型 " + data[content]["D-model"]);
        else if($("#pano").attr("data-lang")=="EN")
            $(_itemmodel).html("Display model " + data[content]["D-model"]);
        else if($("#pano").attr("data-lang")=="JP")
            $(_itemmodel).html("ディスプレイモデル " + data[content]["D-model"]);
    }
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
    if($("#pano").attr("data-lang")=="TC")
        $(_catalog_text).html("線上型錄");
    else if($("#pano").attr("data-lang")=="EN")
        $(_catalog_text).html("Brochure");
    else if($("#pano").attr("data-lang")=="JP")
        $(_catalog_text).html("カタログを見る");
    $(_catalog_btn).append($(_catalog_img),$(_catalog_text));

    let _info_btn = document.createElement("DIV");
    $(_info_btn).addClass("d-flex flex-column ProductBtn");
    let _info_img = document.createElement("IMG");
    $(_info_img).attr("src","./images/icon/Icon_Info.png");
    let _info_text = document.createElement("P");
    if($("#pano").attr("data-lang")=="TC")
        $(_info_text).html("更多資訊");
    else if($("#pano").attr("data-lang")=="EN")
        $(_info_text).html("More Info");
    else if($("#pano").attr("data-lang")=="JP")
        $(_info_text).html("詳しくはこちら");
    $(_info_btn).append($(_info_img),$(_info_text));

    let _contact_btn = document.createElement("DIV");
    $(_contact_btn).addClass("d-flex flex-column ProductBtn");
    let _contact_img = document.createElement("IMG");
    $(_contact_img).attr("src","./images/icon/Icon_Contact.png");
    let _contact_text = document.createElement("P");
    if($("#pano").attr("data-lang")=="TC")
        $(_contact_text).html("聯絡我們");
    else if($("#pano").attr("data-lang")=="EN")
        $(_contact_text).html("Contact Us");
    else if($("#pano").attr("data-lang")=="JP")
        $(_contact_text).html("お問い合わせ");
    $(_contact_btn).append($(_contact_img),$(_contact_text));

    $(container).append($(_catalog_btn), $(_info_btn), $(_contact_btn));
}

function G_Mid(container, data, content){

    let _series = document.createElement("P");
    $(_series).addClass("ContentSeries mg-0 fs-1d5 fw-7").html(data[content]["Series"]).css({"padding-left":"2rem", "padding-right":"2rem"});
    let _name = document.createElement("P");
    $(_name).addClass("fs-1d25 fw-7").html(data[content]["P-Name"]).css({"padding-left":"2.5rem", "padding-right":"2rem"});
    let _features = document.createElement("UL");
    $(_features).css({"padding-left":"3.6rem", "padding-right":"2rem"});
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
    $(_industrytitle).addClass("fw-7").css({"color":"#00428E"});
    if($("#pano").attr("data-lang")=="TC")
        $(_industrytitle).html("適用產業範圍");
    else if($("#pano").attr("data-lang")=="EN")
        $(_industrytitle).html("Industrial application");
    else if($("#pano").attr("data-lang")=="JP")
        $(_industrytitle).html("産業上の利用");
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
    $(_videocontainer).css({"position":"absolute","top":"0","background-color":"#000","width":"100vw","height":"100vh","height": "var(--vh)","z-index":"150"}).appendTo( "#pano" );

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