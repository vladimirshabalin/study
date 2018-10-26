<?php

include_once '3.php';

function mathOperation($arg1, $arg2, $operation)
{
    switch ($operation) {
        case "difference";
            return difference($arg1, $arg2);
        case "sum";
            return sum($arg1, $arg2);
        case "multiply";
            return multiply($arg1, $arg2);
        case "split";
            return split($arg1, $arg2);
    }
}

echo 'difference = ' . mathOperation($a, $b, "difference") . '<br>';
echo 'sum = ' . mathOperation($a, $b, "sum") . '<br>';
echo 'multiply = ' . mathOperation($a, $b, "multiply") . '<br>';
echo 'split = ' . mathOperation($a, $b, "split") . '<br>';
