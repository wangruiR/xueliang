$(function(){
	/*trends*/

	var hei=$(".trends").find(".trendsBd").find("li").length*27;
	var list=$(".trends").find(".trendsBd").children("ul").html();
	if(hei>162){
		$(".trends").find(".trendsBd").children("ul").append(list);
		var tp=0;
		var si=setInterval(scroll,50);
		function scroll(){
			tp--;
			$(".trends").find(".trendsBd").children("ul").css("top",tp + "px");
			if(tp<=-hei){
				tp=0;
			}
		}
		$(".trends").find(".trendsBd").hover(function(){
			clearInterval(si);
		},function(){
			si=setInterval(scroll,50);
		})
	}

	/*trends end*/


	/*linkage*/

	$(".linkageBd").find("li").each(function(){
		var max=0;
		for (var i = 0; i < $(this).parents(".linkageBd").find("li").length; i++) {
			if (max < parseInt($(this).parents(".linkageBd").find("li").eq(i).children(".lcCont").find("em").text())) {
				max=parseInt($(this).parents(".linkageBd").find("li").eq(i).children(".lcCont").find("em").text());
			}
		}
		$(this).children(".lcCont").find("span").width(parseInt($(this).children(".lcCont").find("em").text())/(1.1*max)*290)
	})
	var nowDate=new Date();
	$(".linkage").find(".linkageHd").children(".lcCont").text(nowDate.getMonth() + "月办理数");
	$(".linkage").on("click",".switch",function(){
		$(".linkageCont").find(".selected").removeClass("selected").siblings(".linkageBd").addClass("selected");
	})
	/*linkage end*/


	

	/*originate end*/


	/*action*/

	$(".population").find(".action").active([
			[
				[[0,0],[0,20],[98,20],[98,42]]
			],
			[
				[[216,0],[216,20],[108,20],[108,42]]
			]
		]);
	$(".house").find(".action").active([
			[
				[[0,2],[56,2]]
			]
		]);
	$(".dataLink").find(".action").active([
			[
				[[2,0],[2,18],[128,18],[128,78]],
				[[2,0],[2,18],[154,21],[154,78]]
			],
			[
				[[353,0],[353,18],[242,18],[242,78]],
				[[353,0],[353,18],[212,18],[212,78]]
			],
		]);
	/*action end*/

	/*linkMove*/
	var i=1;
	$(".linkMove").find(".box").hide().eq(0).show();
	setInterval(function(){
		$(".linkMove").find(".box").eq(i).fadeIn(450);
		i++;
		if(i==5){
			i=1;
			$(".linkMove").find(".box").hide().eq(0).show();
		}
	},450)

	/*linkMove end*/

	/*map*/
	$(".map").find(".mapTabHd").on("click","li",function(){
		var index=$(this).index();
		$(this).addClass("selected").siblings().removeClass("selected");
		$(".mapTabBd").find(".mapTabBox").eq(index).addClass("selected").siblings().removeClass("selected");		
	})
	/*map end*/

	//兼容不同分辨率
	layOut();
	//兼容不同分辨率结束
})
var layOut=function (){
	var x=$("body").width()/1920;
	var y=$("body").height()/1080;
	$(".wraper").css("transform","scale(" + x + "," + y + ")");
}
$(window).resize(function(){
	layOut();
});
$.fn.active=function(option){
	var ts=$(this);
	var si=setInterval(function(){
		var index=parseInt(option[0].length*Math.random());
		var len=new Array();
		for (var i = 0; i < option.length; i++) {
			ts.append("<div class='circle circle" + i + "'></div>");
			len[i]=ts.find(".circle" + i).length;
			if(len[i]>50){
				ts.find(".circle" + i).eq(0).remove();
				len[i]--;
			}
			ts.find(".circle" + i).eq(len[i]-1).css({"left":option[i][index][0][0] + "px","top":option[i][index][0][1] + "px"});
			for (var j = 1; j < option[i][index].length; j++) {
				ts.find(".circle" + i).eq(len[i]-1).animate({"left":option[i][index][j][0] + "px","top":option[i][index][j][1] + "px"},3000);
			}
		}
	},1000)
}










