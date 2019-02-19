<?php
	include 'connect.php';
	// //中文乱码
	// header("content-type:text/html;charset=utf-8");

	//接收前端传来的数据
	$name = isset($_POST['name']) ? $_POST['name'] : '';
	$pws = isset($_POST['pws']) ? $_POST['pws'] : '';

	// .查询数据库找到数据
	$sql = "select * from userinfo where tel='$name' and pws='$pws'";//需求
	// ".$tj1." and ".$tj2
	// echo $sql;
	$res = $conn->query($sql);//执行语句
	// var_dump($res->num_rows);
	if($res->num_rows > 0) {
		echo 1;//用户存在
	} else {
		echo 0;//用户不存在
	}
	
?>