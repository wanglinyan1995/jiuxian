<?php
	include 'connect.php';
	// //中文乱码
	// header("content-type:text/html;charset=utf-8");

	//接收前端传来的数据
	$name = isset($_POST['name']) ? $_POST['name'] : '';
	$id = isset($_POST['id']) ? $_POST['id'] : '';
	
	// 1.移除对应的商品（id）(用户名)
	$sql = "delete from cart  where tel='$name' and id='$id'";//需求
	
	$res = $conn->query($sql);//执行语句
	
	 
?>