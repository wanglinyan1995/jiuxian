"use strict";$(function(){$(".goodsList li").hover(function(){$(".submenu").eq($(this).index()).addClass("subShow")},function(){$(".submenu").eq($(this).index()).removeClass("subShow")}),$(".submenu").hover(function(){$(this).addClass("subShow"),$(".goodsList li").eq($(this).index()-2).addClass("lion")},function(){$(this).removeClass("subShow"),$(".goodsList li").eq($(this).index()-2).removeClass("lion")});var t=new Swiper(".swiper-container",{autoplay:{delay:2e3,disableOnInteraction:!1},effect:"fade",loop:!0,speed:500,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(t,i){return'<span class="'+i+'">'+(t+1)+"</span>"}}});function i(t,i){var e=new Swiper(t,{autoplay:{delay:2e3,disableOnInteraction:!1},loop:!0,speed:500,pagination:{el:i,clickable:!0}});t.hover(function(){e.autoplay.stop()},function(){e.autoplay.start()})}$(".swiper-container").hover(function(){t.autoplay.stop()},function(){t.autoplay.start()}),$(".buyLeft-top ul li").eq(0).addClass("on"),$(".buyLeft-top ul li").mouseover(function(){$(this).addClass("on").siblings().removeClass("on"),$(".buyList").eq($(this).index()).show().siblings().hide()}),$(".buyR-title ul li").eq(0).addClass("on"),$(".buyR-title ul li").mouseover(function(){$(this).addClass("on").siblings().removeClass("on"),$(".buyR-text").eq($(this).index()).show().siblings().hide()}),i($(".swiper-container02"),$(".swiper-pagination02")),i($(".swiper-container03"),$(".swiper-pagination03"));new Swiper(".swiper-container04",{autoplay:!1,loop:!0,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination04",clickable:!0}});i($(".swiper-container05"),$(".swiper-pagination05")),$(".titleBox ul li").eq(0).addClass("on"),$(".titleBox ul li").mouseover(function(){$(this).addClass("on").siblings().removeClass("on"),$(".titleSlider .buyList").eq($(this).index()).show().siblings().hide()});new Swiper(".swiper-container06",{autoplay:!1,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});$(".backTop").on("click",function(){$("html,body").animate({scrollTop:0},800)});function e(s){$.ajax({type:"post",url:"api/idx.php",data:"page=1&qty=10",success:function(t){var i,e,n=JSON.parse(t);i=n.list,e=i.map(function(t){return"<li data-id='"+t.id+'\'>\n\t\t\t\t\t\t\t<a href="javascript:void(0)">\n\t\t\t\t\t\t\t\t<div class="tabPic"><img src="'+t.url02+'" alt=""></div>\n\t\t\t\t\t\t\t\t<div class="tabTit">'+t.name+'</div>\n\t\t\t\t\t\t\t\t<div class="tabPrice">￥ '+t.price+"</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>"}).join(""),s.html(e),s.children("li").on("click",function(){var t="id="+$(this).attr("data-id");location.href="html/goodsDetails.html?"+t})}})}e($(".page-index .buyLeft-btm .buyList ul")),e($(".firstFloor .buyList ul"))});