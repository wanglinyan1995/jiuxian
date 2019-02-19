<?php
	include 'connect.php';
	// //中文乱码
	// header("content-type:text/html;charset=utf-8");

	//接收前端传来的数据
	$tel = isset($_POST['tel']) ? $_POST['tel'] : '';
	$pws = isset($_POST['pws']) ? $_POST['pws'] : '';
	// echo $tel;

	//插入数据
	$sql = "insert into userinfo (tel, pws) values ('$tel', '$pws')";//需求
	// echo $sql;
	if ($conn->query($sql)) {
	    echo "新记录插入成功";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
	 
	

?>