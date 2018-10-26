<?php

$hour = date('H');
$min = date('i');

echo getTime($hour, $min);

function calc($number, $array)
{
    if ($number >= 11 and $number <= 14) {
        return "$number $array[2]";
    }

    $newNumber = $number % 10;

    if ($newNumber === 1) {
        return "$number $array[0]";
    }

    if ($newNumber >= 2 and $newNumber <= 4) {
        return "$number $array[1]";
    }

    return "$number $array[2]";
}

function getTime($hour, $minutes)
{
    $hourArray = ['час', 'часа', 'часов'];
    $minArray = ['минута', 'минуты', 'минут'];

    $hour = calc($hour, $hourArray);
    $minutes = calc($minutes, $minArray);

    return $hour . ' '  . $minutes;
}

