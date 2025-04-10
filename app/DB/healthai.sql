-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 10 avr. 2025 à 09:55
-- Version du serveur : 9.1.0
-- Version de PHP : 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `healthai`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `ID_A` int NOT NULL AUTO_INCREMENT,
  `Firstname` varchar(100) NOT NULL,
  `Lastname` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  PRIMARY KEY (`ID_A`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`ID_A`, `Firstname`, `Lastname`, `Email`, `Password`) VALUES
(1, 'nagham', 'yahia', 'nagham@gmail.com', '$2b$10$fpJpbjgXAmdIGoOeRx8fs.zDdJFqgWH0XJw0.xBbh/4UGGJRy0aa.');

-- --------------------------------------------------------

--
-- Structure de la table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
CREATE TABLE IF NOT EXISTS `appointment` (
  `ID_App` int NOT NULL AUTO_INCREMENT,
  `patient_id` int DEFAULT NULL,
  `family_fname` varchar(50) DEFAULT NULL,
  `family_lname` varchar(50) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `status` enum('Pending','Confirmed','Cancelled') DEFAULT 'Pending',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`ID_App`),
  KEY `patient_id` (`patient_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `appointment`
--

INSERT INTO `appointment` (`ID_App`, `patient_id`, `family_fname`, `family_lname`, `date`, `time`, `notes`, `status`, `created_at`, `phone`, `email`) VALUES
(5, 1, 'souha', 'douas', '2025-04-10', '14:52:00', NULL, 'Pending', '2025-04-09 12:58:57', '0796626512', 'souha@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `patient`
--

DROP TABLE IF EXISTS `patient`;
CREATE TABLE IF NOT EXISTS `patient` (
  `ID_P` int NOT NULL AUTO_INCREMENT,
  `Firstname` varchar(100) NOT NULL,
  `Lastname` varchar(100) NOT NULL,
  `DateOfBirth` date DEFAULT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Gender` enum('Male','Female') DEFAULT NULL,
  `Phone` varchar(20) DEFAULT NULL,
  `accountType` enum('Standard','Premium') DEFAULT 'Standard',
  `address` text,
  `location` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_P`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `patient`
--

INSERT INTO `patient` (`ID_P`, `Firstname`, `Lastname`, `DateOfBirth`, `Email`, `Password`, `Gender`, `Phone`, `accountType`, `address`, `location`, `created_at`) VALUES
(1, 'souha', 'douas', '2004-12-20', 'souha@gmail.com', '$2b$10$MHR3VAIY7fPhcAwAvgq3bOkadxBMYeDlkq1gypeLyWweDr4MM/6GW', 'Female', NULL, 'Standard', NULL, NULL, '2025-04-05 22:41:30'),
(2, 'soundous', 'bensaad', '2003-06-07', 'sounds@gmail.com', '$2b$10$/16H5guK1DMrbfGpIuOOXeRlB.zA4Uz6OxHNBP6BrFb73iF1Rl3E.', 'Female', NULL, 'Standard', NULL, NULL, '2025-04-05 22:41:30'),
(3, 'anfel', 'yaici', '2003-06-14', 'anfel@gmail.com', '$2b$10$GMBkEXky8rQc5A77tp8Y5.fOaMWagrv1CZJKqb0gfI/Xd1y9ahZvq', 'Female', NULL, 'Standard', NULL, NULL, '2025-04-05 22:41:30'),
(4, 'assala', 'manaa', '2004-10-09', 'assala@gmail.com', '$2b$10$ezOCZviZEWqoDO4V455nxu0vrlj..3bc5rkNq1goS3cyTnyfDGDDq', 'Female', NULL, 'Standard', NULL, NULL, '2025-04-05 22:41:30'),
(5, 'anfel', 'marmi', '0004-01-11', 'anfelmarmi@gmail.com', '$2b$10$6nWTjoHEDhQLIrEjfe3qZ.GM1ATFXRsyhb.WqsCQQ/YgXoA/ifsiC', 'Female', NULL, 'Standard', NULL, NULL, '2025-04-05 22:41:30'),
(6, 'louai', 'yahia', '2009-09-11', 'louai@gmail.com', '$2b$10$IWkitYRXGqMrPs47Jrj2a.VK4//vHf6ZU0GC3yJc/5mieL4GJEBgS', 'Male', NULL, 'Standard', NULL, NULL, '2025-04-05 22:41:30'),
(15, 'taim', 'yahia', '2019-03-24', 'taim@gmail.com', '$2b$10$Amgv437XuWflg5uYTVR72OGXVPvvt4pq4JQ3ooCa7VK6DMKPy3cZa', 'Male', NULL, 'Standard', NULL, NULL, '2025-04-06 18:32:59'),
(16, 'khouloud', 'douas', '2005-12-04', 'khouloud@gmail.com', '$2b$10$nfyEhLo5T3rcbRxk46h4BuJI2gYb.r8uTD9FxEiloRAwJdYrRPZkO', 'Female', NULL, 'Standard', NULL, NULL, '2025-04-06 22:13:55');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
