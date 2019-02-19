'use strict';

$(function () {
	//导航栏strat
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
	$('.page-details .nav-heading').hover(function () {
		$('.page-details .goodsList').show();
	});
	$('.page-details .navmenu').mouseleave(function () {
		$('.page-details .goodsList').hide();
	}); //导航栏end

	// 选项卡
	$('.page-details .d-table span').eq(0).addClass("on");
	$('.page-details .d-table span').click(function () {
		$(this).addClass("on").siblings().removeClass('on');
		$('.page-details .item-tab').eq($(this).index()).show().siblings().hide();
	});

	// //数据渲染部分
	var datalist = decodeURI(location.search); //转码的方法
	var str = datalist.slice(1);
	//网址字符串解析成对象的方法
	function strToObj(str) {
		// key0=0&key1=1&key2=2
		var list = {};
		var str1 = str.split('&');
		for (var i = 0; i < str1.length; i++) {
			var str2 = str1[i].split('=');
			list[str2[0]] = str2[1];
		}
		return list;
	}
	var good = strToObj(str); //得到传过来的参数
	// console.log(good.id);
	var list = $('.dInfo');
	function show(arr) {
		// 1.渲染每页内容
		// console.log(arr)
		var res = arr.map(function (item) {
			return '<div class="InfoShow">\n\t\t\t\t\t\t<div id="MagnifierWrap2">\n\t\t\t\t\t\t\t<div class="MagnifierMain">\n\t\t\t\t\t\t\t\t<img class="MagTargetImg" src="' + item.url03 + '" data-src="' + item.url03 + '"> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<span class="spe_leftBtn">&lt;</span>\n\t\t\t\t\t\t\t<span class="spe_rightBtn">&gt;</span>\n\t\t\t\t\t\t\t<div class="spec-items"> \n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li class="on">\n\t\t\t\t\t\t\t\t\t\t<img src="' + item.url03 + '" data-lsrc="' + item.url03 + '" data-maxSrc="' + item.url03 + '">\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class="">\n\t\t\t\t\t\t\t\t\t\t<img src="' + item.url04 + '" data-lsrc="' + item.url04 + '" data-maxSrc="' + item.url04 + '">\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="showOther clearfix">\n\t\t\t\t\t\t\t\t<div class="showNumber">\n\t\t\t\t\t\t\t\t\t\u5546\u54C1\u7F16\u53F7<span>' + item.id + '</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="showR">\n\t\t\t\t\t\t\t\t\t<div class="showshare">\n\t\t\t\t\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t\t\t\t\t<span>\u5206\u4EAB</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="showCollect">\n\t\t\t\t\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t\t\t\t\t<span>\u6536\u85CF<em>(70)</em></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="particular">\n\t\t\t\t\t\t<div class="ptcTit">\n\t\t\t\t\t\t\t<h1><i></i>' + item.name + '</h1>\n\t\t\t\t\t\t\t<p>\u7ECF\u5178\u9152\u9B3C\u9152 \u4EBA\u751F\u99A5\u90C1\u9999</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="infowrap">\n\t\t\t\t\t\t\t<div class="prcBox clearfix">\n\t\t\t\t\t\t\t\t<span class="prcTit">\u9152\u4ED9\u4EF7</span>\n\t\t\t\t\t\t\t\t<del>\uFFE5' + item.price + '</del>\n\t\t\t\t\t\t\t\t<div class="payWay">\n\t\t\t\t\t\t\t\t\t<p class="phonePay">\n\t\t\t\t\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t\t\t\t\t<span>\u624B \u673A \u8D2D \u4E70<em></em></span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p class="mb-code">\n\t\t\t\t\t\t\t\t\t\t<img src="http://www.jiuxian.com/Scan/0100601223360.jpg" width="98" height="98">\n\t\t\t\t\t\t\t\t\t\t<span>\u624B\u673A\u8D2D\u4E70\u4F18\u60E0\u591A</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="sales clearfix">\n\t\t\t\t\t\t\t\t<div class="sTit">\u4FC3\u9500\u4EF7</div>\n\t\t\t\t\t\t\t\t<div class="sprc">\uFFE5 <span>' + item.nowprice + '</span></div>\n\t\t\t\t\t\t\t\t<div class="clubprice">\n\t\t\t\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t\t\t\t<span>\u4F1A\u5458\u4E0B\u5355\u518D\u4EAB99\u6298,\u53EF\u77012.39\u5143</span>\n\t\t\t\t\t\t\t\t\t<a href="###">\u5F00\u901A\u4F1A\u5458<em>&gt;</em></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="rebate clearfix">\n\t\t\t\t\t\t\t\t<div class="rbTit">\u4FC3\u9500</div>\n\t\t\t\t\t\t\t\t<div class="rbCon">\n\t\t\t\t\t\t\t\t\t<p class="rbConTop">\n\t\t\t\t\t\t\t\t\t\t<em>\u9650\u65F6\u62A2\u8D2D</em>\n\t\t\t\t\t\t\t\t\t\t<span>\u9650\u65F6\u62A2\u8D2D</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p class="rbConbtm">\n\t\t\t\t\t\t\t\t\t\t<em>\u8BA2\u5355\u52A0\u4EF7\u8D2D</em>\n\t\t\t\t\t\t\t\t\t\t<span>\u6EE1299\u5143\u52A09.9\u5143\u5F97\u5C0FM1</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="comScore">\n\t\t\t\t\t\t\t<div class="comleft">\n\t\t\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t\t\t<span>\u7D2F\u8BA1\u9500\u91CF</span>\n\t\t\t\t\t\t\t\t<em>' + item.sales + '</em>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="comCen">\n\t\t\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t\t\t<span>\u9152\u53CB\u8BC4\u5206</span>\n\t\t\t\t\t\t\t\t<em>7.0</em>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="comright">\n\t\t\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t\t\t<span>\u9001\u91D1\u5E01</span>\n\t\t\t\t\t\t\t\t<em>119</em>\n\t\t\t\t\t\t\t\t<a class="dIcon point" target="_blank" href="http://help.jiuxian.com/view-2-210.htm"></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="selectGoods">\n\t\t\t\t\t\t\t<div class="favorable clearfix">\n\t\t\t\t\t\t\t\t<div class="fvTit">\u4F18\u60E0\u5238</div>\n\t\t\t\t\t\t\t\t<div class="fvCon">\n\t\t\t\t\t\t\t\t\t<div class="juan">\n\t\t\t\t\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t\t\t\t\t<span>\u6EE1599\u51CF50</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="juan">\n\t\t\t\t\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t\t\t\t\t<span>\u6EE1599\u51CF50</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="juan">\n\t\t\t\t\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t\t\t\t\t<span>\u6EE1599\u51CF50</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<a href="javascript:;" class="moreCoupons clickCoupons">\u66F4\u591A<i>&gt;&gt;</i></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="delivery clearfix">\n\t\t\t\t\t\t\t\t<div class="delTit">\u914D\u9001\u5230</div>\n\t\t\t\t\t\t\t\t<div class="delCon">\n\t\t\t\t\t\t\t\t\t<div class="citySelect">\n\t\t\t\t\t\t\t\t\t\t <div data-toggle="distpicker" class="citylist">\n\t\t\t\t\t\t\t\t\t        <select name="" id=""></select>\n\t\t\t\t\t\t\t\t\t        <select name="" id=""></select>\n\t\t\t\t\t\t\t\t\t        <select name="" id=""></select>\n\t\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t\t\t<strong>\u6709\u8D27\uFF01</strong>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="chose clearfix">\n\t\t\t\t\t\t\t\t<div class="choseTit">\u9009&nbsp;&nbsp;&nbsp;\u62E9</div>\n\t\t\t\t\t\t\t\t<div class="choseCon">\n\t\t\t\t\t\t\t\t\t<ul class="clearfix">\n\t\t\t\t\t\t\t\t\t\t<li class="cosItem on">\n\t\t\t\t\t\t\t\t\t\t\t<a href="###">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src="http://img10.jiuxian.com/2017/0822/78c0b66acb7a4707aedb70de47000a812.jpg" width="30" height="30" title="52\xB0\u9152\u9B3C\u539F\u6D46\u9152">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>52\xB0\u9152\u9B3C\u539F\u6D46\u9152</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class="dIcon"></i>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class="cosItem">\n\t\t\t\t\t\t\t\t\t\t\t<a href="###">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src="http://img10.jiuxian.com/2017/0822/78c0b66acb7a4707aedb70de47000a812.jpg" title="52\xB0\u9152\u9B3C\u539F\u6D46\u9152">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>52\xB0\u9152\u9B3C\u539F\u6D46\u9152500ml\uFF086\u74F6\u88C5\uFF09</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i class="dIcon"></i>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="buyNum clearfix">\n\t\t\t\t\t\t\t\t<div class="numTit">\u6570\u91CF</div>\n\t\t\t\t\t\t\t\t<div class="numCon">\n\t\t\t\t\t\t\t\t\t<div class="number">\n\t\t\t\t\t\t\t\t\t\t<input type="text" value="1" class=\'letter\'>\n\t\t\t\t\t\t\t\t\t\t<a href="###" class=\'buyNum-btn buyNum-add\'></a>\n\t\t\t\t\t\t\t\t\t\t<a href="###" class=\'buyNum-btn buyNum-reduce\'></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="buyPro"><span class=\'total\' style="display:none">' + item.num + ' </span>\u6BCF\u8D2D\u4E702\u74F6\uFF0C\u5373\u8D60\u9001\u539F\u5382\u624B\u63D0\u888B1\u4E2A</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="buyBtn">\n\t\t\t\t\t\t\t\t<a  href="javascript:;" class="buyBtn buyBtn-cart">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="infoR">\n\t\t\t\t\t\t<div class="infologo">\n\t\t\t\t\t\t\t<a target="_blank" href="index.html">\n\t\t                        <img alt="\u9152\u9B3C\u9152" src="http://img08.jiuxian.com/bill/upload/brand/1795/1/1386060384306.jpg">\n\t\t                        <span>\u9152\u9B3C\u9152</span>\n\t\t                        <i>\u9152\u4ED9\u81EA\u8425</i>\n\t\t                    </a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="sales-after">\n\t\t\t\t\t\t\t<div class="infosaf">\n\t\t\t\t\t\t\t\t<p class="safNam">\n\t\t\t\t\t\t\t\t\t<img src="http://img06.jiuxian.com/bill/2016/0309/3d43576517d54bccb50f3303c01a746e.png" width="20" height="22">\n\t\t\t\t\t\t\t\t\t<strong>\u552E\u540E\u65E0\u5FE7</strong>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p class="safCon">7\u5929\u65E0\u7406\u7531\u9000\u6362\u8D27 </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="infosaf">\n\t\t\t\t\t\t\t\t<p class="safNam">\n\t\t\t\t\t\t\t\t\t<img src="http://img06.jiuxian.com/bill/2016/0309/3d43576517d54bccb50f3303c01a746e.png" width="20" height="22">\n\t\t\t\t\t\t\t\t\t<strong>\u552E\u540E\u65E0\u5FE7</strong>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p class="safCon">7\u5929\u65E0\u7406\u7531\u9000\u6362\u8D27 </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="infosaf">\n\t\t\t\t\t\t\t\t<p class="safNam">\n\t\t\t\t\t\t\t\t\t<img src="http://img06.jiuxian.com/bill/2016/0309/3d43576517d54bccb50f3303c01a746e.png" width="20" height="22">\n\t\t\t\t\t\t\t\t\t<strong>\u552E\u540E\u65E0\u5FE7</strong>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p class="safCon">7\u5929\u65E0\u7406\u7531\u9000\u6362\u8D27 </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="infosaf">\n\t\t\t\t\t\t\t\t<p class="safNam">\n\t\t\t\t\t\t\t\t\t<img src="http://img06.jiuxian.com/bill/2016/0309/3d43576517d54bccb50f3303c01a746e.png" width="20" height="22">\n\t\t\t\t\t\t\t\t\t<strong>\u552E\u540E\u65E0\u5FE7</strong>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p class="safCon">7\u5929\u65E0\u7406\u7531\u9000\u6362\u8D27 </p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="kefu">\n\t\t\t\t\t\t\t<a class="cusBg dh1">\n\t\t\t\t\t\t\t\t<i></i><span>\u5728\u7EBF\u5BA2\u670D</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>';
		}).join('');
		list.html(res);
	}
	var url = '../api/details.php';
	var data = 'id=' + good.id;
	$.ajax({
		type: 'post',
		url: url,
		data: data,
		success: function success(str) {
			var arr = JSON.parse(str);
			// console.log(arr);
			show(arr);

			MagnifierF("MagnifierWrap2"); //放大镜入口

			var add = $('.buyNum-add'); //增加
			var letter = $('.letter'); //购买的数量
			var reduce = $('.buyNum-reduce'); //减少
			var repertory = $('.total'); //获取库存
			count(add, letter, reduce, repertory); //数量加减入口

			//加入购物车入口
			$('.buyBtn-cart').click(function () {
				var tel = $('.HeaderLeft .userName').html();
				//1.判断用户有没有登录
				if (tel) {
					// 2.如果登陆了，直接跳转到购物车页面
					// 1.商品ID 数量 用户名传入后端
					var goodID = $('.showNumber span').html();
					var goodNum = $('.letter').val();
					var userName = $('.userName').html();
					// console.log(goodID,goodNum,userName);
					$.ajax({
						type: 'post',
						url: '../api/cart.php',
						data: 'id=' + goodID + '&num=' + goodNum + '&name=' + userName,
						success: function success(str) {
							console.log(str);
						}
					});
					// 购物车弹窗
					cartBtn();
				} else {
					// 3.如果没有登录，提示
					alert('您还没有登录哦！');
				}
			});
		}
	});

	// 购物车弹窗
	function cartBtn() {
		$('.popMask').css({ 'display': 'block' });
		$('.u-buy-lay').css({ 'display': 'block' });
		//点击关闭弹窗按钮
		$('.u-buy-close').click(function () {
			$('.popMask').css({ 'display': 'none' });
			$('.u-buy-lay').css({ 'display': 'none' });
		});
		//点击继续购物按钮
		$('.u-buy-g').click(function () {
			$('.popMask').css({ 'display': 'none' });
			$('.u-buy-lay').css({ 'display': 'none' });
		});
		//打开查看购物车按钮（用户名）传到到购物车页
		$('.u-buy-go').click(function () {
			// 1.如果登陆了，直接跳转到购物车页面
			// console.log(tel);
			location.href = 'shopping.html?';
		});
	}
});