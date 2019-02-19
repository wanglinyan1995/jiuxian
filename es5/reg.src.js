'use strict';

$(function () {

	var username = $('.phone input'); //手机号
	var yzm = $('.SecurityCode input'); //验证码
	var regCap = $('.SecurityCode .regCap');
	var pws = $('.password input'); //密码
	var repws = $('.repassword input'); //确认密码
	var deal = $('.deal input'); //协议
	var isok01 = false;
	var isok02 = false;
	var isok03 = false;
	var isok04 = false;

	// 1.用户名
	username.blur(function () {
		// console.log(66)
		var user = username.val().trim();
		if (user) {
			$('.phone .poiFalse').hide();
			$('.phone .poiTrue').show();
			// 正则判断手机号
			if (checkReg.tel(user)) {
				$('.phone .poiTrue').hide();
				$('.phone .pTrue').hide();

				//验证用户名是否被注册
				var url = '../api/reg.php';
				var data = 'tel=' + user;
				$.ajax({
					type: 'POST',
					url: url,
					data: data,
					success: function success(str) {
						// console.log(str)
						if (str == 1) {
							$('.phone .regFalse').show();
							$('.phone .regFalse').css({ 'background-position': '-162px 0' });
							// console.log('用户名已注册');
							isok01 = false;
							// console.log(isok)
						} else {
							$('.phone .regFalse').show();
							$('.phone .regFalse').css({ 'background-position': '-139px 0' });
							// console.log('用户名未注册');
							isok01 = true;
						}
					}
				});
			} else {
				$('.phone .regFalse').show();
				$('.phone .regFalse').css({ 'background-position': '-162px 0' });
				$('.phone .pTrue').show();
				isok01 = false;
			}
		} else {
			$('.phone .poiFalse').show();
			$('.phone .poiTrue').hide();
		}
	});

	//2.随机验证码
	regCap.html(randomyzm(4));
	regCap.click(function () {
		regCap.html(randomyzm(4));
	});
	// console.log(regCap.html())
	yzm.blur(function () {
		var yzmVal = yzm.val().trim();
		if (yzmVal) {
			$('.SecurityCode .poiFalse').hide();
			if (yzmVal == regCap.html()) {
				$('.SecurityCode .pTrue').hide();
				isok02 = true;
			} else {
				$('.SecurityCode .pTrue').show();
				isok02 = false;
			}
		} else {
			$('.SecurityCode .poiFalse').show();
		}
	});

	//密码
	pws.blur(function () {
		var pwsVal = pws.val().trim();
		if (pwsVal) {
			$('.password .poiFalse').hide();
			$('.password .poiTrue').show();
			if (checkReg.psw(pwsVal)) {
				$('.password .regFalse').show();
				$('.password .regFalse').css({ 'background-position': '-139px 0' });
				$('.password .poiTrue').hide();
				$('.password .pTrue').hide();
				isok03 = true;
			} else {
				$('.password .regFalse').show();
				$('.password .regFalse').css({ 'background-position': '-162px 0' });
				$('.password .pTrue').show();
				isok03 = false;
			}
		} else {
			$('.password .poiTrue').hide();
			$('.password .poiFalse').show();
		}
	});
	//确认密码
	repws.blur(function () {
		var repwsVal = repws.val().trim();
		var pwsVal = pws.val().trim();

		if (repwsVal) {
			$('.repassword .poiFalse').hide();
			if (repwsVal == pwsVal) {
				$('.repassword .regFalse').show();
				$('.repassword .regFalse').css({ 'background-position': '-139px 0' });
				isok04 = true;
			} else {
				$('.repassword .regFalse').show();
				$('.repassword .regFalse').css({ 'background-position': '-162px 0' });
				$('.repassword .poiFalse').show();
				$('.repassword .poiTrue').hide();
				isok04 = false;
			}
		} else {
			$('.repassword .poiTrue').show();
		}
	});

	//确认注册
	$('.jx-form .btn').click(function () {
		// console.log(isok)
		if (isok01 && isok02 && isok03 && isok04) {
			if (deal.attr('checked') == 'checked') {
				// console.log(deal.attr('checked'))
				// console.log(666)
				location.href = 'login.html?';

				// 把注册信息插入数据库
				var user = username.val();
				var pwsVal = pws.val();

				var url = '../api/reg02.php';
				var data = 'tel=' + user + '&pws=' + pwsVal;
				$.ajax({
					type: 'POST',
					url: url,
					data: data,
					success: function success(str) {
						console.log(str);
						// var arr = JSON.parse(str);
						// console.log(arr)
					}
				});
			}
		}
	});
});