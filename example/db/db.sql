-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Июл 08 2022 г., 10:47
-- Версия сервера: 5.7.18
-- Версия PHP: 7.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `maggate`
--
CREATE DATABASE IF NOT EXISTS `maggate` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `maggate`;

-- --------------------------------------------------------

--
-- Структура таблицы `ga_products`
--

CREATE TABLE `ga_products` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `gurl` varchar(25) NOT NULL,
  `mdescr` varchar(300) NOT NULL,
  `description` varchar(900) NOT NULL,
  `genre` varchar(50) NOT NULL,
  `platforms` enum('win','lin','mac','ps','xbox','mobi') NOT NULL DEFAULT 'win',
  `data` varchar(25) NOT NULL,
  `companyc` varchar(25) NOT NULL,
  `companyi` varchar(25) NOT NULL,
  `rating` varchar(25) NOT NULL,
  `price` varchar(10) NOT NULL,
  `skidka` varchar(5) NOT NULL,
  `banner` varchar(25) NOT NULL,
  `background` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `ga_products`
--

INSERT INTO `ga_products` (`id`, `name`, `gurl`, `mdescr`, `description`, `genre`, `platforms`, `data`, `companyc`, `companyi`, `rating`, `price`, `skidka`, `banner`, `background`) VALUES
(1, 'Cyberpunk 2077', 'Cyberpunk2077', 'Приключенческая ролевая игра с открытым миром, рассказывающая о киберпанке-наёмнике Ви и борьбе за жизнь в мегаполисе Найт-Сити.', 'Приключенческая ролевая игра с открытым миром, рассказывающая о киберпанке-наёмнике Ви и борьбе за жизнь в мегаполисе Найт-Сити.', 'action,rpg,fantastic,future', 'win', '17 march, 2011', 'cd project', 'cd project', 'pegi rating: 16+', '1999', '50', '83.jpeg', '82.jpg'),
(2, 'Horison Fobidden West', 'HorizonFW', 'Отправьтесь вместе с Элой в путешествие по величественному, но опасному миру Запретного запада, который скрывает новые загадочные угрозы.', 'Отправьтесь вместе с Элой в путешествие по величественному, но опасному миру Запретного запада, который скрывает новые загадочные угрозы.', 'action,rpg,fantastic,future', 'win', '17 march, 2011', 'cd project', 'cd project', 'pegi rating: 16+', '2999', '50', '87.jpg', '87b.jpg'),
(3, 'Nier: Automata', 'NierAutomata', 'Nier: Automata (NieR new project) — это непрямой сиквел NIER, действие которого разворачивается на порабощенной боевыми роботами Земле.', 'Nier: Automata (NieR new project) — это непрямой сиквел NIER, действие которого разворачивается на порабощенной боевыми роботами Земле.', 'action,rpg,fantastic,future', 'win', '17 march, 2011', 'Square Enix', 'Square Enix', 'pegi rating: 16+', '1999', '0', '89.jpg', '82b.jpg'),
(4, 'Elden Ring', 'EldenRing', 'НОВЫЙ ФЭНТЕЗИЙНЫЙ РОЛЕВОЙ БОЕВИК. Восстань, погасшая душа! Междуземье ждёт своего повелителя. Пусть благодать приведёт тебя к Кольцу Элден.', 'НОВЫЙ ФЭНТЕЗИЙНЫЙ РОЛЕВОЙ БОЕВИК. Восстань, погасшая душа! Междуземье ждёт своего повелителя. Пусть благодать приведёт тебя к Кольцу Элден.', 'action,rpg,fantastic,future', 'win', '17 march, 2011', 'Square Enix', 'Square Enix', 'pegi rating: 16+', '3999', '0', '84.jpg', '84.jpg'),
(5, 'FINAL FANTASY VII REMAKE', 'FFVIIR', 'Cloud Strife, бывший оперативник SOLDIER, отправляется в питаемый энергией мако город Midgar. Мир вечной классики FINAL FANTASY VII возрождается, получив новейшую графику, новую боевую систему и дополнительные приключения с Yuffie Kisaragi', 'Cloud Strife, бывший оперативник SOLDIER, отправляется в питаемый энергией мако город Midgar. Мир вечной классики FINAL FANTASY VII возрождается, получив новейшую графику, новую боевую систему и дополнительные приключения с Yuffie Kisaragi', 'action,rpg,fantastic,future', 'win', '17 march, 2011', 'Square Enix', 'Square Enix', 'pegi rating: 16+', '5999', '0', '85.jpg', '85.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `ga_profile`
--

CREATE TABLE `ga_profile` (
  `id` int(255) NOT NULL,
  `login` varchar(255) NOT NULL,
  `rp_opis` varchar(455) NOT NULL DEFAULT '...',
  `kkode` varchar(255) NOT NULL DEFAULT '1',
  `afon` varchar(25) NOT NULL DEFAULT 'default.jpg',
  `avatar` varchar(25) NOT NULL DEFAULT '0.jpg',
  `rating` int(11) NOT NULL DEFAULT '0',
  `contacts` varchar(50) NOT NULL DEFAULT '0',
  `reg_dt` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `ga_profile`
--

INSERT INTO `ga_profile` (`id`, `login`, `rp_opis`, `kkode`, `afon`, `avatar`, `rating`, `contacts`, `reg_dt`) VALUES
(1, 'goddness', '', '5', 'goddness772414591.png', 'goddness1276143135.png', 1, '', ''),
(2, 'babalon', '...', '1', 'babalon529432627.jpeg', 'babalon3150808.jpeg', 0, '0', 'data'),
(3, 'Nier', '...', '1', 'Nier1023571463.png', 'Nier1376199740.jpeg', 0, '0', '2022-02-17');

-- --------------------------------------------------------

--
-- Структура таблицы `ga_tempcart`
--

CREATE TABLE `ga_tempcart` (
  `id` int(11) NOT NULL,
  `uid` varchar(10) NOT NULL,
  `gmurls` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `ga_tempcart`
--

INSERT INTO `ga_tempcart` (`id`, `uid`, `gmurls`) VALUES
(1, '1', ''),
(2, '2', ''),
(3, '3', '');

-- --------------------------------------------------------

--
-- Структура таблицы `ga_userfav`
--

CREATE TABLE `ga_userfav` (
  `id` int(11) NOT NULL,
  `idusers` int(11) NOT NULL,
  `idgames` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `ga_userfav`
--

INSERT INTO `ga_userfav` (`id`, `idusers`, `idgames`) VALUES
(1, 1, '');

-- --------------------------------------------------------

--
-- Структура таблицы `ga_userlib`
--

CREATE TABLE `ga_userlib` (
  `id` int(11) NOT NULL,
  `idusers` int(11) NOT NULL,
  `idgames` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `ga_users`
--

CREATE TABLE `ga_users` (
  `id` int(255) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `npi` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `ga_users`
--

INSERT INTO `ga_users` (`id`, `login`, `password`, `email`, `npi`) VALUES
(1, 'goddness', '60bd6e821957c0e5a6ea5c838c055ab3', '', ''),
(2, 'babalon', 'aa2983ad4e2078c2d72e75caebf8251e', 'example@mail.com', '127.0.0.1'),
(3, 'Nier', '5b1309b46fd20674631bfe4d207f4265', 'example@mail.com', '127.0.0.1');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `ga_products`
--
ALTER TABLE `ga_products`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `ga_profile`
--
ALTER TABLE `ga_profile`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `ga_tempcart`
--
ALTER TABLE `ga_tempcart`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `ga_userfav`
--
ALTER TABLE `ga_userfav`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `ga_userlib`
--
ALTER TABLE `ga_userlib`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `ga_users`
--
ALTER TABLE `ga_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `ga_products`
--
ALTER TABLE `ga_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT для таблицы `ga_profile`
--
ALTER TABLE `ga_profile`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `ga_tempcart`
--
ALTER TABLE `ga_tempcart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `ga_userfav`
--
ALTER TABLE `ga_userfav`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `ga_userlib`
--
ALTER TABLE `ga_userlib`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `ga_users`
--
ALTER TABLE `ga_users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
