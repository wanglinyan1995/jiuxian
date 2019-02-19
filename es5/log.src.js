'use strict';

$(function () {

	var username = $('.loginUser input'); //手机号
	var yzm = $('.loginYzm input'); //验证码
	var regCap = $('.loginYzm .regCap');
	var pws = $('.loginPwd input'); //密码
	var isok = false;
	// 1.用户名
	username.blur(function () {
		// console.log(66)
		var user = username.val().trim();
		if (user) {
			$('.loginUser .mistakeTip').hide();
			isok = true;
		} else {
			$('.loginUser .mistakeTip').show();
			$('.loginUser .judge').show();
			isok = false;
		}
	});
	// //密码
	pws.blur(function () {
		var pwsVal = pws.val().trim();
		if (pwsVal) {
			$('.loginPwd .mistakeTip').hide();
			isok = true;
		} else {
			$('.loginPwd .mistakeTip').show();
			$('.loginPwd .judge').show();
			isok = false;
		}
	});

	// //2.随机验证码
	regCap.html(randomyzm(4));
	regCap.click(function () {
		regCap.html(randomyzm(4));
	});
	// console.log(regCap.html())
	yzm.blur(function () {
		var yzmVal = yzm.val().trim();
		if (yzmVal) {
			$('.loginYzm .mistakeTip').hide();
			if (yzmVal == regCap.html()) {
				$('.loginYzm .mistakeTip').hide();
				isok = true;
			} else {
				$('.loginYzm .mistakeTip').show();
				isok = false;
			}
		} else {
			$('.loginYzm .mistakeTip').show();
		}
	});

	//确认登录
	$('.logbtn input').click(function () {
		// console.log(isok)
		if (isok) {
			// 查询数据库
			var user = username.val().trim();
			var pwsVal = pws.val().trim();
			$.ajax({
				type: 'POST',
				url: '../api/login.php',
				data: 'name=' + user + '&pws=' + pwsVal,
				success: function success(str) {
					if (str == 1) {
						//设置cookie
						document.cookie = 'tel=' + user + ';path=/';
						location.href = '../idx.html?';
					} else {
						alert('用户名或密码有误');
					}
				}
			});
		}
	});
});