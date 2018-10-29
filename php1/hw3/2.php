<?php

$i = 0;

do {
    if ($i == 0) {
        echo "$i - это ноль<br>";
        $i++;
        continue;
    }
    if ($i % 2 == 0) {
        echo "$i - это четное число<br>";
        $i++;
        continue;
    }
    echo "$i - это нечетное число<br>";
    $i++;
} while ($i <= 10);