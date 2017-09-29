	/*首页菜单下面的横线动画*/
	$('.menu a').hover(function(){
		// var onoff=true;
		$(this).next('span').stop().animate({'width':'100px','display':'block'},200);
		
	},function (){
		$('.menu li span').stop().animate({'width':'0'},200);
	});
	


// 上面的log搜索区域显示问题
//<!-- //给浏览器添加滚动条 -->
$(window).scroll(function(){
		var t = $(document).scrollTop();
		if(t>90){
			//让导航条固定定位
			$('#hide_log_search').stop(true).animate({'marginTop':'0px'},500);
		}
		else{
			$('#hide_log_search').stop(true).animate({'marginTop':'-105px'},500);
		}
	})




// 关于xxxxx  about  xxxx页面
$(function(){
	$('.about_option .lied').css({"color":"#000"});
	$('.about_option li').click(function(){
		$(this).next('ul').slideDown(200).siblings('ul').slideUp(200);
		$(this).next('ul').prev('li').css('color','#000').siblings('li').css('color','#A59999');
	});

$('.about_option ul a').click(function(){
	$(this).addClass('aed').siblings('a').removeClass('aed');
})


})
































