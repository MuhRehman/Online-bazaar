-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2024 at 10:01 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bazaar_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `productinfo`
--

CREATE TABLE `productinfo` (
  `id` int(5) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productsinfo`
--

CREATE TABLE `productsinfo` (
  `id` int(5) NOT NULL,
  `pname` varchar(255) NOT NULL,
  `pmname` varchar(255) NOT NULL,
  `pmodel` varchar(255) NOT NULL,
  `ptype` varchar(255) NOT NULL,
  `pprice` varchar(255) NOT NULL,
  `pimg` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productsinfo`
--

INSERT INTO `productsinfo` (`id`, `pname`, `pmname`, `pmodel`, `ptype`, `pprice`, `pimg`) VALUES
(4, 'Watch', 'Apple', '2009', 'gadgets', '300$', 'apple-sport-gold-apple-watch.png'),
(5, 'camera', 'canon', '2002', 'gadgets', '1000$', 'camera.png'),
(6, 'GO pro', 'deniem', '2010', 'gadgets', '500$', 'd9bbb5b06b5e4555adf4ee89ce047b77.png'),
(7, 'Iphone', 'apple', '2015', 'gadgets', '40$', 'FotoJet-209-635x430.jpg'),
(8, 'pents', 'levies', '2020', 'cloth', '12$', 'pents.jpg'),
(9, 't-shirt', 'aljannat', '2018', 'cloth', '30$', 't-shirt.jpg'),
(10, 'headphone', 'divcs', '2024', 'gadgets', '55$', 'Sennhei.png'),
(11, 'tiger', 'bollywood', '2022', 'movies', '5$', 'tiger.png'),
(12, 'prime', 'gollo', '2024', 'games', '4$', 'prime.png'),
(13, 'Pop-G', 'G-Start', '2019', 'cloth', '2$', 'popg.png'),
(14, 'Canon', 'dudes', '2003', 'games', '12$', 'cannon.png'),
(15, 'Suff', 'G-class', '2021', 'games', '$224', 'suff.png'),
(16, 'Hulu', 'hollywood', '2002', 'movies', '3$', 'hulu.png'),
(17, 'Avatar', 'hollywood', '2012', 'movies', '13$', 'avatar.png'),
(18, 'Bear', 'hollywood', '2021', 'movies', '122$', 'bear.png'),
(19, 'Inception', 'hollywood', '2014', 'movies', '200$', 'inception.png'),
(20, 'Talee', 'tamil', '2002', 'shows', '1$', 'taleee.png'),
(21, 'TV Daram', ' tulo', '2023', 'shows', '4$', 'rock.png'),
(22, 'Vearityl', 'Valaimtam', '2002', 'shows', '2$', 'varity.png'),
(23, 'LCD monitor', 'LG', '2021', 'gadgets', '40$', 'lcd-monitor.png'),
(24, 'keyboard', 'Dell', '2022', 'gadgets', '20$', 'keyboard.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(132, 'rehman', 'paki_jan@yahoo.com', '123'),
(133, 'rehman', 'askrehman1@gmail.com', 'a'),
(135, 'don', 'don@gmail.com', '123'),
(136, 'rehman', 'askrehman1@gmail.com', '123'),
(137, 'rehman', 'paki_jan@yahoo.com', '123'),
(138, 'rehman', 'paki_jan111@yahoo.com', '123'),
(139, 'aa', 'aa', 'aa'),
(140, 'jdkfkdjbk', 'kjkk', '123'),
(141, '11111111111', '1111111111', '11'),
(142, 'rehman', 'paki_jan@yahoo.com', '123'),
(143, 'paki_jan@yahoo.com', 'paki_jan@yahoo.com', '123'),
(144, 'paki_jan@yahoo.com', 'paki_jan@yahoo.com', '123'),
(145, 'askrehman1@gmail.com', 'askrehman1@gmail.com', '123'),
(146, 'moon', 'm.rehman5353@gmail.com', '123'),
(147, 'claver.coder', 'claver.coder@gmail.com', '123'),
(148, 'paki_jan@yahoo.com', 'paki_jan@yahoo.com', '123'),
(149, 'm.rehman5353@gmail.com', 'm.rehman5353@gmail.com', '123'),
(150, 'abdulrehman1@aol.com', 'abdulrehman1@aol.com', '123'),
(151, 'moonrehman44@gmail.com', 'moonrehman44@gmail.com', '123'),
(152, 'claver.coder@gmail.com', 'claver.coder@gmail.com', '123'),
(153, 'choriod.solution@gmail.com', 'choriod.solution@gmail.com', '123'),
(154, 'choroid.solution@gmail.com', 'choroid.solution@gmail.com', '123'),
(155, 'choroid.solution@gmail.com', 'choroid.solution@gmail.com', '123'),
(156, 'bc170403299@vu.edu.pk', 'bc170403299@vu.edu.pk', '123'),
(157, 'rehman', 'paki_jan@yahoo.com', '123'),
(158, 'paki_jan@yahoo.com', 'paki_jan@yahoo.com', '123'),
(159, 'dd', 'askrehman1@gmail.com', '123'),
(160, 'askrehman1@gmail.com', 'askrehman1@gmail.com', 'SS'),
(161, 'rehman', 'paki_jan@yahoo.com', '123'),
(162, 'Rehman', 'paki_jan@yahoo.com', '123'),
(163, 'choroid solution', 'choroid.solution@gmail.com', '123'),
(164, 'Abdul Rehman', 'abdulrehman1@aol.com', '123'),
(165, 'rehman', 'mrehman@broadpeak.pk', '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `productinfo`
--
ALTER TABLE `productinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productsinfo`
--
ALTER TABLE `productsinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `productinfo`
--
ALTER TABLE `productinfo`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productsinfo`
--
ALTER TABLE `productsinfo`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=166;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
