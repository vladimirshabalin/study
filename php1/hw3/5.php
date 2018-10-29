<?php

$test = 'п р и вет м и р!';

function replace ($str) {
    return preg_replace('/\s/', '_', $str );
}

echo replace($test);