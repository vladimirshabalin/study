<?php
$title = 'Document';
$headline = 'Гость, добро пожаловать к нам на сайт!';
$date = date("d.m.Y");
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title><?php echo $title; ?></title>
</head>
<body>
    <h1><?php echo $headline; ?></h1>
    <p>Сегодня <?php echo $date; ?></p>
</body>
</html>