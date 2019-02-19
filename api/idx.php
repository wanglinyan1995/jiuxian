<?php
	include 'connect.php';
	// //中文乱码
	// header("content-type:text/html;charset=utf-8");

	//接收前端传来的数据
	$page = isset($_POST['page']) ? $_POST['page'] : '';
	$qty = isset($_POST['qty']) ? $_POST['qty'] : '';
	
	// 1.前端需求
	$index = ($page - 1) * $qty; 
	// echo $index;

	// .查询数据库找到5条数据
	$sql = "select * from goodslist LIMIT 0,10";//需求
	// echo $sql;
	$res = $conn->query($sql);//执行语句
	// var_dump($res)
	
	// // 得到字符集中的某个对象
	$row = $res->fetch_all(MYSQLI_ASSOC);//对象
	// var_dump($row);

	// // 2.获取总条数
	// 查询数据库
	$sql2 = 'select * from goodslist';

	// 执行sql语句，得到一个字符集
	$res2 = $conn->query($sql2);
	
	$num = $res2->num_rows;//获取总行数
	 // var_dump($num)
	 
	 //把所有要用的数据放在数组里
	 $goodlist = array(
	 	"total" => $num,
	 	"list" => $row,
	 	"page" => $page,
	 	"qty" => $qty
	 );
	 
	// 4.把对象转为字符串传给前端
	echo json_encode($goodlist,JSON_UNESCAPED_UNICODE);//'[{},{},{}]'

	// 关闭资源和数据库
	$res->close();
	$res2->close();
	$conn->close();

?>