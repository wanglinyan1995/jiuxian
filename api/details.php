<?php
	include 'connect.php';
	// //中文乱码
	// header("content-type:text/html;charset=utf-8");

	//接收前端传来的数据
	$id = isset($_POST['id']) ? $_POST['id'] : '';
	// echo $id;
	// .查询数据库找到5条数据
	$sql = "select * from goodslist where id=$id";//需求

	$res = $conn->query($sql);//执行语句
	// // var_dump($res)
	
	// // // 得到字符集中的某个对象
	$row = $res->fetch_all(MYSQLI_ASSOC);//对象

	// // 1.写一个sql语句：查询goodslist所有的内容
	// $sql2 = 'select * from goodslist where id=8';//目前只是字符串

	// //2.执行sql语句,得到一个结果集
	// $res2 = $conn->query($sql2);

	// $num = $res2->num_rows;//获取总行数
	//  // var_dump($num)
	 
	//  //把所有要用的数据放在数组里
	//  $goodlist = array(
	//  	"total" => $num,
	//  	"list" => $row,
	//  	"page" => $page,
	//  	"qty" => $qty
	//  );

	 
	// // 4.把对象转为字符串传给前端
	echo json_encode($row,JSON_UNESCAPED_UNICODE);//'[{},{},{}]'

	// 关闭资源和数据库
	$res->close();
	// $res2->close();
	$conn->close();

?>