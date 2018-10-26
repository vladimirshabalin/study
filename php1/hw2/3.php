<?php

$a = rand(-10, 10);
$b = rand(-10, 10);

echo '$a = ' . $a . '<br>';
echo '$b = ' . $b . '<br>';

echo '$a - $b = ' . difference($a,$b) . '<br>';
echo '$a + $b = ' . sum($a,$b) . '<br>';
echo '$a * $b = ' . multiply($a,$b) . '<br>';
echo '$a / $b = ' . split($a,$b) . '<br>';


function difference($a, $b)
{
    return $a - $b;
}

function sum($a, $b)
{
    return $a + $b;
}

function multiply($a, $b)
{
    return $a * $b;
}

function split($a, $b)
{
    return $a / $b;
}