<?php
	include 'connect.php';
	// //中文乱码
	// header("content-type:text/html;charset=utf-8");

	//接收前端传来的数据
	$tel = isset($_POST['tel']) ? $_POST['tel'] : '';
	$pws = isset($_POST['pws']) ? $_POST['pws'] : '';
	// echo $tel;

	//查询数据
	$sql2 = "select * from userinfo where tel=$tel";//需求
	$res = $conn->query($sql2);//执行语句
	var_dump($res->num_rows);
	if($res->num_rows > 0) {
		echo 1;//用户存在
	} else {
		echo 0;//用户不存在
	}

	 
	

?>