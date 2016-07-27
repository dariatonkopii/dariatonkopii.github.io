(function( $ ) {
var timer1;
var timer_pre_load1;
var timer_pre_load2;
var pre_load=false;
var allImgToLoad=Array(
	Array(false,"img/BACKGROUND1-min.png"),
	Array(false,"img/BACKGROUND_Circles-min.png"),
	Array(false,"img/box3BXInImg-1.png"),
	Array(false,"img/box3BXInImg-2.png"),
	Array(false,"img/box3BXInImg-3.png"),
	Array(false,"img/fon-5.png"),
	Array(false,"img/fon-5-phone.png"),
	Array(false,"img/ico-num-1.png"),
	Array(false,"img/ico-num-2.png"),
	Array(false,"img/ico-num-3.png"),
	Array(false,"img/ico-num-4.png"),
	Array(false,"img/logo.png"),
	Array(false,"img/logo-bar.png"),
	Array(false,"img/logo-bub.png"),
	Array(false,"img/logo-fon.png"),
	Array(false,"img/more-str.png"),
	Array(false,"img/phone.png"),
	Array(false,"img/phone-2.png"),
	Array(false,"img/skin-ico-1.png"),
	Array(false,"img/skin-ico-2.png"),
	Array(false,"img/skin-ico-3.png"),
	Array(false,"img/skin-ico-4.png"),
	Array(false,"img/soc-ico-1.png"),
	Array(false,"img/soc-ico-2.png"),
	Array(false,"img/soc-ico-3.png"),
	Array(false,"img/soc-ico-4.png"),
	Array(false,"img/soc-ico-5.png")
);
$(document).ready(function(){
	loadAllImg();
	setInterval(function(){startAll_ready();},900);
});
/*$(window).scroll(function(){
	start_box2VN1MobyIMG();
	start_headBar();
	start_cheing_box3BXInImg();
	start_loadPhoneAndLogo();
	start_box5Phone();
	start_txt_welcome();
	start_txt_6();
});*/
function startAll_ready(){
	if(pre_load){
		clearInterval(timer_pre_load1);
		$("#loaderGo").remove();
		$("#big").addClass("act");
		$("#scrollPg2 a").on("click",function(){
			$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000); return false;});
		if($("div").is("#box2VN1Moby")){
			$(".box2VN1Per").on("click",function(){clearInterval(timer1); timer1=null; cheing_box2VN1Moby($(this)); return false;});
		}
		if($("div").is("#headBar")){
			$("#headBarForm_send_id1").on("click",function(){cheing_headBarForm_send_id1($(this)); return false;})
		}
		start_box2VN1MobyIMG();
		start_cheing_box3BXInImg();
		start_loadPhoneAndLogo();
		start_box5Phone();
		start_txt_welcome();
		start_txt_6();
		$(window).scroll(function(){
			start_box2VN1MobyIMG();
			start_headBar();
			start_cheing_box3BXInImg();
			start_loadPhoneAndLogo();
			start_box5Phone();
			start_txt_welcome();
			start_txt_6();
		});
	}
}

function loadAllImg(){
	loaderImg(0);
	var interval_load;
	interval_load=setInterval(function(){
		var QQ=true;
		for (var key2 in allImgToLoad){
			if(!allImgToLoad[key2][0]){
				QQ=false;
				break;
			}
		}
		if(QQ){
			pre_load=true;
			clearInterval(interval_load);
		}
		
	},900);
}

function loaderImg(kk){
	if(allImgToLoad.length>kk){
		var pic = new Image();
		pic.src = allImgToLoad[kk][1];
		$(pic).load(function() {
			allImgToLoad[kk][0]=true;
			kk++;
			loaderImg(kk);
		});
	}
}

function cheing_box2VN1Moby(XX){
	if(!XX.hasClass("act")){
		XX.closest("#box2VN1").find(".box2VN1Per.act").removeClass("act");
		XX.addClass("act");
		var srcImg=$("#box2VN1MobyIMG img[data-img='"+XX.attr("href")+"']").attr("src");
		if($("#box2VN1MobySlide .box2VN1MobySlideP.actFirst").length>0){
			$("#box2VN1MobySlide .box2VN1MobySlideP.actFirst").css("background-image", "url("+srcImg+")").addClass("act").removeClass("actFirst");
		}else{
			$("#box2VN1MobySlide .box2VN1MobySlideP:not([class*='act'])").remove();
			$("#box2VN1MobySlide .box2VN1MobySlideP.act").after('<div class="box2VN1MobySlideP actNext"></div>');
			$("#box2VN1MobySlide .box2VN1MobySlideP.actNext").css("background-image", "url("+srcImg+")");
			setTimeout(function(){
				$("#box2VN1MobySlide .box2VN1MobySlideP.act").removeClass("act");
				$("#box2VN1MobySlide .box2VN1MobySlideP.actNext").removeClass("actNext").addClass("act");
			},20);
		}
		/*$("#box2VN1MobyIMG").css("background-size","0px 100%");
		var srcImg=$("#box2VN1MobyIMG img[data-img='"+XX.attr("href")+"']").attr("src");
		setTimeout(function(){$("#box2VN1MobyIMG").css("background-image", "url("+srcImg+")");},400);
		setTimeout(function(){$("#box2VN1MobyIMG").css("background-size","100% 100%");},400);*/
	}
}
function cheing_headBarForm_send_id1(XX){
	$(".headBarForm_inp .headBarForm_inp_inp").css("left","0px");
	XX.css("display","none");
	$("#headBarForm_send_id2").css("display","block");
}
function start_box2VN1MobyIMG(){
	var boxesInWindow=inWindow(".box2LineStart");
	if(boxesInWindow.length>0){
		if($("#box2VN1 .box2VN1Per.act").length==0){
			cheing_box2VN1Moby($("#box2VN1PerNum1"));
		}
		if(!timer1){
			timer1=setInterval(function(){
				var strNum=$("#box2VN1 .box2VN1Per.act").attr("href");
				var numPage=parseInt(strNum.replace(/#num/,""));
				numPage++;
				if(numPage>4){numPage=1;}
				cheing_box2VN1Moby($("#box2VN1PerNum"+numPage));
			},4000);
		}
			
	}else{
		clearInterval(timer1);
		timer1=null;
	}
}
function loadPhoneAndLogo(){
	var LoadFirst=false;
	var LoadLast=false;
	var pic = new Image();
	var interval1;
	pic.src = 'img/phone.png';
	$(pic).load(function() {
		LoadFirst=true;
	});
	var pic2 = new Image();
	pic2.src = 'img/phone.png';
	$(pic2).load(function() {
		LoadLast=true;
	});
	interval1=setInterval(function(){
		if(LoadFirst && LoadLast){
			if(!$("#phone").hasClass("act")){
				$("#phone").addClass("act");
			}else{
				if(!$("#phone_logo").hasClass("act")){
					$("#phone_logo").addClass("act");
				}
				clearInterval(interval1);
			}
		}
	},900);
}
function start_headBar(){
	if(!$("#headBar").hasClass("act")){
		var scrollTop = $(window).scrollTop();
		if(scrollTop>0){
			$("#headBar").addClass("act").slideDown(1000);
		}
	}
}
function start_loadPhoneAndLogo(){
	if(!$("#phone_logo").hasClass("act")){
		var visible_phone_logo=inWindow("#box1LineStart");
		if(visible_phone_logo.length>0){loadPhoneAndLogo();}
	}
}
function start_box5Phone(){
	if(!$("#box5Phone").hasClass("act")){
		var visible_phone_logo=inWindow("#box5LineStart");
		if(visible_phone_logo.length>0){$("#box5Phone").addClass("act");}
	}
}
function start_txt_6(){
	if(!$("#txt_6").hasClass("act")){
		var visible_phone_txt_6=inWindow("#txt_6");
		if(visible_phone_txt_6.length>0){$("#txt_6").addClass("act");}
	}
}
function start_txt_welcome(){
	if(!$("#txt_welcome").hasClass("act")){
		var visible_phone_logo=inWindow("#txt_welcome");
		if(visible_phone_logo.length>0){$("#txt_welcome").addClass("act"); $("#txt_2").addClass("act");}
	}
}
/*function start_cheing_box3BXInImg(){ 3 по очереди
	var visible_box3BXInImg=inWindow(".box3BXInImg:not(.act)");
	var visible_box3BXInImgAll=inWindow(".box3BXInImg");
	var i=0;
	var koef=500;
	visible_box3BXInImg.each(function(){
		i++;
		var tmpObg=$(this);
		setTimeout(function(){tmpObg.addClass("act")},koef*i);
	});
	if(visible_box3BXInImgAll.length==0){$(".box3BXInImg.act").removeClass("act");}
}*/
function start_cheing_box3BXInImg(){
	var visible_box3BXInImg=inWindow(".box3BXInImg:not(.act)");
	var visible_box3BXInImgAll=inWindow(".box3BXInImg");
	var i=0;
	var koef=500;
	visible_box3BXInImg.addClass("act");
	if(visible_box3BXInImgAll.length==0){$(".box3BXInImg.act").removeClass("act");}
}
function inWindow(s){
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var currentEls = $(s);
  var result = [];
  currentEls.each(function(){
    var el = $(this);
    var offset = el.offset();
    if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
      result.push(this);
  });
  return $(result);
}
})(jQuery);