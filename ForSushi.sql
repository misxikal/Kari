-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Дек 03 2023 г., 18:42
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ForSushi`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Admin`
--

CREATE TABLE `Admin` (
  `id` int NOT NULL,
  `Name` varchar(255) NOT NULL,
  `PhoneNumber` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Admin`
--

INSERT INTO `Admin` (`id`, `Name`, `PhoneNumber`, `Password`) VALUES
(1, 'Олег', '+7 (992) 929 19-92', '1234');

-- --------------------------------------------------------

--
-- Структура таблицы `Cart`
--

CREATE TABLE `Cart` (
  `id` int NOT NULL,
  `id_User` int NOT NULL,
  `id_Product` int NOT NULL,
  `count` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `Catalog`
--

CREATE TABLE `Catalog` (
  `id` int NOT NULL,
  `id_Office` int NOT NULL,
  `id_Product` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `Employees`
--

CREATE TABLE `Employees` (
  `id` int NOT NULL,
  `Name` varchar(255) NOT NULL,
  `NumberPhone` varchar(255) NOT NULL,
  `Age` int NOT NULL,
  `Post` varchar(255) NOT NULL,
  `id_Office` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Employees`
--

INSERT INTO `Employees` (`id`, `Name`, `NumberPhone`, `Age`, `Post`, `id_Office`) VALUES
(2, 'Гуляев Михаил Станиславович', '+7 (982) 312 23-42', 23, 'Сушист', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `Office`
--

CREATE TABLE `Office` (
  `id` int NOT NULL,
  `nameBar` varchar(255) NOT NULL,
  `id_Admin` int NOT NULL,
  `Address` varchar(255) NOT NULL,
  `numberBar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Office`
--

INSERT INTO `Office` (`id`, `nameBar`, `id_Admin`, `Address`, `numberBar`) VALUES
(2, 'Хуй сосиска', 1, 'ул. Краснооктябрьская 26', '+7 (999) 888 77-66');

-- --------------------------------------------------------

--
-- Структура таблицы `Product`
--

CREATE TABLE `Product` (
  `id` int NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Price` int NOT NULL,
  `Image` varchar(255) NOT NULL,
  `id_Type` int NOT NULL,
  `Descript` varchar(255) NOT NULL,
  `Weight` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Product`
--

INSERT INTO `Product` (`id`, `Name`, `Price`, `Image`, `id_Type`, `Descript`, `Weight`) VALUES
(87, 'test5', 1, 'image1.jpg', 1, 'test1', 1),
(88, 'test6', 1, 'image1.jpg', 1, 'test1', 1),
(89, 'test7', 1, 'image10.jpg', 1, 'test1', 1),
(90, 'test8', 1, 'image10.jpg', 1, 'test1', 1),
(92, 'test10', 1, 'image10.jpg', 1, 'test1', 1),
(93, 'test1', 1, 'image1.jpg', 1, 'test1', 1),
(94, 'test2', 1, 'image1.jpg', 1, 'test1', 1),
(95, 'test3', 1, 'image1.jpg', 1, 'test1', 1),
(96, 'test4', 1, 'image1.jpg', 1, 'test1', 1),
(97, 'test5', 1, 'image1.jpg', 1, 'test1', 1),
(98, 'test6', 1, 'image1.jpg', 1, 'test1', 1),
(99, 'test7', 1, 'image10.jpg', 1, 'test1', 1),
(100, 'test8', 1, 'image10.jpg', 1, 'test1', 1),
(101, 'test9', 1, 'image10.jpg', 1, 'test1', 1),
(102, 'test10', 1, 'image10.jpg', 1, 'test1', 1),
(103, 'test1', 1, 'image1.jpg', 1, 'test1', 1),
(104, 'test2', 1, 'image1.jpg', 1, 'test1', 1),
(105, 'test3', 1, 'image1.jpg', 1, 'test1', 1),
(106, 'test4', 1, 'image1.jpg', 1, 'test1', 1),
(107, 'test5', 1, 'image1.jpg', 1, 'test1', 1),
(108, 'test6', 1, 'image1.jpg', 1, 'test1', 1),
(109, 'test7', 1, 'image10.jpg', 1, 'test1', 1),
(110, 'test8', 1, 'image10.jpg', 1, 'test1', 1),
(111, 'test9', 1, 'image10.jpg', 1, 'test1', 1),
(112, 'test10', 1, 'image10.jpg', 1, 'test1', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `ProductType`
--

CREATE TABLE `ProductType` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `ProductType`
--

INSERT INTO `ProductType` (`id`, `name`) VALUES
(1, 'Роллы'),
(2, 'Пицца'),
(3, 'Бургер'),
(4, 'WOK');

-- --------------------------------------------------------

--
-- Структура таблицы `User`
--

CREATE TABLE `User` (
  `id` int NOT NULL,
  `Name` varchar(255) NOT NULL,
  `SecondName` varchar(255) NOT NULL,
  `NumberPhone` varchar(255) NOT NULL,
  `Score` int DEFAULT NULL,
  `CarColor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `User`
--

INSERT INTO `User` (`id`, `Name`, `SecondName`, `NumberPhone`, `Score`, `CarColor`, `Email`, `Password`) VALUES
(1, 'Женек', 'Манаев', '1234', 600, 'red', '1234', '1234'),
(2, 'куцк', 'уцкцу', 'цуккцу', 2323300, 'green', '3123', '423выв'),
(3, 'ыаыв', 'выаыуа', 'ываыва', 300000, '#ffffff', 'ываыв', '3ааца3'),
(4, 'ыаыва', 'выаыва', 'аывуа', 140000, 'blue', 'ываыв', 'ваыаыв'),
(5, 'ываыв', 'ывав', 'ываыва', 500000, 'white', 'ываыва', 'ываыва'),
(6, 'ываыв', 'аываыв', 'аыва', 60000, 'black', 'ываыв', 'ываыв'),
(7, 'ываы', 'ваыаы', 'ыва', 700, 'gray', 'ывав', 'аываыва'),
(8, 'ываыва', 'ываыва', 'ываыва', 1800, 'light-green', 'ыав', 'ываыва'),
(9, 'аываыва', 'ываываы', 'выываыв', 9, 'purple', 'ыаывыва', 'выаыва'),
(10, 'выаываыа', 'ываыва', 'выаываыва', 101, 'pink', 'авыаыв', 'аываыва'),
(11, 'lol', 'lol', 'lol', 600, 'white', 'lol', 'lol'),
(12, 'test', 'test', 'test', NULL, NULL, 'test@test', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Admin`
--
ALTER TABLE `Admin`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `Cart`
--
ALTER TABLE `Cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_Product` (`id_Product`),
  ADD KEY `id_User` (`id_User`);

--
-- Индексы таблицы `Catalog`
--
ALTER TABLE `Catalog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_Office` (`id_Office`),
  ADD KEY `id_Product` (`id_Product`);

--
-- Индексы таблицы `Employees`
--
ALTER TABLE `Employees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_Office` (`id_Office`);

--
-- Индексы таблицы `Office`
--
ALTER TABLE `Office`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_Admin` (`id_Admin`);

--
-- Индексы таблицы `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_Type` (`id_Type`);

--
-- Индексы таблицы `ProductType`
--
ALTER TABLE `ProductType`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Admin`
--
ALTER TABLE `Admin`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `Cart`
--
ALTER TABLE `Cart`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `Catalog`
--
ALTER TABLE `Catalog`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `Employees`
--
ALTER TABLE `Employees`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `Office`
--
ALTER TABLE `Office`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `Product`
--
ALTER TABLE `Product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT для таблицы `ProductType`
--
ALTER TABLE `ProductType`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `User`
--
ALTER TABLE `User`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `Cart`
--
ALTER TABLE `Cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`id_Product`) REFERENCES `Product` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`id_User`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `Catalog`
--
ALTER TABLE `Catalog`
  ADD CONSTRAINT `catalog_ibfk_1` FOREIGN KEY (`id_Office`) REFERENCES `Office` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `catalog_ibfk_2` FOREIGN KEY (`id_Product`) REFERENCES `Product` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `Employees`
--
ALTER TABLE `Employees`
  ADD CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`id_Office`) REFERENCES `Office` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `Office`
--
ALTER TABLE `Office`
  ADD CONSTRAINT `office_ibfk_1` FOREIGN KEY (`id_Admin`) REFERENCES `Admin` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `Product`
--
ALTER TABLE `Product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id_Type`) REFERENCES `ProductType` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
