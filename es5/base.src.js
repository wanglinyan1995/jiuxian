'use strict';

$(function () {
	// 顶部用户渲染
	var loginurl = 'http://localhost:1811/jiuxian/dist/html/login.html';
	var regurl = 'http://localhost:1811/jiuxian/dist/html/register.html';
	var idxurl = 'http://localhost:1811/jiuxian/dist/idx.html';
	topShow(idxurl, loginurl, regurl);

	// 回到顶部
	goTop();

	//侧边栏购物车
	$('.shopCart').click(function () {
		userLogin();
	});

	// 顶部购物车渲染
	var tel = $('.HeaderLeft .userName').html();
	var cartinfo = $('.hd-n3'); //顶部购物车信息
	$.ajax({
		type: 'post',
		url: 'http://localhost:1811/jiuxian/dist/api/topCart.php',
		data: 'name=' + tel,
		success: function success(str) {
			var arr = JSON.parse(str);
			// console.log(arr);
			if (arr) {
				var total = 0; //购物车商品总数
				arr.map(function (item) {
					total += item.goodsNum * 1;
				});
				var res = '<a href="###"><i></i>\u8D2D\u7269\u8F66<span>' + total + '</span>\u4EF6</a>';
				cartinfo.html(res);
			} else {
				cartinfo.click(function () {
					userLogin();
				});
			}
		}
	});
});

//购物数量的增减功能
//数量增减功能实现
function count(add, letter, reduce, repertory) {
	letter.blur(function () {
		var num = letter.val(); //获取输入的数值
		// console.log(num)
	});
	//点击减少数量
	reduce.click(function () {
		var num = letter.val(); //获取输入的数值
		if (num <= 1) {
			num = 1;
			reduce.css({
				'cursor': 'not-allowed',
				'color': '#bbbbbb'
			});
		} else {
			num--;
			reduce.css({
				'cursor': 'pointer',
				'color': 'black'
			});
			add.css({
				'color': 'black'
			});
		}
		letter.val(num);
	});
	// console.log(add);
	//点击增加数量
	add.click(function () {
		var ku = repertory.html() * 1;
		// console.log(typeof(ku))
		var num = letter.val() * 1; //获取输入的数值
		// console.log(num,ku, num>=ku)
		if (num >= ku) {
			add.css({
				'cursor': 'not-allowed',
				'color': '#bbbbbb'
			});
		} else {
			num++;
			add.css({
				'cursor': 'pointer',
				'color': 'black'
			});
			reduce.css({
				'color': 'black'
			});
		}
		letter.val(num);
	});
}

// 正则验证
var checkReg = {
	user: function user(str) {
		var reg = /^[a-zA-Z]+\w{4,15}$/;
		return reg.test(str);
	},
	psw: function psw(str) {
		var reg = /^[a-zA-Z]\w{5,17}$/;
		return reg.test(str);
	},
	tel: function tel(str) {
		var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		return reg.test(str);
	},
	email: function email(str) {
		var reg = /^\w+([+\-.]\w+)*@(\w+[\.]\w+)*\.\w+([+-.]\w)*$/;
		return reg.test(str);
	},
	idcard: function idcard(str) {
		var reg = /^\d{15}|\d{17}[\dXx]$/;
		return reg.test(str);
	}

	// 1.封装随机验证码
};function randomyzm(num) {
	var ranNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F'];
	var res01 = '';
	for (var i = 0; i < num; i++) {
		res01 += ranNum[parseInt(Math.random() * ranNum.length)]; //随机验证码
	}
	return res01; //把随机数输出到页面
}
//顶部渲染
function topShow(idx, login, reg) {
	var userinfo = $('.HeaderLeft');
	//没有用户登录时
	function userShow(arr) {
		var res = '<span>\u6B22\u8FCE\u6765\u5230\u9152\u4ED9\u7F51!</span>\n\t\t\t\t\t\t<a href="' + login + '">\u8BF7\u767B\u5F55</a>\n\t\t\t\t\t\t<a href="' + reg + '">\u514D\u8D39\u6CE8\u518C</a>';
		userinfo.html(res);
	}
	//有用户登录时
	function userShow1(arr) {
		var res = '<span>hi</span>\n\t\t\t\t\t\t<a href="" class=\'userName\'>' + arr + '</a>\n\t\t\t\t\t\t<a href="' + idx + '" class=\'quit\'>\u9000\u51FA</a>';
		userinfo.html(res);
	}

	// 获取cookie
	var red = document.cookie;
	var good = red.split('=');
	var tel = good.slice(1);
	// console.log(tel.length)
	if (tel.length > 0) {
		userShow1(tel);
	} else {
		userShow(tel);
	}
	//点击退出删除cookie
	$('.quit').click(function () {
		document.cookie = "tel=; expires=Thu, 01 Jan 1968 00:00:00 GMT;path=/";
		// console.log(tel)
		userShow(tel);
	});
}

// 回到顶部
function goTop() {
	var backButton = $('.backTop');
	// console.log(backButton) 
	function backToTop() {
		$('html,body').animate({
			scrollTop: 0
		}, 800);
	}

	backButton.on('click', backToTop);
}

//判断用户是否登录
function userLogin() {
	var tel = $('.HeaderLeft .userName').html();
	if (tel) {
		location.href = 'http://localhost:1811/jiuxian/dist/html/shopping.html?';
	} else {
		alert('您还没有登录哦！');
	}
}