const IndustryType=["營造工程類","農/漁業","製造業","批發零售業","科技業","服務業","住宿及餐飲業"],IndustryType_EN=["Construction","Agriculture/Fisheries","Manufacturing","Wholesale/Retail Trade","Technology","Services","Restaurants/Lodging"],IndustryType_JP=["建設工事類","農業/漁業","製造業","卸売/小売業","テクノロジー産業","サービス業","宿泊/飲食業"];function Data(e){e=e.toUpperCase(),"TC"==$("#pano").attr("data-lang")?$.getJSON("./data/machineConfigure_tc.json",function(t){Page(t,e)}):"EN"==$("#pano").attr("data-lang")?$.getJSON("./data/machineConfigure_en.json",function(t){Page(t,e)}):"JP"==$("#pano").attr("data-lang")&&$.getJSON("./data/machineConfigure_jp.json",function(t){Page(t,e)}),setTimeout(function(){$("#MenuBGC").remove(),$("#MenuContent").remove()},300),$("#MenuBGC").removeClass("Rollin-left").addClass("Rollout-left"),$(".SceneBtnAni").removeClass("SceneBtnAni").addClass("SceneBtnAni-Out"),$("#MenuLogo").hide()}function Data_Situation(e){e=e.toUpperCase().substring(0,e.length-2),"TC"==$("#pano").attr("data-lang")?$.getJSON("./data/machineConfigure_tc.json",function(t){Page(t,e)}):"EN"==$("#pano").attr("data-lang")?$.getJSON("./data/machineConfigure_en.json",function(t){Page(t,e)}):"JP"==$("#pano").attr("data-lang")&&$.getJSON("./data/machineConfigure_jp.json",function(t){Page(t,e)}),Close_Menu()}function Page(e,t){let a=document.createElement("DIV");$(a).addClass("pos-a w-100 h-100 t-0 r-0 z-50 bgc-black").click(function(){setTimeout(function(){$(a).remove(),$(n).remove()},500),$(n).removeClass("PageContentAni").addClass("Rollout")}).appendTo("#pano");let n=document.createElement("DIV");$(n).addClass("pos-a h-100 t-0 r-0 PageContent PageContentAni").attr("id","PageContent").appendTo("#pano");let o=document.createElement("DIV");$(o).addClass("pos-a h-100 t-0 r-0 Container ProductPage").attr("id","ProductContainer"),$(o).attr("data-item",e[t]["P-Name"]);let c=document.createElement("DIV");$(c).addClass("pos-r row justify-content-center align-content-center border-b-1").css({width:"100%",margin:"0"}),G_Top(c,e,t);let d=document.createElement("DIV");$(d).addClass("pos-a ProductBtnList"),G_Btn(d,e,t);let l=document.createElement("IMG");$(l).addClass("pos-a t-0 r-0 cur-p z-110").attr("src","./images/icon/Icon_Close.png").css({width:"4.5rem",padding:"0"}).click(function(){setTimeout(function(){$(a).remove(),$(n).remove()},500),$(n).removeClass("PageContentAni").addClass("Rollout")}),$(n).append($(d),$(l));let r=document.createElement("DIV");$(r).addClass("pos-r row justify-content-center align-content-center ProductContent").css({width:"100%",margin:"1rem 0 1rem 0"}),G_Mid(r,e,t);let s=document.createElement("DIV");$(s).addClass("row justify-content-center align-content-center"),G_Video(s,e,t);let i=document.createElement("DIV");$(i).addClass("pos-r row justify-content-start align-content-start").css({"padding-left":"4rem","padding-right":"4rem"}),G_Bot(i,e,t),$(o).append($(c),$(r),$(s),$(i)),$(n).append($(o))}function G_Top(e,t,a){G_ProductImage(e,t,a);let n=document.createElement("IMG");$(n).addClass("pos-a t-0 l-0").attr("src","./images/icon/Page_Logo.png").css({width:"5rem","margin-top":"calc(0.5 * var(--bs-gutter-x))"});let o=document.createElement("IMG");$(o).addClass("pos-a t-0 r-0").attr("src","./images/icon/Page_Bgc.png").css({width:"13rem",padding:"0",opacity:"0.6"});let c=document.createElement("P");$(c).addClass("pos-r b-0 ModelText"),t[a]["D-model"].length>0&&("TC"==$("#pano").attr("data-lang")?$(c).html("展示機型 "+t[a]["D-model"]):"EN"==$("#pano").attr("data-lang")?$(c).html("Display model "+t[a]["D-model"]):"JP"==$("#pano").attr("data-lang")&&$(c).html("展示機種 "+t[a]["D-model"]));let d=document.createElement("IMG");$(d).addClass("JCIT_Page").attr("src","./images/icon/JCIT_Page.png").fadeOut(3500),$(e).append($(n),$(o),$(d),$(c))}function G_ProductImage(e,t,a){let n=document.createElement("DIV");$(n).addClass("z-100");let o=document.createElement("a"),c=document.createElement("IMG");$(c).addClass("pd-3-0 display-block").attr("id","ProductImg").attr("src","./images/product/"+t[a]["P-Image"]).css({width:"17rem",height:"17rem",margin:"2rem auto auto auto"}),"Y"==t[a].AR&&$(c).addClass("cur-p").click(function(){if(CheckDevice())if("Android"==$(c).attr("data-d"))$(o).attr("rel","ar").attr("href",t[a].android_ar);else if("iOS"==$(c).attr("data-d"))$(o).attr("rel","ar").attr("href","./data/model/"+t[a].ios_ar);else{let e=document.createElement("DIV");$(e).addClass("pos-a t-0 w-100 h-100 bgc-black z-500").attr("id","modelwindow").appendTo("#pano");let t=document.createElement("DIV"),a="";"TC"==$("#pano").attr("data-lang")?a='<div>                            <p>請使用預設瀏覽器<img src="./images/icon/safari-icon.png">&nbsp;<img src="./images/icon/Chrome-icon.png">開啟體驗</p>                            <img class="close_image" src="./images/icon/Icon_Close.png">                        </div>':"EN"==$("#pano").attr("data-lang")?a='<div>                        <p>Please switch to default browser <img src="./images/icon/safari-icon.png">&nbsp;<img src="./images/icon/Chrome-icon.png"> and turn on the experience.</p>                            <img class="close_image" src="./images/icon/Icon_Close.png">                        </div>':"JP"==$("#pano").attr("data-lang")&&(a='<div>                            <p>デフォルトのブラウザを使用して<img src="./images/icon/safari-icon.png">&nbsp;<img src="./images/icon/Chrome-icon.png">体験してください</p>                            <img class="close_image" src="./images/icon/Icon_Close.png">                        </div>'),$(t).addClass("ta-c inAPPDiv").html(a).appendTo($(e)),$(".close_image").click(function(){$("#modelwindow").remove()})}else{let e=document.createElement("DIV");$(e).addClass("pos-a t-0 w-100 h-100 bgc-black z-500").attr("id","modelwindow").appendTo("#pano");let n=document.createElement("DIV"),o="";"TC"==$("#pano").attr("data-lang")?o+='<p class="">▼掃描點擊AR體驗▼</p>':"EN"==$("#pano").attr("data-lang")?o+='<p class="">▼Frame the QR code with your smartphone to turn on the experience.▼</p>':"JP"==$("#pano").attr("data-lang")&&(o+='<p class="">▼スキャンしたら、クリックしてARを体験しよう▼</p>'),o+='<img class="qrcode_image" src="./images/ar/'+t[a].qrcode+'">                <img class="close_image" src="./images/icon/Icon_Close.png">',$(n).addClass("pos-a ta-c DeskDiv").html(o).appendTo($(e)),$(".close_image").click(function(){$("#modelwindow").remove()})}}),$(o).append($(c)),$(n).append($(o)),$(e).append($(n))}function G_Btn(e,t,a){let n=document.createElement("DIV");$(n).addClass("d-flex flex-column ProductBtn");let o=document.createElement("IMG");$(o).attr("src","./images/icon/Icon_Catalog.png");let c=document.createElement("P");"TC"==$("#pano").attr("data-lang")?$(c).html("線上型錄"):"EN"==$("#pano").attr("data-lang")?$(c).html("Brochure"):"JP"==$("#pano").attr("data-lang")&&$(c).html("カタログ"),$(n).click(function(){window.open(t[a]["P-Catalog"])}).append($(o),$(c));let d=document.createElement("DIV");$(d).addClass("d-flex flex-column ProductBtn");let l=document.createElement("IMG");$(l).attr("src","./images/icon/Icon_Info.png");let r=document.createElement("P");"TC"==$("#pano").attr("data-lang")?$(r).html("更多資訊"):"EN"==$("#pano").attr("data-lang")?$(r).html("More Info"):"JP"==$("#pano").attr("data-lang")&&$(r).html("詳細"),$(d).click(function(){window.open(t[a]["P-Info"])}).append($(l),$(r));let s=document.createElement("DIV");$(s).addClass("d-flex flex-column ProductBtn");let i=document.createElement("IMG");$(i).attr("src","./images/icon/Icon_Contact.png");let m=document.createElement("P");"TC"==$("#pano").attr("data-lang")?($(m).html("聯絡我們"),$(s).click(function(){window.open("https://walruspump.com/zh-tw/contact/index.html")}).append($(i),$(m))):"EN"==$("#pano").attr("data-lang")?($(m).html("Contact Us"),$(s).click(function(){window.open("https://walruspump.com/en-global/contact/index.html")}).append($(i),$(m))):"JP"==$("#pano").attr("data-lang")&&($(m).html("お問い合わせ"),$(s).click(function(){window.open("https://walruspump.com/en-global/contact/index.html")}).append($(i),$(m))),t[a]["P-Catalog"].length>0&&$(e).append($(n)),t[a]["P-Info"].length>0&&$(e).append($(d)),$(e).append($(s))}function G_Mid(e,t,a){let n=document.createElement("P");$(n).addClass("ContentSeries mg-0 fs-1d5 fw-7").html(t[a].Series).css({"padding-left":"2rem","padding-right":"2rem"});let o=document.createElement("P");$(o).addClass("fs-1d25 fw-7").html(t[a]["P-Name"]).css({"padding-left":"2.5rem","padding-right":"2rem"});let c=document.createElement("UL");$(c).css({"padding-left":"3.6rem","padding-right":"2rem"}),t[a].Features.forEach(e=>{let t=document.createElement("LI");$(t).html(e).appendTo($(c))}),$(e).append($(n),$(o),$(c))}function G_Video(e,t,a){t[a]["P-Video"].forEach(t=>{let a=document.createElement("DIV");$(a).addClass("pos-r col-10 h-25 VideoContent").attr("data-content",t).click(function(){G_VideoPlay(t)});let n=document.createElement("IMG");$(n).addClass("w-100").attr("src","https://img.youtube.com/vi/"+t+"/sddefault.jpg");let o=document.createElement("IMG");$(o).addClass("pos-a VideoBtn").attr("src","./images/icon/Video.png"),$(a).append($(n),$(o)),$(e).append($(a))})}function G_Bot(e,t,a){let n=document.createElement("P");$(n).addClass("fw-7").css({color:"#00428E"}),"TC"==$("#pano").attr("data-lang")?$(n).html("適用產業範圍"):"EN"==$("#pano").attr("data-lang")?$(n).html("Application"):"JP"==$("#pano").attr("data-lang")&&$(n).html("該当する業界の範囲"),$(e).append($(n));for(let n=1;n<=7;n++){let o=document.createElement("DIV"),c=document.createElement("IMG"),d=document.createElement("P");$("#PageContent").outerWidth()>400?($(o).addClass("col-6 d-flex flex-column text-center").css({"margin-bottom":"1.25rem"}),$(c).css({width:"3rem",height:"3rem",display:"block",margin:"auto"})):$(o).addClass("col-12 d-flex flex-row").css({"margin-bottom":"1.25rem"}),$(c).addClass("IndustryImg"),$("#PageContent").outerWidth()>400?$(d).addClass("align-content-center fw-7").css({height:"2.5rem","font-size":"15px",margin:"10px 0"}):$(d).addClass("fw-7").css({"font-size":"12px",margin:"15px"}),"TC"==$("#pano").attr("data-lang")?$(d).html(IndustryType[n-1]):"EN"==$("#pano").attr("data-lang")?$(d).html(IndustryType_EN[n-1]):$(d).html(IndustryType_JP[n-1]);for(let e=0;e<t[a]["P-Industry"].length;e++){if(n==t[a]["P-Industry"][e]){$(c).attr("src","./images/icon/Use_"+n+".png"),$(d).css("color","#00428E");break}$(c).attr("src","./images/icon/Use_"+n+"N.png"),$(d).css("color","#9E9E9E")}$(o).append($(c),$(d)),$(e).append($(o))}}function G_VideoPlay(e){let t=document.createElement("DIV");$(t).css({position:"absolute",top:"0","background-color":"#000",width:"100vw",height:"100vh",height:"var(--vh)","z-index":"150"}).appendTo("#pano");let a=document.createElement("IFRAME");$(a).addClass("VideoPlayer").attr("frameborder","0").attr("allowfullscreen","1").attr("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;").attr("src","https://www.youtube.com/embed/"+e+"?&autoplay=1").appendTo($(t));let n=document.createElement("IMG");$(n).addClass("pos-a t-0 r-0 cur-p").attr("src","./images/icon/Icon_Close.png").css({width:"6rem",padding:"0","z-index":"10"}).click(function(){$(t).remove()}).appendTo($(t))}