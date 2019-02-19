'use strict';

$(function () {
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
	//导航栏strat
	$('.page-goodsList .nav-heading').hover(function () {
		$('.page-goodsList .goodsList').show();
	});
	$('.page-goodsList .navmenu').mouseleave(function () {
		$('.page-goodsList .goodsList').hide();
	}); //导航栏end

	// 数据渲染部分
	var url = '../api/goodslist.php';
	var data = 'page=1&qty=5';
	var list = $('.proList ul'); //商品列表盒子
	var pageBox = $('.pageCode'); //页码
	//商品列表
	function show(arr) {
		// 1.渲染每页内容
		// console.log(arr)
		var res = arr.map(function (item) {
			return '<li data-id="' + item.id + '">\n\t\t\t\t\t\t<div class="dataitem">\n\t\t\t\t\t\t\t<a href="###" class="thumb">\n\t\t\t\t\t\t\t\t<img src="' + item.url03 + '" alt="">\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class="price">\n\t\t\t\t\t\t\t\t\uFFE5<span>' + item.nowprice + '</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href="" class="title">\n\t\t\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t\t\t' + item.name + '\n\t\t\t\t\t\t\t\t<span>\u7ECF\u5178\u9152\u9B3C\u9152 \u4EBA\u751F\u99A5\u90C1\u9999</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class="assess">\n\t\t\t\t\t\t\t\t<span>1111</span>\u8BC4\u4EF7\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="activity clearfix">\n\t\t\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t\t\t<span>\u9650\u65F6\u62A2\u8D2D</span>\n\t\t\t\t\t\t\t\t<span>\u8BA2\u5355\u52A0\u4EF7\u62A2\u8D2D</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="buyArea clearfix">\n\t\t\t\t\t\t\t\t<div class="edit">\n\t\t\t\t\t\t\t\t\t<span class="add buyNum-reduce">-</span>\n\t\t\t\t\t\t\t\t\t<input type="text" value="1" class="letter">\n\t\t\t\t\t\t\t\t\t<span class="reduce buyNum-add">+</span>\n\t\t\t\t\t\t\t\t\t<span class=\'total\' style="display:none">' + item.num + ' </span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<a href="###" class="cart buyBtn-cart">\n\t\t\t\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t\t\t\t<span class="buyBtn buyBtn-cart">\u52A0\u5165\u8D2D\u7269\u8F66</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>';
		}).join('');
		list.html(res);
	}

	$.ajax({
		type: 'post',
		url: url,
		data: data,
		success: function success(str) {
			var arr = JSON.parse(str);
			show(arr.list);
			passDate();
			// 2.渲染页码
			var total = arr.total; //总条数
			var qty = arr.qty; //每页显示条数
			var page = Math.ceil(total / qty);

			// 2.渲染底部页码
			var html = '';
			for (var i = 0; i < page; i++) {
				html += '<a href="###" class="numpage">' + (i + 1) + '</a>';
			}

			$('.allPage').html(page);
			// console.log(html)
			pageBox.html(html);
			pageBox.children('a').eq(0).addClass("on");

			// 3.点击页码，跳转到对应的内容
			var pagelist = pageBox.children("a");
			pagelist.on('click', function () {
				// console.log(this.index);
				var val = this.innerHTML;
				$(this).addClass("on").siblings().removeClass('on');
				// console.log(val);
				var data = 'qty=5&page=' + val; //关键
				$.ajax({
					type: 'post',
					url: url,
					data: data,
					success: function success(str) {
						var arr = JSON.parse(str);
						// console.log(arr);
						show(arr.list);
						//网址传数据
						passDate();
					}
				});
			});

			// 4.点击上一页
			$('.prevpage').click(function () {
				var index = $('.pageCode').find('.on').index() - 1;
				if (index < 0) {
					index = 0;
				}
				$('.pageCode').children("a").eq(index).addClass("on").siblings().removeClass('on');

				var val02 = index;
				val02++;
				if (val02 < 0) {
					val02 = 0;
				}
				var data = 'qty=5&page=' + val02; //关键
				$.ajax({
					type: 'post',
					url: url,
					data: data,
					success: function success(str) {
						var arr = JSON.parse(str);
						// console.log(arr);
						show(arr.list);
						//网址传数据
						passDate();
					}
				});
			});
			// 5.点击下一页
			$('.nextpage').click(function () {
				var index = $('.pageCode').find('.on').index() + 1;
				$('.pageCode').children("a").eq(index).addClass("on").siblings().removeClass('on');
				var val1 = index + 1;
				var leth = $('.pageCode').children("a").size();
				if (val1 >= leth) {
					//临界值判断
					val1 = leth;
				}
				var data = 'qty=5&page=' + val1; //关键
				$.ajax({
					type: 'post',
					url: url,
					data: data,
					success: function success(str) {
						var arr = JSON.parse(str);
						// console.log(arr);
						show(arr.list);
						//网址传数据
						passDate();
					}
				});
			});

			//排序功能
			var istrue = true;
			var pageNum = 1;
			var pageqty = 5;
			$('.jg').click(function () {
				// 判断是升序还是降序:true = 升序；false = 降序
				$.ajax({
					type: 'post',
					url: '../api/sort.php',
					data: 'page=' + pageNum + '&qty=' + pageqty + '&istrue=' + istrue,
					success: function success(str) {
						// console.log(str)
						var arr = JSON.parse(str);
						// console.log(arr);
						show(arr.list);
						passDate();

						var total1 = arr.total; //总条数
						var qty1 = arr.qty; //每页显示条数
						var page1 = Math.ceil(total1 / qty1);
						// console.log(page1)
						// 2.渲染底部页码
						var html = '';
						for (var i = 0; i < page1; i++) {
							html += '<a href="###" class="numpage">' + (i + 1) + '</a>';
						}

						$('.allPage').html(page1);
						// console.log(html)
						pageBox.html(html);
						pageBox.children('a').eq(0).addClass("on");

						// 3.点击页码，跳转到对应的内容
						var pagelist = pageBox.children("a");
						pagelist.on('click', function () {
							// console.log(this.index);
							var val = this.innerHTML;
							// pageNum = val;
							$(this).addClass("on").siblings().removeClass('on');
							// console.log(val);
							var data = 'qty=5&page=' + val; //关键
							$.ajax({
								type: 'post',
								url: '../api/sort.php',
								data: data,
								success: function success(str) {
									var arr = JSON.parse(str);
									// console.log(arr);
									show(arr.list);
									//网址传数据
									passDate();
								}
							});
						});

						// 4.点击上一页
						$('.prevpage').click(function () {
							var index = $('.pageCode').find('.on').index();
							if (index < 0) {
								index = 0;
							}
							$('.pageCode').children("a").eq(index).addClass("on").siblings().removeClass('on');

							var val02 = index;
							val02++;
							if (val02 < 0) {
								val02 = 0;
							}
							// console.log(val02)
							var data = 'qty=5&page=' + val02; //关键
							$.ajax({
								type: 'post',
								url: '../api/sort.php',
								data: data,
								success: function success(str) {
									var arr = JSON.parse(str);
									// console.log(arr);
									show(arr.list);
									//网址传数据
									passDate();
								}
							});
						});
						// 5.点击下一页
						$('.nextpage').click(function () {
							var index = $('.pageCode').find('.on').index();
							$('.pageCode').children("a").eq(index).addClass("on").siblings().removeClass('on');
							var val1 = index + 1;
							var leth = $('.pageCode').children("a").size();
							if (val1 >= leth) {
								//临界值判断
								val1 = leth;
							}
							var data = 'qty=5&page=' + val1; //关键
							$.ajax({
								type: 'post',
								url: '../api/sort.php',
								data: data,
								success: function success(str) {
									var arr = JSON.parse(str);
									// console.log(arr);
									show(arr.list);
									//网址传数据
									passDate();
								}
							});
						});
						istrue = !istrue;
					}
				});
			});
		}
	});

	//网址传数据
	function passDate() {
		var datalist = list.children("li");

		datalist.on('click', function () {
			var num = $(this).attr('data-id'); //获取自定义属性ID
			// console.log(num)

			var str = 'id' + '=' + num;
			// console.log(str)
			location.href = 'goodsDetails.html?' + str;
		});
	}

	//排序功能
	// 1.获取所有商品的价格,排序后再渲染到页面

});