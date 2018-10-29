<?php

$test = 'привет мир!';

function transliteration($str)
{
    $letters = array(
        "а" => "a",
        "б" => "b",
        "в" => "v",
        "г" => "g",
        "д" => "d",
        "е" => "e",
        "ё" => "yo",
        "ж" => "zh",
        "з" => "z",
        "и" => "i",
        "й" => "y",
        "к" => "k",
        "л" => "l",
        "м" => "m",
        "н" => "n",
        "о" => "o",
        "п" => "p",
        "р" => "r",
        "с" => "s",
        "т" => "t",
        "у" => "u",
        "ф" => "f",
        "х" => "h",
        "ц" => "ts",
        "ч" => "ch",
        "ш" => "sh",
        "щ" => "s'h",
        "ъ" => "",
        "ы" => "i",
        "ь" => "'",
        "э" => "e",
        "ю" => "yu",
        "я" => "ya"
    );

    $result = strtr($str, $letters);
    echo $result;

}

transliteration($test);