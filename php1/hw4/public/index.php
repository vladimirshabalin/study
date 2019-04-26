<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .gallery {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        a {
            display: block;
            margin: 10px;
        }
    </style>
</head>
<body>

<div class="gallery">
    <?php
    $dir = 'img/';
    $images = scandir($dir);
    for ($i = 0; $i < count($images); $i++) {
        if ($images[$i] != '.' && $images[$i] != '..') {
            echo '<a href="' . $dir . $images[$i] . '" target="_blank"><img src=' . $dir . $images[$i] . ' style="width: 150px;"></a>';
        }
    }
    ?>
</div>

</body>
</html>