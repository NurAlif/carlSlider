// JavaScript Document



$(document).ready(function(){
	var gbr1 = $("#gbr-1");
	var gbr2 = $("#gbr-2");
	var gbr3 = $("#gbr-3");
	var gbr4 = $("#gbr-4");
	var gbr5 = $("#gbr-5");
	var gbr6 = $("#gbr-6");
	
	var tgb1 = $("#t-gbr-1");
	var tgb2 = $("#t-gbr-2");
	var tgb3 = $("#t-gbr-3");
	var tgb4 = $("#t-gbr-4");
	var tgb5 = $("#t-gbr-5");
	var tgb6 = $("#t-gbr-6");
	
	var cont = $('#cont');
	
	var sect = 1;
	
	
	var trans = function(pictDelta,p0,p1,p2,p3,p4){
		pictDelta.show();
		pictDelta.css("height", "60px");
		pictDelta.css("width", "1px");
		pictDelta.animate({width: "750px",},"slow");
		pictDelta.animate({height: "420px",},"slow");
		p0.hide();
		p1.hide();
		p2.hide();
		p3.hide();
		p4.hide();
		
		};
		
		
	gbr1.css("width", "750px"); gbr1.css("height", "420px");
	gbr2.css("width", "750px"); gbr2.css("height", "420px");
	gbr3.css("width", "750px"); gbr3.css("height", "420px");
	gbr4.css("width", "750px"); gbr4.css("height", "420px");
	gbr5.css("width", "750px"); gbr5.css("height", "420px");
	gbr6.css("width", "750px"); gbr6.css("height", "420px");
	
	gbr2.hide();
	gbr3.hide();
	gbr4.hide();
	gbr5.hide();
	gbr6.hide();
	
	tgb1.css("width", "100px"); tgb1.css("height", "60px");
	tgb2.css("width", "100px"); tgb2.css("height", "60px");
	tgb3.css("width", "100px"); tgb3.css("height", "60px");
	tgb4.css("width", "100px"); tgb4.css("height", "60px");
	tgb5.css("width", "100px"); tgb5.css("height", "60px");
	tgb6.css("width", "100px"); tgb6.css("height", "60px");
	
		
		
    tgb1.click(function(){
		cont.css("background-image", "url(gamabr/ny" + sect + ".jpg)");
       trans(gbr1,gbr2,gbr3,gbr4,gbr5,gbr6);
	   sect = 1;
    });
	tgb2.click(function(){
		cont.css("background-image", "url(gamabr/ny" + sect + ".jpg)");
       trans(gbr2,gbr1,gbr3,gbr4,gbr5,gbr6);
	   sect = 2;
    });
	tgb3.click(function(){
		cont.css("background-image", "url(gamabr/ny" + sect + ".jpg)");
       trans(gbr3,gbr2,gbr1,gbr4,gbr5,gbr6);
	   sect = 3;
    });
	tgb4.click(function(){
		cont.css("background-image", "url(gamabr/ny" + sect + ".jpg)");
       trans(gbr4,gbr2,gbr3,gbr1,gbr5,gbr6);
	   sect = 4;
    });
	tgb5.click(function(){
		cont.css("background-image", "url(gamabr/ny" + sect + ".jpg)");
       trans(gbr5,gbr2,gbr3,gbr4,gbr1,gbr6);
	   sect = 5;
    });
	tgb6.click(function(){
		cont.css("background-image", "url(gamabr/ny" + sect + ".jpg)");
       trans(gbr6,gbr2,gbr3,gbr4,gbr5,gbr1);
	   sect = 6;
    });
});