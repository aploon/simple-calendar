-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 09 sep. 2022 à 22:54
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `codecanyon_calendar`
--

-- --------------------------------------------------------

--
-- Structure de la table `event`
--

CREATE TABLE `event` (
  `id_event` int(11) NOT NULL,
  `name_event` varchar(255) NOT NULL,
  `description_event` varchar(255) DEFAULT NULL,
  `location_event` varchar(255) DEFAULT NULL,
  `date_start_event` date NOT NULL,
  `date_end_event` date NOT NULL,
  `time_start_event` time DEFAULT NULL,
  `time_end_event` time DEFAULT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `event`
--

INSERT INTO `event` (`id_event`, `name_event`, `description_event`, `location_event`, `date_start_event`, `date_end_event`, `time_start_event`, `time_end_event`, `id_user`) VALUES
(1, 'azerty', '', '', '2022-09-09', '2022-09-10', NULL, NULL, 1),
(2, 'Wedding', '', '', '2022-09-06', '2022-09-07', NULL, NULL, 1),
(3, 'Birthdays', '', '', '2022-09-15', '2022-09-16', '12:13:13', '14:13:13', 1),
(4, 'Graduations', '', '', '2022-09-21', '2022-09-22', NULL, NULL, 1),
(5, 'Services for others', '', '', '2022-09-18', '2022-09-19', '12:00:00', '12:00:00', 1),
(6, 'azerty', '', '', '2022-09-29', '2022-09-30', '12:00:00', '12:00:00', 1),
(7, 'Lorem', '', '', '2022-09-06', '2022-09-06', '11:09:00', '12:09:00', 1),
(8, 'azerty', '', '', '2022-09-06', '2022-09-06', '11:09:00', '12:09:00', 1),
(9, 'azerty', '', '', '2022-10-01', '2022-10-02', '01:01:00', '01:01:00', 1),
(10, 'azerty', '', '', '2022-10-01', '2022-10-01', '12:09:00', '12:09:00', 1),
(11, 'azerty', '', '', '2022-09-24', '2022-09-24', '12:09:00', '12:09:00', 1),
(12, 'qwerty', '', '', '2022-10-07', '2022-10-08', '12:09:00', '12:09:00', 1),
(13, 'lorem aquaty', 'lorem aquaty rem tom', '', '2022-09-09', '2022-09-10', '12:09:00', '13:09:00', 1),
(14, 'azerty', '', '', '2022-09-09', '2022-09-10', NULL, NULL, 1),
(15, 'lorem aquaty rem tom', 'lorem aquaty rem tom', '', '2022-08-28', '2022-08-30', NULL, NULL, 1),
(16, 'lorem upsum', 'lorem aquaty rem tom', '', '2022-08-29', '2022-08-31', NULL, NULL, 1),
(17, 'azerty', '', '', '2022-09-01', '2022-09-02', NULL, NULL, 1),
(18, '', '', '', '2022-09-07', '2022-09-08', '01:01:00', '01:01:00', 1),
(19, 'za', '', '', '2022-09-02', '2022-09-03', '12:09:00', '12:09:00', 1),
(20, 'zo', '', '', '2022-09-27', '2022-09-28', '12:09:00', '12:09:00', 1),
(21, 'zi', '', '', '2022-10-04', '2022-10-05', '12:09:00', '12:09:00', 1),
(22, 'zertyuiop', 'sdfghjklm', '', '2022-09-09', '2022-09-09', '12:09:00', '12:09:00', 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `name_user` varchar(255) NOT NULL,
  `email_user` varchar(255) NOT NULL,
  `password_user` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id_user`, `name_user`, `email_user`, `password_user`) VALUES
(1, 'Arnaud', 'arnaudadjovi274@gmail.com', '5551666'),
(2, 'Bruno', 'bruno@gmail.com', '5551666'),
(3, 'ariano', 'ariano@gmail.com', '5551666'),
(10, 'Arnaud', 'arnaudadjovi@gmail.com', '5551666');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id_event`),
  ADD KEY `id_user` (`id_user`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email_user` (`email_user`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `event`
--
ALTER TABLE `event`
  MODIFY `id_event` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `event`
--
ALTER TABLE `event`
  ADD CONSTRAINT `fk_event_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
