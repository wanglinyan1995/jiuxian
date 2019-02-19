<?php
	include 'connect.php';
	// //中文乱码
	// header("content-type:text/html;charset=utf-8");

	//接收前端传来的数据
	$name = isset($_POST['name']) ? $_POST['name'] : '';

	// 1.查询该 (用户) 有没有添加该 (商品)
	$sql = "select * from cart where tel='$name' and goodsNum";//需求
	
	$res = $conn->query($sql);//执行语句
	// var_dump($res->num_rows);
	if($res->num_rows > 0) {
		$row = $res->fetch_all(MYSQLI_ASSOC);
		echo json_encode($row);
	} else {
		echo 0;
	}
	
	

?>