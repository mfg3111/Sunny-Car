		// 顶部登录 和 注册
		$('#denglu').click(function(){
			$('#login_register_box li.login').addClass('sele').siblings('li').removeClass('sele');
			$('#login_register_box .login_box').css('display','block');
			$('#login_register_box .register_box').css('display','none');
			$('#login_register_box,#cover').css('display','block');
		}) 
		$('#zhuce').click(function(){
			$('#login_register_box ,#cover').css('display','block');
			$('#login_register_box li.register').addClass('sele').siblings('li').removeClass('sele');
			$('#login_register_box .login_box').css('display','none');
			$('#login_register_box .register_box').css('display','block');
		})

			// 切换登录
		$('#login_register_box li.login').click(function(){
			$(this).addClass('sele').siblings('li').removeClass('sele');
			$('#login_register_box .login_box').css('display','block');
			$('#login_register_box .register_box').css('display','none');
		})

		//切换注册
		$('#login_register_box li.register').click(function(){
			$(this).addClass('sele').siblings('li').removeClass('sele');
			$('#login_register_box .login_box').css('display','none');
			$('#login_register_box .register_box').css('display','block');
		})

		// 关闭
		$('#login_register_box .close').click(function(){
			$('#login_register_box').css('display','none');
			$('#cover').css('display','none');
		})














		/*首页菜单下面的横线动画*/
	$('.menu a').hover(function(){
		// var onoff=true;
		$(this).next('span').stop().animate({'width':'100px','display':'block'},200);
		
	},function (){
		$('.menu li span').stop().animate({'width':'0'},200);
	});
	





	// 左侧二级下拉菜单
	$('.list_left .pinpai').hover(function (){
		$('.hides').css({'display':'block'});
		$(this).css({'border-color':'red'});
		$('.my_sell_car').css({'border-bottom':'1px solid transparent'});
		$('.price').css({'border-top':'1px solid transparent'});
	},function (){
		$('.hides').css({'display':'none'});
		$(this).css({'border-color':'transparent'});
		$('.my_sell_car').css({'border-bottom':'1px solid #e3e3e3'});
		$('.price').css({'border-top':'1px solid #e3e3e3'});
	});

	$('.slideBox .next,.slideBox .prev').click(function (){
		$(this).css({'background':'rgba(0,0,0,.5)'});
	},function(){
		$(this).css({'background':'0'});
	});




//上面banner图片下面的旋转动画
$('.pro span').hover(function(){
	$(this).next('b').removeClass('act_2').addClass('act_1');
	
},function(){
	$(this).next('b').removeClass('act_1').addClass('act_2');
});






// ~~~~~~~~~~~~~~~~~~~首 页 banner 图 轮 播 开始 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var z;
$('.banner_map dd').mouseenter(function (){
    	z = $(this).index(); 
   times = setTimeout(function (){
   	// alert(223);
		$('.banner_map ul a').eq(z).stop(true,true).fadeIn(1000).siblings('a').stop(true,true).fadeOut();
		$('.banner_map dd').eq(z).addClass('dded').siblings('dd').removeClass('dded');
    },500);
})
    $('.banner_map dd').mouseleave(function (){
	        clearTimeout(timesr);
	})


// 自动轮播
	var z = 0;
var timesr ;

// 先清理定时器，避免重叠
clearInterval(timesr);
	// 自动轮播定时器函数： 
function auto2(){
	z++;
	if(z == 4){
		z = 0;
	}
	$('.banner_map ul a').eq(z).stop(true,true).fadeIn(1000).siblings('a').stop(true,true).fadeOut();
	$('.banner_map dd').eq(z).addClass('dded').siblings('dd').removeClass('dded');
}
// clearInterval(timer);
var timesr = setInterval(auto2,3500);

// 点击左右按钮
$('.banner_map .next').click(function(){
	clearInterval(timesr);
	tt1 = setTimeout(function(){
		z++;
		if(z == 4){
			z = 0;
		}
		$('.banner_map ul a').eq(z).stop(true,true).fadeIn(1000).siblings('a').stop(true,true).fadeOut();
		$('.banner_map dd').eq(z).addClass('dded').siblings('dd').removeClass('dded');
	},500)
})
$('.banner_map .next').mouseleave(function(){
	clearTimeout(tt1);
});

