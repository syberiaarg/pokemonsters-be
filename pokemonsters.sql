-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 07, 2022 at 12:57 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pokemonsters`
--

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
CREATE TABLE IF NOT EXISTS `teams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstpokemon` varchar(32) NOT NULL,
  `secondpokemon` varchar(32) NOT NULL,
  `thirdpokemon` varchar(32) NOT NULL,
  `fourthpokemon` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `secondname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(80) NOT NULL,
  `teamid` int(11) DEFAULT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `secondname`, `lastname`, `email`, `teamid`, `password`) VALUES
(1, 'Valeria', 'Larisa', 'Figueroa', 'vlf@gmail.com', 0, ''),
(3, 'Nahir', 'Melany', 'Valsi', 'nmv@gmail.com', 1, ''),
(4, 'Maria', 'Laura', 'Santillan', 'mlsantillan@gmail.com', 2, ''),
(5, 'Juan', 'Restuccia', 'Virulana', 'jrviru@hotmail.com', 3, ''),
(6, 'Pepe', 'Carlos', 'Argento', 'pepethecrack@outlook.com', 4, ''),
(2, 'Santiago', NULL, 'Gimenez', 'zero_rz@hotmail.com', 5, ''),
(7, 'La', 'Puta', 'Quetepario', 'lpm@gmail.com', 6, ''),
(37, 'Santicin', 'asd', 'Gimenez', 'mamamequiere@gmail.com', NULL, 'd11bec9226935ad0ac492ceafdeb091d'),
(38, 'Santicin', '', 'Syberita', 'asdf@gmail.com', NULL, 'd11bec9226935ad0ac492ceafdeb091d');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
