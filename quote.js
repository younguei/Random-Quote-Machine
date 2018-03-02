var webColor = [
	'#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"
]
function RandomNumBoth(Min,Max){
      var Range = Max - Min;
      var Rand = Math.random();
      var num = Min + Math.round(Rand * Range); //四舍五入
      return num;
}

$(document).ready(function(){
	$(".btn-default").css({"color":"#FFFFFF",'backgroundColor':'rgb(231, 76, 60)'});
	var content = "";
	var author = "";
	$.getJSON("https://sslapi.hitokoto.cn/",function(json,c){
		console.log(json);
		content = json['hitokoto'];
		author = json['creator'];
		$(".panel-body>span.quote").text(json['hitokoto']);
		$(".panel-body .author").text(json['creator']);
		$(".panel-body").css({"padding":'30px',"paddingBottom":"20px"});
		$(".panel-body>span.quote").css("fontSize",'25px');
	})
	$(".container").css("height",$(window).height());
	$(".container>.quote").css("marginTop",$(".container").height()/4);
	$(".container>.quote").css("marginLeft",$(".container").width()/2-$(".container>.quote").width()/2);
	$("#changeBtn").click(function(){
		$.getJSON("https://sslapi.hitokoto.cn/",function(json,c){
			$(".panel-body>span.quote").text(json['hitokoto']);
			$(".panel-body .author").text(json['creator']);
		});
		var random = RandomNumBoth(0,webColor.length);
		console.log(random);
		$(".btn-default").css({'backgroundColor':webColor[random]});
		$('body').css({'color':webColor[random],'backgroundColor':webColor[random]});
	});
	$("#shareQQ").click(function(){
		window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://www.baidu.com&desc='+content+'——'+author+'&title=吟游佳句&summary=我发现了一句很漂亮的话，快来看看吧&pics=&site=bshare');
	});
	$("#shareWeibo").click(function(){
		window.open('http://service.weibo.com/share/share.php?url=&title='+content+'------'+author);
	})
})