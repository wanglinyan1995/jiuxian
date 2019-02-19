<?php
	include 'connect.php';
	// //中文乱码
	// header("content-type:text/html;charset=utf-8");

	//接收前端传来的数据
	$name = isset($_POST['name']) ? $_POST['name'] : '';
	

	// 1.查询数据库找到数据(渲染购物车页面)
	$sql = "select * from cart where tel='$name'";//需求
	// ".$tj1." and ".$tj2
	// echo $sql;
	$res = $conn->query($sql);//执行语句
	// var_dump($res)
	
	// // 得到字符集中的某个对象
	$row = $res->fetch_all(MYSQLI_ASSOC);//对象
	// var_dump($row);

	$num = $res->num_rows;//获取总行数
	 // var_dump($num)
	 
	 //把所有要用的数据放在数组里
	 $goodlist = array(
	 	"total" => $num,
	 	"list" => $row
	 );
	 
	// 4.把对象转为字符串传给前端
	echo json_encode($goodlist,JSON_UNESCAPED_UNICODE);//'[{},{},{}]'

	// 关闭资源和数据库
	$res->close();
	$conn->close();
	
?>