$('.banner_map .prev').click(function(){
	clearInterval(timesr);
	tt1= setTimeout(function(){
		z--;
		if(z <0){
			z = 3;
		}
		$('.banner_map ul a').eq(z).stop(true,true).fadeIn(1000).siblings('a').stop(true,true).fadeOut();
		$('.banner_map dd').eq(z).addClass('dded').siblings('dd').removeClass('dded');
	},500);
})

	$('.banner_map .prev').mouseleave(function(){
		clearTimeout(tt1);
	});






// 移上去的时候
$('.banner_map').mouseenter(function(){
	clearInterval(timesr);	
});
// 移除的时候
$('.banner_map').mouseleave(function(){
	timesr = setInterval(auto2,3500);
});



// ~~~~~~~~~~~~~~~~~~~首 页 banner 图 轮 播 结 束  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~














/*阳光特色鼠标滑入图片移动*/
$('.tese_right_l .a1 ').hover(function(){
	$(this).children('.img_box').stop(true,true).animate({'left':'70px'},300);
},function(){
	$(this).children('.img_box').stop(true,true).animate({'left':'80px'},300);
});


// .a2 + .a3
$('.tese_right_l .a3 , .tese_right_l .a2 ').hover(function(){
	$(this).children('.img_box').stop(true,true).animate({'marginLeft':'-10px'},300);
},function(){
	$(this).children('.img_box').stop(true,true).animate({'marginLeft':'0px'},300);
});



/*右边的图片*/
$('.tese_right_r a').hover(function(){
	$(this).children('.img_box').stop(true,true).animate({'right':'30px'},300);
},function(){
	$('.tese_right_r .img_box').stop(true,true).animate({'right':'20px'},300);
});



/*特色2菜单*/
$('.tese2 .nav li').mouseenter(function(){
	var c = $(this).index();
	$('.tese2 .nav ul li').eq(c).addClass('active').siblings('li').removeClass('active');
	$('.tese2 .tese2_right').eq(c).css({'display':'block'}).siblings('.tese2_right').css({'display':'none'});
});








//阳光视频轮播图 
var a;
$('.sunnews_left .title li').mouseenter(function (){
    	a = $(this).index(); 
   times = setTimeout(function (){
   	// alert(223);
		$('.sunnews_left .list').eq(a).fadeIn(1000).siblings('.list').fadeOut();
		$('.sunnews_left .title li').eq(a).addClass('active2').siblings('li').removeClass('active2');
    },500);
})
    $('.sunnews_left .title li').mouseleave(function (){
	        clearTimeout(times);
	})


// 自动轮播
	var c = 0;
var timer ;

// 先清理定时器，避免重叠
clearInterval(timer);
	// 自动轮播定时器函数： 
function auto(){
	c++;
	if(c == 3){
		c = 0;
	}
	$('.sunnews_left .list').eq(c).stop(true,true).fadeIn(1000).siblings('.list').stop(true,true).fadeOut();
	$('.sunnews_left .title div li').eq(c).addClass('active2').siblings('li').removeClass('active2');
}
// clearInterval(timer);
var timer = setInterval(auto,3500);

// 点击左右按钮
$('.sunnews_left .title .next').click(function(){
	clearInterval(timer);
	c++;
	if(c == 3){
		c = 0;
	}
	$('.sunnews_left .list').eq(c).stop(true,true).fadeIn(1000).siblings('.list').stop(true,true).fadeOut();
	$('.sunnews_left .title div li').eq(c).addClass('active2').siblings('li').removeClass('active2');

})
$('.sunnews_left .title .prev').click(function(){
	clearInterval(timer);
	c--;
	if(c <0){
		c = 2;
	}
	$('.sunnews_left .list').eq(c).stop(true,true).fadeIn(1000).siblings('.list').stop(true,true).fadeOut();
	$('.sunnews_left .title div li').eq(c).addClass('active2').siblings('li').removeClass('active2');

})

// 移上去的时候
$('.sunnews_left').mouseenter(function(){
	clearInterval(timer);	
});
// 移除的时候
$('.sunnews_left').mouseleave(function(){
	timer = setInterval(auto,3500);
});

 
// ~~~~~~~~~~~~~~~~~~~~~   阳 光 视 频 轮 播 图 结束  ~~~~~~~~~~~~~~~~~~~~~~~~











