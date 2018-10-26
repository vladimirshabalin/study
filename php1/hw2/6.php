<?php

function power($val, $pow)
{
    if ($val === 0 and $pow === 0) {
        return 'Так делать нельзя';
    }
    if ($val === 0) {
        return 1;
    }
    if ($pow > 0) {
        return $val * power($val, $pow - 1);
    }
    if ($pow < 0) {
        return 1 / power($val, $pow - $pow * 2);
    }
    return 1;
}

echo power(3, 3);