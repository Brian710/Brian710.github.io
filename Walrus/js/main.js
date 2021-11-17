const MenuButton=["大廳","營造工程類","製造業","科技業","批發零售業","農/漁業","服務/住宿餐飲業","客製化"],MenuButton_EN=["Lobby","Construction","Manufacturing","Technology","Wholesale/Retail Trade","Agriculture/Fisheries","Service/Hospitality","WALRUS FIT"],MenuButton_JP=["ロビー","建設工事類","製造業","テクノロジー産業","卸売/小売業","農業/漁業","サービス/宿泊/飲食業","カスタマイズ"],audio="WALRUS_Music.m4a";let _home_text,_construction_text,_manufacturing_text,_tech_text,_retail_text,_fishing_text,_food_text,_fit_text,pano;var loaded=!1;let timer=new Timer(function(){$("#WaveAnim").removeClass("Wave").hide(),$("#CanvasDiv").remove(),timer.stop()},3e3);function Init(){let e=window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`),embedpano({swf:"tour.swf",xml:"tour.xml",target:"pano",html5:"auto",mobilescale:1,passQueryParameters:!0}),pano=parent.window.document.getElementById("WALRUS"),loaded||(G_WelcomeCan(),$("#pano").attr("data-lang","TC").attr("data-sound","on"),G_Audio(),G_Canvas(),loaded=!0,timer.stop()),Menu()}$(window).resize(function(){CheckDevice()&&90==Math.abs(window.orientation)?$("html").css({transform:"rotate(-90deg)","transform-origin":"left top",width:"100vh",height:"100vw","overflow-x":"hidden",position:"absolute",top:"100%",left:"0"}):$("html").css({transform:"","transform-origin":"",width:"",height:"","overflow-x":"",position:"",top:"",left:""})}),Init();var _polymorph=anime({targets:".morph",d:[{value:"M32.4999 1.49994C45.4999 3.99987 51.9999 7.50007 59.9999 18C67.1557 27.3919 64.9999 44.9999 59.9999 54.9999C54.9999 64.9999 35 92.4999 21.4999 76.0001C6.4046 57.5505 -1.96726 59.6392 1.99988 38C7.49982 7.9999 15.7768 -1.71594 32.4999 1.49994Z"},{value:"M34.0227 3.45643C38.4986 5.84602 43.5128 6.54299 48.0879 8.705C58.7677 13.7402 65.085 26.1718 65.0142 37.1525C64.9118 53.0207 53.5878 70.0063 40.085 78.0885C15.1349 91.7739 1.64373 67.5033 0.143971 42.5C-1.39585 16.8289 9.70492 -9.61455 34.0227 3.45643Z"}],easing:"easeOutQuad",duration:5e3,loop:!0});function G_WelcomeCan(){let e=document.createElement("DIV");$(e).addClass("pos-a t-0 w-100 h-100 ClickEmpty").attr("id","CanvasDiv");let t=document.createElement("IMG");$(t).addClass("pos-r WelcomeLogo").attr("src","./images/transitions/WALRUS_Start.svg").appendTo($(e));let n=document.createElement("IMG");$(n).addClass("pos-a CanvasSwirl CanvasSwirl_1").attr("src","./images/transitions/Start_Bgc.png").appendTo($(e));let o=document.createElement("IMG");$(o).addClass("pos-a CanvasSwirl CanvasSwirl_2").attr("src","./images/transitions/Start_Bgc.png").appendTo($(e)),$(e).click(function(){$("#AudioPlayer")[0].play(),$(e).remove()}).appendTo($("#pano"))}function G_Audio(){let e=document.createElement("audio"),t=document.createElement("source");$(t).attr("src","./data/audio/"+audio),$(t).attr("type","audio/mp4"),$(e).attr("id","AudioPlayer").append($(t)),$(e)[0].loop=!0,$("#pano").append($(e))}function Menu(){let e=document.createElement("DIV");$(e).addClass("pos-a t-0 MenuContainer").attr("id","MenuContainer").appendTo("#pano");let t=document.createElement("DIV");$(t).addClass("pos-r cur-p MenuBtn").html('<svg width="50" height="63" viewBox="0 0 65 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="morph" d="M34.0227 3.45643C38.4986 5.84602 43.5128 6.54299 48.0879 8.705C58.7677 13.7402 65.085 26.1718 65.0142 37.1525C64.9118 53.0207 53.5878 70.0063 40.085 78.0885C15.1349 91.7739 1.64373 67.5033 0.143971 42.5C-1.39585 16.8289 9.70492 -9.61455 34.0227 3.45643Z" fill="#00428E"/></svg>').click(function(){$("#MenuBGC").length?Close_Menu():G_Menu(e)});let n=document.createElement("IMG");$(n).addClass("pos-a display-auto mg-auto").attr("src","./images/menu/Icon_Menu_List.png").appendTo($(t)),$(e).append($(t))}function G_Menu(e){let t=document.createElement("DIV");$(t).addClass("pos-r MenuBgcDiv").attr("id","MenuBGC");let n=document.createElement("DIV");$(n).addClass("pos-a MenuBgc Rollin-left");let o=document.createElement("DIV");$(o).addClass("pos-a MenuContent").attr("id","MenuContent");let a=document.createElement("DIV");$(a).addClass("pos-r d-flex flex-row justify-content-between MenuBtnList SceneBtnAni").appendTo($(o)),G_MenuBtnList(a);let l=document.createElement("DIV");$(l).addClass("pos-r d-flex flex-column MenuSceneBtn").css({"margin-left":"3rem"}).appendTo($(o)),G_MenuScenesBtnList(l);let s=document.createElement("IMG");$(s).addClass("MenuLogo SceneBtnAni").attr("id","MenuLogo").attr("src","./images/menu/Icon_IP.png");let r=document.createElement("IMG");$(r).addClass("JCIT SceneBtnAni").attr("id","JCIT").attr("src","./images/icon/JCIT_Menu.png").click(function(){console.log("sdfsdf"),window.open("https://jcit.com.tw/")}),$(t).append($(n),$(s),$(r)),$(e).append($(t),$(o))}function G_MenuBtnList(e){let t=document.createElement("DIV"),n=document.createElement("P");$(n).html("繁");let o=document.createElement("DIV"),a=document.createElement("P");$(a).html("En");let l=document.createElement("DIV"),s=document.createElement("P");$(s).html("日");let r=document.createElement("DIV"),c=document.createElement("IMG");$(c).addClass("SoundBtn").attr("src","./images/menu/Btn_Video_On.png"),$(r).addClass("pos-r MenuBtnListDIV").click(function(){"off"==$("#pano").attr("data-sound")?($("#pano").attr("data-sound","on"),$(c).attr("src","./images/menu/Btn_Video_On.png"),$("#AudioPlayer")[0].play()):($("#pano").attr("data-sound","off"),$(c).attr("src","./images/menu/Btn_Video_Of.png"),$("#AudioPlayer")[0].pause())}).append($(c)),$(t).addClass("pos-r MenuBtnListDIV").click(function(){$("#pano").attr("data-lang","TC"),$(n).css("color","#FFD900"),$(a).css("color","#FFFFFF"),$(s).css("color","#FFFFFF"),ChangeMenuTextLang()}).mouseover(function(){$(n).css("color","#FFD900")}).mouseout(function(){"TC"!=$("#pano").attr("data-lang")&&$(n).css("color","#FFFFFF")}).append($(n)),"TC"==$("#pano").attr("data-lang")&&$(n).css("color","#FFD900"),$(o).addClass("pos-r MenuBtnListDIV").click(function(){$("#pano").attr("data-lang","EN"),$(n).css("color","#FFFFFF"),$(a).css("color","#FFD900"),$(s).css("color","#FFFFFF"),ChangeMenuTextLang()}).mouseover(function(){$(a).css("color","#FFD900")}).mouseout(function(){"EN"!=$("#pano").attr("data-lang")&&$(a).css("color","#FFFFFF")}).append($(a)),"EN"==$("#pano").attr("data-lang")&&$(a).css("color","#FFD900"),$(l).addClass("pos-r MenuBtnListDIV").click(function(){$("#pano").attr("data-lang","JP"),$(n).css("color","#FFFFFF"),$(a).css("color","#FFFFFF"),$(s).css("color","#FFD900"),ChangeMenuTextLang()}).mouseover(function(){$(s).css("color","#FFD900")}).mouseout(function(){"JP"!=$("#pano").attr("data-lang")&&$(s).css("color","#FFFFFF")}).append($(s)),"JP"==$("#pano").attr("data-lang")&&$(s).css("color","#FFD900"),$(e).append($(t),$(o),$(l),$(r))}function G_MenuScenesBtnList(e){let t=document.createElement("DIV");$(t).addClass("cur-p d-flex flex-row justify-content-start align-content-center MenuScenesBtnDiv SceneBtnAni");let n=document.createElement("IMG");$(n).attr("src","./images/menu/Home.png"),_home_text=document.createElement("P");let o=document.createElement("DIV");$(o).addClass("pos-a MenuBtnLine"),$(t).click(function(){G_WaveCanvas(),Close_Menu(),pano.call("loadscene(scene_0000,null,MERGE,BLEND(0.5));")}).mouseover(function(){$(n).hide(),$(_home_text).removeClass("text-roll-right-out").addClass("text-roll-left-in").css({color:"#00428E"}),$(o).removeClass("line-roll-right-out").addClass("line-roll-right-in")}).mouseout(function(){$(n).show(),$(_home_text).removeClass("text-roll-left-in").addClass("text-roll-right-out").css({color:"#545454"}),$(o).removeClass("line-roll-right-in").addClass("line-roll-right-out")}).append($(n),$(_home_text),$(o));let a=document.createElement("DIV");$(a).addClass("cur-p d-flex flex-row justify-content-start align-content-center MenuScenesBtnDiv SceneBtnAni");let l=document.createElement("IMG");$(l).attr("src","./images/icon/Use_1.png"),_construction_text=document.createElement("P");let s=document.createElement("DIV");$(s).addClass("pos-a MenuBtnLine"),$(a).click(function(){G_WaveCanvas(),Close_Menu(),pano.call("loadscene(scene_0007,null,MERGE,BLEND(0.5));")}).mouseover(function(){$(l).hide(),$(_construction_text).removeClass("text-roll-right-out").addClass("text-roll-left-in").css({color:"#00428E"}),$(s).removeClass("line-roll-right-out").addClass("line-roll-right-in")}).mouseout(function(){$(l).show(),$(_construction_text).removeClass("text-roll-left-in").addClass("text-roll-right-out").css({color:"#545454"}),$(s).removeClass("line-roll-right-in").addClass("line-roll-right-out")}).append($(l),$(_construction_text),$(s));let r=document.createElement("DIV");$(r).addClass("cur-p d-flex flex-row justify-content-start align-content-center MenuScenesBtnDiv SceneBtnAni");let c=document.createElement("IMG");$(c).attr("src","./images/icon/Use_3.png"),_manufacturing_text=document.createElement("P");let i=document.createElement("DIV");$(i).addClass("pos-a MenuBtnLine"),$(r).click(function(){G_WaveCanvas(),Close_Menu(),pano.call("loadscene(scene_0009,null,MERGE,BLEND(0.5));")}).mouseover(function(){$(c).hide(),$(_manufacturing_text).removeClass("text-roll-right-out").addClass("text-roll-left-in").css({color:"#00428E"}),$(i).removeClass("line-roll-right-out").addClass("line-roll-right-in")}).mouseout(function(){$(c).show(),$(_manufacturing_text).removeClass("text-roll-left-in").addClass("text-roll-right-out").css({color:"#545454"}),$(i).removeClass("line-roll-right-in").addClass("line-roll-right-out")}).append($(c),$(_manufacturing_text),$(i));let u=document.createElement("DIV");$(u).addClass("cur-p d-flex flex-row justify-content-start align-content-center MenuScenesBtnDiv SceneBtnAni");let d=document.createElement("IMG");$(d).attr("src","./images/icon/Use_5.png"),_tech_text=document.createElement("P");let m=document.createElement("DIV");$(m).addClass("pos-a MenuBtnLine"),$(u).click(function(){G_WaveCanvas(),Close_Menu(),pano.call("loadscene(scene_0011,null,MERGE,BLEND(0.5));")}).mouseover(function(){$(d).hide(),$(_tech_text).removeClass("text-roll-right-out").addClass("text-roll-left-in").css({color:"#00428E"}),$(m).removeClass("line-roll-right-out").addClass("line-roll-right-in")}).mouseout(function(){$(d).show(),$(_tech_text).removeClass("text-roll-left-in").addClass("text-roll-right-out").css({color:"#545454"}),$(m).removeClass("line-roll-right-in").addClass("line-roll-right-out")}).append($(d),$(_tech_text),$(m));let _=document.createElement("DIV");$(_).addClass("cur-p d-flex flex-row justify-content-start align-content-center MenuScenesBtnDiv SceneBtnAni");let C=document.createElement("IMG");$(C).attr("src","./images/icon/Use_4.png"),_retail_text=document.createElement("P");let p=document.createElement("DIV");$(p).addClass("pos-a MenuBtnLine"),$(_).click(function(){G_WaveCanvas(),Close_Menu(),pano.call("loadscene(scene_0013,null,MERGE,BLEND(0.5));")}).mouseover(function(){$(C).hide(),$(_retail_text).removeClass("text-roll-right-out").addClass("text-roll-left-in").css({color:"#00428E"}),$(p).removeClass("line-roll-right-out").addClass("line-roll-right-in")}).mouseout(function(){$(C).show(),$(_retail_text).removeClass("text-roll-left-in").addClass("text-roll-right-out").css({color:"#545454"}),$(p).removeClass("line-roll-right-in").addClass("line-roll-right-out")}).append($(C),$(_retail_text),$(p));let g=document.createElement("DIV");$(g).addClass("cur-p d-flex flex-row justify-content-start align-content-center MenuScenesBtnDiv SceneBtnAni");let h=document.createElement("IMG");$(h).attr("src","./images/icon/Use_2.png"),_fishing_text=document.createElement("P");let f=document.createElement("DIV");$(f).addClass("pos-a MenuBtnLine"),$(g).click(function(){G_WaveCanvas(),Close_Menu(),pano.call("loadscene(scene_0015,null,MERGE,BLEND(0.5));")}).mouseover(function(){$(h).hide(),$(_fishing_text).removeClass("text-roll-right-out").addClass("text-roll-left-in").css({color:"#00428E"}),$(f).removeClass("line-roll-right-out").addClass("line-roll-right-in")}).mouseout(function(){$(h).show(),$(_fishing_text).removeClass("text-roll-left-in").addClass("text-roll-right-out").css({color:"#545454"}),$(f).removeClass("line-roll-right-in").addClass("line-roll-right-out")}).append($(h),$(_fishing_text),$(f));let x=document.createElement("DIV");$(x).addClass("cur-p d-flex flex-row justify-content-start align-content-center MenuScenesBtnDiv SceneBtnAni");let v=document.createElement("IMG");$(v).attr("src","./images/icon/Use_7.png"),_food_text=document.createElement("P");let M=document.createElement("DIV");$(M).addClass("pos-a MenuBtnLine"),$(x).click(function(){G_WaveCanvas(),Close_Menu(),pano.call("loadscene(scene_0017,null,MERGE,BLEND(0.5));")}).mouseover(function(){$(v).hide(),$(_food_text).removeClass("text-roll-right-out").addClass("text-roll-left-in").css({color:"#00428E"}),$(M).removeClass("line-roll-right-out").addClass("line-roll-right-in")}).mouseout(function(){$(v).show(),$(_food_text).removeClass("text-roll-left-in").addClass("text-roll-right-out").css({color:"#545454"}),$(M).removeClass("line-roll-right-in").addClass("line-roll-right-out")}).append($(v),$(_food_text),$(M));let E=document.createElement("DIV");$(E).addClass("cur-p d-flex flex-row justify-content-start align-content-center MenuScenesBtnDiv SceneBtnAni");let B=document.createElement("IMG");$(B).attr("src","./images/menu/Use_8.png"),_fit_text=document.createElement("P");let F=document.createElement("DIV");$(F).addClass("pos-a MenuBtnLine"),$(E).click(function(){G_WaveCanvas(),Close_Menu(),pano.call("loadscene(scene_0019,null,MERGE,BLEND(0.5));")}).mouseover(function(){$(B).hide(),$(_fit_text).removeClass("text-roll-right-out").addClass("text-roll-left-in").css({color:"#00428E"}),$(F).removeClass("line-roll-right-out").addClass("line-roll-right-in")}).mouseout(function(){$(B).show(),$(_fit_text).removeClass("text-roll-left-in").addClass("text-roll-right-out").css({color:"#545454"}),$(F).removeClass("line-roll-right-in").addClass("line-roll-right-out")}).append($(B),$(_fit_text),$(F)),ChangeMenuTextLang(),$(e).append($(t),$(a),$(r),$(u),$(_),$(g),$(x),$(E))}function ChangeMenuTextLang(){"TC"==$("#pano").attr("data-lang")?($(_home_text).html(MenuButton[0]),$(_construction_text).html(MenuButton[1]),$(_manufacturing_text).html(MenuButton[2]),$(_tech_text).html(MenuButton[3]),$(_retail_text).html(MenuButton[4]),$(_fishing_text).html(MenuButton[5]),$(_food_text).html(MenuButton[6]),$(_fit_text).html(MenuButton[7])):"EN"==$("#pano").attr("data-lang")?($(_home_text).html(MenuButton_EN[0]),$(_construction_text).html(MenuButton_EN[1]),$(_manufacturing_text).html(MenuButton_EN[2]),$(_tech_text).html(MenuButton_EN[3]),$(_retail_text).html(MenuButton_EN[4]),$(_fishing_text).html(MenuButton_EN[5]),$(_food_text).html(MenuButton_EN[6]),$(_fit_text).html(MenuButton_EN[7])):"JP"==$("#pano").attr("data-lang")&&($(_home_text).html(MenuButton_JP[0]),$(_construction_text).html(MenuButton_JP[1]),$(_manufacturing_text).html(MenuButton_JP[2]),$(_tech_text).html(MenuButton_JP[3]),$(_retail_text).html(MenuButton_JP[4]),$(_fishing_text).html(MenuButton_JP[5]),$(_food_text).html(MenuButton_JP[6]),$(_fit_text).html(MenuButton_JP[7]))}function CheckDevice(){var e=navigator.userAgent,t=navigator.userAgent.toLowerCase(),n=e.indexOf("Line")>-1,o=e.indexOf("Instagram")>-1,a=e.indexOf("FBAV")>-1,l="micromessenger"==t.match(/MicroMessenger/i),s="qq"==t.match(/QQ/i),r="weibo"==t.match(/WeiBo/i);return n||o||a||l||s||r?($("#ProductImg").attr("data-d","inAPP"),!0):/(iPhone|iPad|iPod|iOS&&!safari)/i.test(t)?($("#ProductImg").attr("data-d","iOS"),!0):/(Android)/i.test(t)?($("#ProductImg").attr("data-d","Android"),!0):($("#ProductImg").attr("data-d","Desktop"),!1)}function G_Canvas(){let e=document.createElement("DIV");$(e).addClass("pos-a t-0 w-100 h-100 canvas-wrap").attr("id","WaveAnim").appendTo("#pano");let t=document.createElement("canvas");$(t).attr("id","canvas").appendTo($(e));let n=document.createElement("DIV");$(n).addClass("canvas-bgc").appendTo($(e)),$("#WaveAnim").removeClass("Wave").hide()}function G_WaveCanvas(){let e=document.createElement("DIV");$(e).addClass("pos-a t-0 w-100 h-100").attr("id","CanvasDiv");let t=document.createElement("IMG");$(t).addClass("pos-r CanvasLogo").attr("src","./images/transitions/WALRUS_Scence.svg").appendTo($(e)),$("#pano").append($(e)),$("#WaveAnim").addClass("Wave").show(),timer.start()}function Close_Menu(){setTimeout(function(){$("#MenuBGC").remove(),$("#MenuContent").remove()},300),$("#MenuBGC").removeClass("Rollin-left").addClass("Rollout-left"),$(".SceneBtnAni").removeClass("SceneBtnAni").addClass("SceneBtnAni-Out"),$("#MenuLogo").hide(),$("#JCIT").hide()}function Timer(e,t){var n=setInterval(e,t);this.stop=function(){return n&&(clearInterval(n),n=null),this},this.start=function(){return n||(this.stop(),n=setInterval(e,t)),this},this.reset=function(e=t){return t=e,this.stop().start()}}