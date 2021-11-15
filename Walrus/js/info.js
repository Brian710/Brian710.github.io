const IndustryType=["營造工程類","農、漁業","製造業","批發零售業","科技業","服務業","住宿及餐飲業"],IndustryType_EN=["Construction","Agriculture & Fisheries","Manufacturing","Wholesale and Retail Trade","Technology","Services","Restaurants & Lodging"],IndustryType_JP=["建設工事類","農業、漁業","製造業","卸売・小売業","テクノロジー産業","サービス業","宿泊・飲食業"];function Data(t){t=t.toUpperCase(),"TC"==$("#pano").attr("data-lang")?$.getJSON("./data/machineConfigure_tc.json",function(e){Page(e,t)}):"EN"==$("#pano").attr("data-lang")?$.getJSON("./data/machineConfigure_en.json",function(e){Page(e,t)}):"JP"==$("#pano").attr("data-lang")&&$.getJSON("./data/machineConfigure_jp.json",function(e){Page(e,t)}),setTimeout(function(){$("#MenuBGC").remove(),$("#MenuContent").remove()},300),$("#MenuBGC").removeClass("Rollin-left").addClass("Rollout-left"),$(".SceneBtnAni").removeClass("SceneBtnAni").addClass("SceneBtnAni-Out"),$("#MenuLogo").hide()}function Data_Situation(t){t=t.toUpperCase().substring(0,t.length-2),"TC"==$("#pano").attr("data-lang")?$.getJSON("./data/machineConfigure_tc.json",function(e){Page(e,t)}):"EN"==$("#pano").attr("data-lang")?$.getJSON("./data/machineConfigure_en.json",function(e){Page(e,t)}):"JP"==$("#pano").attr("data-lang")&&$.getJSON("./data/machineConfigure_jp.json",function(e){Page(e,t)}),Close_Menu()}function Page(t,e){let a=document.createElement("DIV");$(a).addClass("pos-a w-100 h-100 t-0 r-0 z-50 bgc-black").click(function(){setTimeout(function(){$(a).remove(),$(n).remove()},500),$(n).removeClass("PageContentAni").addClass("Rollout")}).appendTo("#pano");let n=document.createElement("DIV");$(n).addClass("pos-a h-100 t-0 r-0 PageContent PageContentAni").attr("id","PageContent").appendTo("#pano");let o=document.createElement("DIV");$(o).addClass("pos-a h-100 t-0 r-0 Container ProductPage").attr("id","ProductContainer"),$(o).attr("data-item",t[e]["P-Name"]);let d=document.createElement("DIV");$(d).addClass("pos-r row justify-content-center align-content-center border-b-1").css({width:"100%",margin:"0"}),G_Top(d,t,e);let l=document.createElement("DIV");$(l).addClass("pos-a ProductBtnList"),G_Btn(l,t,e);let c=document.createElement("IMG");$(c).addClass("pos-a t-0 r-0 cur-p z-110").attr("src","./images/icon/Icon_Close.png").css({width:"4.5rem",padding:"0"}).click(function(){setTimeout(function(){$(a).remove(),$(n).remove()},500),$(n).removeClass("PageContentAni").addClass("Rollout")}),$(n).append($(l),$(c));let r=document.createElement("DIV");$(r).addClass("pos-r row justify-content-center align-content-center ProductContent").css({width:"100%",margin:"1rem 0 1rem 0"}),G_Mid(r,t,e);let s=document.createElement("DIV");$(s).addClass("row justify-content-center align-content-center"),G_Video(s,t,e);let i=document.createElement("DIV");$(i).addClass("pos-r row justify-content-start align-content-start").css({"padding-left":"4rem","padding-right":"4rem"}),G_Bot(i,t,e),$(o).append($(d),$(r),$(s),$(i)),$(n).append($(o))}function G_Top(t,e,a){G_ProductImage(t,e,a);let n=document.createElement("IMG");$(n).addClass("pos-a t-0 l-0").attr("src","./images/icon/Page_Logo.png").css({width:"5rem","margin-top":"calc(0.5 * var(--bs-gutter-x))"});let o=document.createElement("IMG");$(o).addClass("pos-a t-0 r-0").attr("src","./images/icon/Page_Bgc.png").css({width:"13rem",padding:"0",opacity:"0.6"});let d=document.createElement("P");$(d).addClass("pos-r b-0 ModelText"),e[a]["D-model"].length>0&&("TC"==$("#pano").attr("data-lang")?$(d).html("展示機型 "+e[a]["D-model"]):"EN"==$("#pano").attr("data-lang")?$(d).html("Display model "+e[a]["D-model"]):"JP"==$("#pano").attr("data-lang")&&$(d).html("展示機種 "+e[a]["D-model"]));let l=document.createElement("IMG");$(l).addClass("JCIT_Page").attr("src","./images/icon/JCIT_Page.png").fadeOut(3500),$(t).append($(n),$(o),$(l),$(d))}function G_ProductImage(t,e,a){let n=document.createElement("DIV");$(n).addClass("z-100");let o=document.createElement("a"),d=document.createElement("IMG");$(d).addClass("pd-3-0 display-block").attr("id","ProductImg").attr("src","./images/product/"+e[a]["P-Image"]).css({width:"17rem",height:"17rem",margin:"2rem auto auto auto"}),"Y"==e[a].AR&&$(d).addClass("cur-p").click(function(){if(CheckDevice())if("Android"==$(d).attr("data-d"))$(o).attr("rel","ar").attr("href",e[a].android_ar);else if("iOS"==$(d).attr("data-d"))$(o).attr("rel","ar").attr("href","./data/model/"+e[a].ios_ar);else{let t=document.createElement("DIV");$(t).addClass("pos-a t-0 w-100 h-100 bgc-black z-500").attr("id","modelwindow").appendTo("#pano");let e=document.createElement("DIV"),a="";"TC"==$("#pano").attr("data-lang")||"EN"==$("#pano").attr("data-lang")||$("#pano").attr("data-lang"),$(e).addClass("ta-c inAPPDiv").html(a).appendTo($(t)),$(".close_image").click(function(){$("#modelwindow").remove()})}else{let t=document.createElement("DIV");$(t).addClass("pos-a t-0 w-100 h-100 bgc-black z-500").attr("id","modelwindow").appendTo("#pano");let n=document.createElement("DIV"),o="";"TC"==$("#pano").attr("data-lang")?o+='<p class="">▼掃描點擊AR體驗▼</p>':"EN"==$("#pano").attr("data-lang")?o+='<p class="">▼Frame the QR code with your smartphone to turn on the experience.▼</p>':"JP"==$("#pano").attr("data-lang")&&(o+='<p class="">▼スキャンしたら、クリックしてARを体験しよう▼</p>'),o+='<img class="qrcode_image" src="./images/ar/'+e[a].qrcode+'">                <img class="close_image" src="./images/icon/Icon_Close.png">',$(n).addClass("pos-a ta-c DeskDiv").html(o).appendTo($(t)),$(".close_image").click(function(){$("#modelwindow").remove()})}}),$(o).append($(d)),$(n).append($(o)),$(t).append($(n))}function G_Btn(t,e,a){let n=document.createElement("DIV");$(n).addClass("d-flex flex-column ProductBtn");let o=document.createElement("IMG");$(o).attr("src","./images/icon/Icon_Catalog.png");let d=document.createElement("P");"TC"==$("#pano").attr("data-lang")?$(d).html("線上型錄"):"EN"==$("#pano").attr("data-lang")?$(d).html("Brochure"):"JP"==$("#pano").attr("data-lang")&&$(d).html("カタログ"),$(n).click(function(){window.open(e[a]["P-Catalog"])}).append($(o),$(d));let l=document.createElement("DIV");$(l).addClass("d-flex flex-column ProductBtn");let c=document.createElement("IMG");$(c).attr("src","./images/icon/Icon_Info.png");let r=document.createElement("P");"TC"==$("#pano").attr("data-lang")?$(r).html("更多資訊"):"EN"==$("#pano").attr("data-lang")?$(r).html("More Info"):"JP"==$("#pano").attr("data-lang")&&$(r).html("詳細"),$(l).click(function(){window.open(e[a]["P-Info"])}).append($(c),$(r));let s=document.createElement("DIV");$(s).addClass("d-flex flex-column ProductBtn");let i=document.createElement("IMG");$(i).attr("src","./images/icon/Icon_Contact.png");let m=document.createElement("P");"TC"==$("#pano").attr("data-lang")?($(m).html("聯絡我們"),$(s).click(function(){window.open("https://walruspump.com/zh-tw/contact/index.html")}).append($(i),$(m))):"EN"==$("#pano").attr("data-lang")?($(m).html("Contact Us"),$(s).click(function(){window.open("https://walruspump.com/en-global/contact/index.html")}).append($(i),$(m))):"JP"==$("#pano").attr("data-lang")&&($(m).html("お問い合わせ"),$(s).click(function(){window.open("https://walruspump.com/en-global/contact/index.html")}).append($(i),$(m))),e[a]["P-Catalog"].length>0&&$(t).append($(n)),e[a]["P-Info"].length>0&&$(t).append($(l)),$(t).append($(s))}function G_Mid(t,e,a){let n=document.createElement("P");$(n).addClass("ContentSeries mg-0 fs-1d5 fw-7").html(e[a].Series).css({"padding-left":"2rem","padding-right":"2rem"});let o=document.createElement("P");$(o).addClass("fs-1d25 fw-7").html(e[a]["P-Name"]).css({"padding-left":"2.5rem","padding-right":"2rem"});let d=document.createElement("UL");$(d).css({"padding-left":"3.6rem","padding-right":"2rem"}),e[a].Features.forEach(t=>{let e=document.createElement("LI");$(e).html(t).appendTo($(d))}),$(t).append($(n),$(o),$(d))}function G_Video(t,e,a){e[a]["P-Video"].forEach(e=>{let a=document.createElement("DIV");$(a).addClass("pos-r col-10 h-25 VideoContent").attr("data-content",e).click(function(){G_VideoPlay(e)});let n=document.createElement("IMG");$(n).addClass("w-100").attr("src","https://img.youtube.com/vi/"+e+"/sddefault.jpg");let o=document.createElement("IMG");$(o).addClass("pos-a VideoBtn").attr("src","./images/icon/Video.png"),$(a).append($(n),$(o)),$(t).append($(a))})}function G_Bot(t,e,a){let n=document.createElement("P");$(n).addClass("fw-7").css({color:"#00428E"}),"TC"==$("#pano").attr("data-lang")?$(n).html("適用產業範圍"):"EN"==$("#pano").attr("data-lang")?$(n).html("Application"):"JP"==$("#pano").attr("data-lang")&&$(n).html("該当する業界の範囲"),$(t).append($(n));for(let n=1;n<=7;n++){let o=document.createElement("DIV"),d=document.createElement("IMG"),l=document.createElement("P");$("#PageContent").outerWidth()>400?($(o).addClass("col-6 d-flex flex-column text-center").css({"margin-bottom":"1.25rem"}),$(d).css({width:"3rem",height:"3rem",display:"block",margin:"auto"})):$(o).addClass("col-12 d-flex flex-row").css({"margin-bottom":"1.25rem"}),$(d).addClass("IndustryImg"),$("#PageContent").outerWidth()>400?$(l).addClass("align-content-center fw-7").css({height:"2.5rem","font-size":"15px",margin:"10px 0"}):$(l).addClass("fw-7").css({"font-size":"12px",margin:"15px"}),"TC"==$("#pano").attr("data-lang")?$(l).html(IndustryType[n-1]):"EN"==$("#pano").attr("data-lang")?$(l).html(IndustryType_EN[n-1]):$(l).html(IndustryType_JP[n-1]);for(let t=0;t<e[a]["P-Industry"].length;t++){if(n==e[a]["P-Industry"][t]){$(d).attr("src","./images/icon/Use_"+n+".png"),$(l).css("color","#00428E");break}$(d).attr("src","./images/icon/Use_"+n+"N.png"),$(l).css("color","#9E9E9E")}$(o).append($(d),$(l)),$(t).append($(o))}}function G_VideoPlay(t){let e=document.createElement("DIV");$(e).css({position:"absolute",top:"0","background-color":"#000",width:"100vw",height:"100vh",height:"var(--vh)","z-index":"150"}).appendTo("#pano");let a=document.createElement("IFRAME");$(a).addClass("VideoPlayer").attr("frameborder","0").attr("allowfullscreen","1").attr("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;").attr("src","https://www.youtube.com/embed/"+t+"?&autoplay=1").appendTo($(e));let n=document.createElement("IMG");$(n).addClass("pos-a t-0 r-0 cur-p").attr("src","./images/icon/Icon_Close.png").css({width:"6rem",padding:"0","z-index":"10"}).click(function(){$(e).remove()}).appendTo($(e))}window.onload=function(){$("#pano").attr("data-lang","TC");let t=window.location.href,e=t.indexOf("#"),a=t.substring(e+1,t.length-3),n=t.substring(t.length-2,t.length);$("#pano").attr("data-lang",n),Data(a)};