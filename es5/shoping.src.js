'use strict';

$(function () {
    // 结算吸顶
    var barTop = $('.bar-wrapper').offset().top;
    //on方法相当于原生的绑定
    $(window).on('scroll', function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop <= barTop - 450) {
            //固定在上方
            $('.bar-wrapper').css({ 'position': 'fixed', 'bottom': 0 });
        } else {
            $('.bar-wrapper').css('position', 'static');
        }
    });

    // 购物车页面渲染
    // 数据渲染部分
    var tel = $('.HeaderLeft .userName').html();
    var url = '../api/shopping.php';
    var data = 'name=' + tel;
    var list = $('.order_content'); //商品列表盒子
    //商品列表
    function show(arr) {
        // 1.渲染每页内容
        // console.log(arr)
        var res = arr.map(function (item) {
            return '<ul class="order_lists">\n                        <li class="list_chk">\n                            <input type="checkbox" id="checkbox_2" class="son_check">\n                            <label for="checkbox_2"></label>\n                        </li>\n                        <li class="list_con">\n                            <div class="list_img"><a href="javascript:;"><img src="' + item.url01 + '" alt=""></a></div>\n                            <div class="list_text" data-id=' + item.id + '><a href="javascript:;" >' + item.name + '</a></div>\n                        </li>\n                        <li class="list_info">\n                            <p>\u89C4\u683C\uFF1A\u9ED8\u8BA4</p>\n                            <p>\u5C3A\u5BF8\uFF1A16*16*3(cm)</p>\n                        </li>\n                        <li class="list_price">\n                            <p class="price">\uFFE5' + item.nowprice + '</p>\n                        </li>\n                        <li class="list_amount">\n                            <div class="amount_box">\n                                <a href="javascript:;" class="reduce reSty">-</a>\n                                <input type="text" value="1" class="sum">\n                                <a href="javascript:;" class="plus">+</a>\n                            </div>\n                        </li>\n                        <li class="list_sum">\n                            <p class="sum_price">\uFFE5' + item.nowprice + '</p>\n                        </li>\n                        <li class="list_op">\n                            <p class="del"><a href="javascript:;" class="delBtn" data-id=\'' + item.id + '\'>\u79FB\u9664\u5546\u54C1</a></p>\n                        </li>\n                    </ul>';
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
            show(arr.list); //渲染入口
            cartShow(); //购物车插件入口

            //点击移除商品
            $('.delBtn').click(function () {
                var rmVal = $(this).attr('data-id'); //移除商品ID
                var userName = $('.userName').html(); //用户名
                $('.dialog-sure').click(function () {
                    $.ajax({
                        type: 'post',
                        url: '../api/removeGoods.php',
                        data: 'name=' + userName + '&id=' + rmVal,
                        success: function success(str) {
                            console.log(str);
                        }
                    });
                });
            });

            //点击商品跳转到详情页
            $('.list_text').click(function () {
                var goodsId = $(this).attr('data-id');
                console.log(goodsId);
                var str = 'id' + '=' + goodsId;
                // console.log(str)
                location.href = 'goodsDetails.html?' + str;
            });
        }
    });
});