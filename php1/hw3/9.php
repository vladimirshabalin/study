<?php

$test = 'тестовое название какойто статьи из блога!';

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
        "щ" => "sh",
        "ъ" => "",
        "ы" => "i",
        "ь" => "",
        "э" => "e",
        "ю" => "yu",
        "я" => "ya"
    );

    $reSpace = strtr($str, $letters);

    $result = preg_replace('/\s/', '_', $reSpace );

    echo $result;
}

transliteration($test);