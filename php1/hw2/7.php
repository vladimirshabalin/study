<?php

$hour = date('H');
$min = date('i');

echo getTime($hour, $min);

function calc($num)
{
    if ($num >= 11 and $num <= 14) {
        return ["$num часов", "$num минут"];
    }

    $fmod = $num % 10;

    if ($fmod === 1) {
        return ["$num час", "$num минута"];
    }

    if ($fmod >= 2 and $fmod <= 4) {
        return ["$num часа", "$num минуты"];
    }

    return ["$num часов", "$num минут"];
}

function getTime($hour, $min)
{
    $hour = calc($hour)[0];
    $min = calc($min)[1];

    return $hour . ' ' . $min;
}