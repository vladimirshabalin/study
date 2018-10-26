<?php

$file = file_get_contents('main.html');

$date = date("Y");

$file = str_ireplace('{{DATA}}', "$date", $file);

echo $file;