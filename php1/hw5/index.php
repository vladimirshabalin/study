<?php

$link = mysqli_connect('localhost', 'root', 'root', 'test') or die(mysqli_error($link));

// Добавляем картинки в БД
if (!empty($_GET['action'])) {
    // получаем массивы с картинками
    $dirOrigImg = "img";
    $dirSmallImg = "img_small";
    $images_small = scandir($dirSmallImg);
    $images_original = scandir($dirOrigImg);
    // перебираем все картинки в массиве
    foreach ($images_small as $image) {
        // проверяем наличие изображения с таким же именем в оригинале
        if ($image !== '.' && $image !== '..' && in_array($image, $images_original, true)) {
            // заполняем переменные
            $url_large = "$dirOrigImg/$image";
            $url_small = "$dirSmallImg/$image";
            $size_large = (int) filesize($url_large) / 1024;
            $size_small = (int) filesize($url_small) / 1024;
            // создаем SQL-запрос
            $sql = "INSERT INTO img (name, size_large, size_small, url_large, url_small)
									 VALUES ('$image', '$size_large', '$size_small', '$url_large', '$url_small')";
            // отправляем запрос
            mysqli_query($link, $sql);
        }
    }

    header('Location: /test ');
    exit;
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<!-- Выводим все картинки используя БД -->
<?php
$sql = "SELECT id, url_small, views FROM img";
$res = mysqli_query($link, $sql);
$arrResult = [];
$arrViews = [];

while ($row = mysqli_fetch_assoc($res)) {
    // заполняем переменные
    if (!empty($row)) {
        $id = $row['id'];
        $url_small = $row['url_small'];
        $views = $row['views'];
				$result = "<a href='img.php?id=$id' target=_blank><img src=$url_small></a><p>Просмотров: $views</p><hr align=left width=150><br>";
    }
		// заполняем массивы
		$arrResult[] = $result;
		$arrViews[] = $views;
}

// сортируем массивы
// массив "$arrResult" будет отсортирован как "$arrViews"
array_multisort($arrViews, SORT_DESC, $arrResult);

// выводим все изображения
foreach ($arrResult as $value) {
	echo $value;
}
?>

	<!-- Добавляем картинки в БД -->
	<form action="">
		<input type="hidden" name="action" value="1">
		<input type="submit" value="Добавить картики в БД">
	</form>
	<hr>

</body>
</html>

<?php
echo "<br><br>The End";
?>