-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 06 2018 г., 15:24
-- Версия сервера: 10.1.36-MariaDB
-- Версия PHP: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `test`
--

-- --------------------------------------------------------

--
-- Структура таблицы `img`
--

CREATE TABLE `img` (
  `id` int(100) NOT NULL COMMENT 'Уникальный номер',
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Имя картинки',
  `size_large` int(10) NOT NULL COMMENT 'Размер в КБ',
  `size_small` int(10) NOT NULL COMMENT 'Размер в КБ',
  `url_large` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Ссылка на Б. версию',
  `url_small` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Ссылка на М. версию',
  `views` int(10) NOT NULL DEFAULT '0' COMMENT 'Кол-во просмотров'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Таблица для картинок';

--
-- Дамп данных таблицы `img`
--

INSERT INTO `img` (`id`, `name`, `size_large`, `size_small`, `url_large`, `url_small`, `views`) VALUES
(23, '-Q-kTAyPHB0.jpg', 377, 18, 'img/-Q-kTAyPHB0.jpg', 'img_small/-Q-kTAyPHB0.jpg', 5),
(24, '1013617.jpg', 295, 16, 'img/1013617.jpg', 'img_small/1013617.jpg', 6),
(25, '198-vestminsterskij-most-temza-oboi-1366x768.jpg', 156, 10, 'img/198-vestminsterskij-most-temza-oboi-1366x768.jpg', 'img_small/198-vestminsterskij-most-temza-oboi-1366x768.jpg', 4),
(26, '2fons.ru-18412.jpg', 602, 17, 'img/2fons.ru-18412.jpg', 'img_small/2fons.ru-18412.jpg', 1),
(27, 'Beautiful-night-view-of-the-city-high-rise-buildings-bridge-river-lights_1366x768.jpg', 337, 15, 'img/Beautiful-night-view-of-the-city-high-rise-buildings-bridge-river-lights_1366x768.jpg', 'img_small/Beautiful-night-view-of-the-city-high-rise-buildings-bridge-river-lights_1366x768.jpg', 0),
(28, 'Calm-lake-scenery_1366x768.jpg', 342, 15, 'img/Calm-lake-scenery_1366x768.jpg', 'img_small/Calm-lake-scenery_1366x768.jpg', 0),
(29, 'Paris-1366x768-098.jpg', 471, 17, 'img/Paris-1366x768-098.jpg', 'img_small/Paris-1366x768-098.jpg', 0),
(30, 'earlybird_14_9464_oboi_bolotistaja_mestnost_1366x768.jpg', 363, 17, 'img/earlybird_14_9464_oboi_bolotistaja_mestnost_1366x768.jpg', 'img_small/earlybird_14_9464_oboi_bolotistaja_mestnost_1366x768.jpg', 0),
(31, 'motto.net.ua-38475.jpg', 539, 14, 'img/motto.net.ua-38475.jpg', 'img_small/motto.net.ua-38475.jpg', 0),
(32, 'nastol.com.ua-273418.jpg', 409, 14, 'img/nastol.com.ua-273418.jpg', 'img_small/nastol.com.ua-273418.jpg', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `img`
--
ALTER TABLE `img`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `img`
--
ALTER TABLE `img`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT COMMENT 'Уникальный номер', AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
