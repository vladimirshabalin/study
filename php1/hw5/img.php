<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		$link = mysqli_connect('localhost', 'root', '', 'test') or die(mysqli_error($link));

		$id = $_GET['id'];

		if ( !empty($link) && !empty($id)) {
			// увеличиваем кол-во просмотров на 1
			$sql = "UPDATE img SET views = views + 1 WHERE id = $id";
			$res = mysqli_query($link, $sql);
			// получаем данные из БД
			$sql = "SELECT url_large, views FROM img WHERE id = $id";
			$res = mysqli_query($link, $sql);
			$row = mysqli_fetch_assoc($res);
			// заполняем переменные
			$url_large = $row['url_large'];
      $views = $row['views'];
			// выводим изображение
			echo "<img src=$url_large><br>";
			echo "<h1>Кол-во просмотров: $views</h1>";
		}
	?>
</body>
</html>