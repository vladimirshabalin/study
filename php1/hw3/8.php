<?php

$locate = array(
    'Московская область:' => ['Москва', 'Зеленоград', 'Клин'],
    'Ленинградская область:' => ['Санкт-Петербург', 'Всеволожск', 'Павловск', 'Кронштадт'],
    'Рязанская область:' => ['Рязань', 'Рыбое', 'Поляны', 'Шилово', 'Пителино']
);

foreach ($locate as $key => $value) {
    foreach ($value as $sity => $val) {
        if (substr($val, 0,2) == 'К') {
            echo $val . '<br>';
        }
    }
}