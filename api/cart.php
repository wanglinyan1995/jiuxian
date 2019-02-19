<?php
	include 'connect.php';
	// //中文乱码
	// header("content-type:text/html;charset=utf-8");

	//接收前端传来的数据
	$id = isset($_POST['id']) ? $_POST['id'] : '';
	$num = isset($_POST['num']) ? $_POST['num'] : '';
	$name = isset($_POST['name']) ? $_POST['name'] : '';

	// $id = 8;
	// $num = 7;
	// $name = 15270591775;
	
	// 1.查询该 (用户) 有没有添加该 (商品)
	$sql = "select * from cart where tel='$name' and id='$id'";//需求
	
	$res = $conn->query($sql);//执行语句
	// var_dump($res->num_rows);
	if($res->num_rows > 0) {
		// echo 1;//商品存在
		// 存在数据更新商品数量
		
		// 2.查询cart的商品原有数量，然后加上现在的数量 (商品id)(用户名)
		$sql4 = "select * from cart where tel='$name' and id='$id'";
		$res4 = $conn->query($sql4);
		if ($res4->num_rows > 0) {
			// echo "商品存在";
			 while($row = $res4->fetch_assoc()) {
			 	// echo $row["id"],$row["tel"],$row["goodsNum"];
			 	
			 	//3.把更新后的数量重新插入cart表(更新数据)
			 	$x = $num + $row["goodsNum"];
			 	// echo $x;
			 	// update MyGuests set name='Mary' where id=1;
			 	$sql5 = "update cart set goodsNum='$x' where id='$id' and tel='$name'";//需求
			 	if ($conn->query($sql5)) {
				    echo "更新成功";
				} else {
				    echo "Error: " . $sql5 . "<br>" . $conn->error;
				}
			 }
			}else {
			    echo "找到了cart表数据,但没有找到数据";
			}
	} else {
		// echo "商品不存在，可以插入数据";//商品不存在
	
		// 5.不存在插入数据，根据id查询goodslist 表 得到对应商品信息  + 数量 + tel
		$sql2 = "select * from goodslist where id='$id'";
		$res2 = $conn->query($sql2);
		// var_dump($res2->num_rows);//判断是否查询到结果了
		// var_dump($res2->num_rows)
		if ($res2->num_rows > 0) {
		    while($row = $res2->fetch_assoc()) {
		    	//插入数据
		    	// echo $num,$name,$row["id"],$row["name"],$row["price"],$row["nowprice"],$row["num"];
				$sql3 = "insert into cart (id, name, price, nowprice, goodsNum, url01, tel) values ('$row[id]', '$row[name]', '$row[price]', '$row[nowprice]', '$num', '$row[url01]', '$name')";//需求
		    	if ($conn->query($sql3)) {
				    echo "新记录插入成功";
				} else {
				    echo "Error: " . $sql3 . "<br>" . $conn->error;
				}
		    	// echo $num,$name,$row["id"],$row["name"],$row["price"],$row["nowprice"],$row["num"];
		    	// echo "id: " . $row["id"]. " Name: " . $row["name"]. " " . $row["price"]. " " . $row["nowprice"]. " " . $row["num"]. " " . $row["url01"]. "<br>";
		    }
		} else {
		    echo "没有查询到结果";
		}
	}
	
	
	

	// // 关闭资源和数据库
	// $res->close();
	// $res2->close();
	// $conn->close();

?>