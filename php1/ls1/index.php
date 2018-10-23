<?php
$title = 'Document';
$headline = 'Гость, добро пожаловать к нам на сайт!';
$date = date("Y-m-d H:i:s");
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title><?php echo $title; ?></title>
</head>
<body>
    <h1><?php echo $headline; ?></h1>
    <p><?php echo $date; ?></p>
<!--Можно вывести через 1 echo, но тогда в html коде не будет нормальных отступов.
    Собственно такой вариант мне нравится больше, но как правильно я не знаю, надеюсь на уроке расскаже.-->
<?php //echo "<h1>$headline</h1> <p>$date</p>"; ?>
</body>
</html>