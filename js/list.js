// ~~~~~~~~~~~~~~~~~~~~~   list.html—— 我 要 买 车 开 始   ~~~~~~~~~~~~~~~~~~~~~~~~

// 页码 ~~~~~~~~~~~、
$(function(){
	var c = 0;
	$('.page li').click(function(){
		c = $(this).index();
		$('.page li').eq(c).addClass('paged').siblings('li').removeClass('paged');
	})
	$('.page .add').click(function(){
		c++;
		if(c == 6){
			c = 0;
		}
		$('.page li').eq(c).addClass('paged').siblings('li').removeClass('paged');
	})
})


// 我要买车 下拉选项
/*$(function(){
	$('#more dt').click(function(){
		$(this).siblings('ul').slideToggle(200);
		$(this).text(li);
	})
	$('#more ul li').change(function(){
		li = $(this).attr('index');
	
	})


})
$(function(){
$('#good').click(function(){
	$(this).chlidren('option').slideToggle(2000);
})
})*/




































































































