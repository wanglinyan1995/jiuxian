'use strict';

$(function () {
	//导航栏部分
	$('.goodsList li').hover(
	// $(this).index();//当前索引
	function () {
		$('.submenu').eq($(this).index()).addClass("subShow");
	}, function () {
		$('.submenu').eq($(this).index()).removeClass("subShow");
	});
	$('.submenu').hover(function () {
		$(this).addClass("subShow");
		$('.goodsList li').eq($(this).index() - 2).addClass("lion");
	}, function () {
		$(this).removeClass('subShow');
		$('.goodsList li').eq($(this).index() - 2).removeClass("lion");
	});
	//轮播图部分
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: { //自动轮播+延时两秒
			delay: 2000,
			disableOnInteraction: false
		},
		effect: 'fade', //切换效果
		loop: true, //设置环路
		speed: 500, //切换速度
		// width: 610, 
		pagination: { //分页器
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function renderBullet(index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			}
		}
	});
	$('.swiper-container').hover(function () {
		//鼠标经过停止
		mySwiper.autoplay.stop();
	}, function () {
		//鼠标经过离开
		mySwiper.autoplay.start();
	});

	//疯狂抢购部分
	$('.buyLeft-top ul li').eq(0).addClass("on");
	$('.buyLeft-top ul li').mouseover(function () {
		$(this).addClass("on").siblings().removeClass('on');
		$('.buyList').eq($(this).index()).show().siblings().hide();
	});
	//公告信息
	$('.buyR-title ul li').eq(0).addClass("on");
	$('.buyR-title ul li').mouseover(function () {
		$(this).addClass("on").siblings().removeClass('on');
		$('.buyR-text').eq($(this).index()).show().siblings().hide();
	});
	//团购部分
	lunbo($('.swiper-container02'), $('.swiper-pagination02'));
	lunbo($('.swiper-container03'), $('.swiper-pagination03'));
	// 小轮播图公共部分
	function lunbo(className, focus) {
		var mySwiper02 = new Swiper(className, {
			autoplay: { //自动轮播+延时两秒
				delay: 2000,
				disableOnInteraction: false
			},
			// effect : 'fade',//切换效果
			loop: true, //设置环路
			speed: 500, //切换速度
			pagination: { //分页器
				el: focus,
				clickable: true
			}
		});
		className.hover(function () {
			//鼠标经过停止
			mySwiper02.autoplay.stop();
		}, function () {
			//鼠标经过离开
			mySwiper02.autoplay.start();
		});
	}
	//优惠推荐轮播部分
	var mySwiper04 = new Swiper('.swiper-container04', {
		autoplay: false,
		loop: true, //设置环路
		speed: 500, //切换速度
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		pagination: { //分页器
			el: '.swiper-pagination04',
			clickable: true
		}
	});
	//白酒馆轮播
	lunbo($('.swiper-container05'), $('.swiper-pagination05'));
	// logo墙
	$('.titleBox ul li').eq(0).addClass("on");
	$('.titleBox ul li').mouseover(function () {
		$(this).addClass("on").siblings().removeClass('on');
		$('.titleSlider .buyList').eq($(this).index()).show().siblings().hide();
	});
	var mySwiper06 = new Swiper('.swiper-container06', {
		autoplay: false,
		speed: 500, //切换速度
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	});

	// 回到顶部
	var backButton = $('.backTop');
	function backToTop() {
		$('html,body').animate({
			scrollTop: 0
		}, 800);
	}
	backButton.on('click', backToTop);

	// 页面渲染
	//渲染数据：jq的ajax

	//	$.ajax({
	//		type: "get",
	//		url: "api/getname.php",
	//		async: true,
	//		data: {
	//			'num': num
	//		},
	//		success: function(str) {
	//			var arr = JSON.parse(str);
	//			//渲染到购物车：dom，字符串模板
	//		}
	//
	//	});


	// 首页渲染公共部分
	var url = 'api/idx.php';
	var data = 'page=1&qty=10';
	// console.log(`<span class="">${i+1}</span>`)
	function idxShow(list) {
		function show(arr) {
			// 1.渲染每页内容
			// console.log(arr)
			var res = arr.map(function (item) {
				return '<li data-id=\'' + item.id + '\'>\n\t\t\t\t\t\t\t<a href="javascript:void(0)">\n\t\t\t\t\t\t\t\t<div class="tabPic"><img src="' + item.url02 + '" alt=""></div>\n\t\t\t\t\t\t\t\t<div class="tabTit">' + item.name + '</div>\n\t\t\t\t\t\t\t\t<div class="tabPrice">\uFFE5 ' + item.price + '</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>';
			}).join('');
			list.html(res);
		}

		$.ajax({
			type: 'post',
			url: url,
			data: data,
			success: function success(str) {
				var arr = JSON.parse(str);
				// console.log(arr)
				show(arr.list);

				//网址传数据
				var datalist = list.children("li");

				datalist.on('click', function () {
					var num = $(this).attr('data-id'); //获取自定义属性ID
					// console.log(num)
					var str = 'id' + '=' + num;
					// console.log(str)
					location.href = 'html/goodsDetails.html?' + str;
				});
			}
		});
	}
	// 疯狂抢购部分
	var list = $('.page-index .buyLeft-btm .buyList ul'); //列表
	idxShow(list);

	//白酒馆
	var firstFloor = $('.firstFloor .buyList ul');
	idxShow(firstFloor);
});