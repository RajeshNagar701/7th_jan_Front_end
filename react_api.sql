-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 20, 2022 at 09:27 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `admin_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `status` enum('Block','Unblock') NOT NULL DEFAULT 'Unblock'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`admin_id`, `name`, `email`, `password`, `token`, `status`) VALUES
(1, 'admin', 'admin@gmail.com', '$2y$10$9z0nBXokg9TMzwOLNXgpD.SH3W5MgpO5PRiRAkYgbR1ahr1wUvq72', '$2y$10$kt29z0L79qjuVLolAse42uZkdpsOwZsNpFUEVF2HrkQJRQb30OuM.', 'Unblock');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `file` varchar(255) DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `status` enum('Unblock','Block') NOT NULL DEFAULT 'Unblock'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `email`, `password`, `file`, `token`, `status`) VALUES
(5, 'rajesh', 'rajesh@gmail.com', '$2y$10$6amGqJIGJoR2K3K7qDbFkeooYtNpMHAIR4SxdQksovod1RRh/99ea', NULL, '$2y$10$bJqpCmusFR9kU2zIyr8y/OQiwgAVd/03rJBwTnRi2ERBX7XJLxcF2', 'Block'),
(10, 'Pavan', 'pavan@gmail.com', '$2y$10$zfcygoKPH0KbLnx7wzt4ROBKbv29vXUcFYn.XKFJRPpcsnyAoE4ra', NULL, '$2y$10$mXIOfe6HaLQSk89dbn2JlOlxmDTFjTrz7Xs/zyG2.JS3qItsMEkZe', 'Unblock'),
(11, 'sdsa ggfdg', 'rajeshnagarn@gmail.com', '$2y$10$rBd.jCMV0dFt5BtK8y.gHOgJuyF/BhBrpF7C7swrAcJZSTaWmVQdW', NULL, '$2y$10$XkH4QkL3re862wz4hh3lk.im5TnHTOgKqWDXso1HfNwsdIctkqBzK', 'Unblock'),
(14, 'asdsd', 'asdas@gmail.com', '$2y$10$XAL07DZkaCEh8p8khNWsqOBMA8RaISB/ixRZUtDNOaEruN2Xjgdja', 'C:\\fakepath\\cycle-800x500-1.jpeg', '$2y$10$2gviOEDud331YpL4FcY.WOwy9dgsR6mbHpNvVy2u3luYnWEuzMcj6', 'Unblock'),
(15, 'dsfdsf', 'dfdf@gmail.com', '$2y$10$/wpJnhooINkR0xq8WO0hX.n2OKe.WEyxD3NcAX9HHycDn8EQ1LrqC', 'dandeliwildzone-21092021-0001.jpg', '$2y$10$su8.Aq0em30Ji/o42G0rDelqq7zgvLqTARh9bxdNnhyFpCyljj9Tq', 'Unblock'),
(17, 'rajesh', 'rajesh@gmail.com', '$2y$10$7VCfXKZl840yL7yj7xBegufjyfEOrDCke50H4fkwz9lZZGNmDSSVO', NULL, '$2y$10$EcJcIydNPezG7BFlDskzkeE7IgrUK6FzmJMfQhatmONdVmg5F0QHW', 'Unblock'),
(18, 'rajesh vxfcvxcv', 'rajesh@gmail.com', '$2y$10$rS/IAbcUfKlnoeXDCXok5uVPS.Lm9//ldl3uq6Oak5QBbVUc6YkjS', NULL, '$2y$10$CEWsgFD23siOIu4e3j8thuamXM9IAHuNfgR6c7XH3r7IUsU7z/vl.', 'Unblock'),
(19, 'rajesh vxfcvxcv', 'rajesh@gmail.com', '$2y$10$99DeAXJwfxsr4/Im7tSdoO77CiCMotmAVFoc2lzjOQhJPbzXLyjqm', NULL, '$2y$10$EYmfpIZe6HP0l9Qf1h4Ue.lsQf.OXvp1QpC/NsjSPL1CIERZu65QS', 'Unblock'),
(20, 'rajesh vxfcvxcv', 'rajesh@gmail.com', '$2y$10$vv6uCphppQ4u94oMrcxM9.33frz.o8mbocLoErHe9o6AFkr.rLdjq', NULL, '$2y$10$u1GMtcMrBbQQDxHZDpnDy.zMkvxnHnJRqx83s3So3.ygx6RBE6AOq', 'Unblock');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
