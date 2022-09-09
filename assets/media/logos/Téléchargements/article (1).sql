-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 05 sep. 2022 à 21:46
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
-- Base de données : `redac_ap`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `id_article` int(11) NOT NULL,
  `titre_article` varchar(255) NOT NULL,
  `brief_article` text NOT NULL,
  `brief_text_article` text NOT NULL,
  `statut_article` enum('en attente','en cour','termine','modification','valide') NOT NULL,
  `acces_article` enum('public','prive','equipe') NOT NULL,
  `delai_article` int(11) NOT NULL,
  `correction_article` text NOT NULL,
  `date_begin_article` datetime DEFAULT NULL,
  `date_end_article` datetime DEFAULT NULL,
  `date_valide_article` datetime DEFAULT NULL,
  `created_at_article` datetime NOT NULL,
  `updated_at_article` datetime NOT NULL,
  `id_correcteur` int(11) NOT NULL,
  `id_redacteur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id_article`, `titre_article`, `brief_article`, `brief_text_article`, `statut_article`, `acces_article`, `delai_article`, `correction_article`, `date_begin_article`, `date_end_article`, `date_valide_article`, `created_at_article`, `updated_at_article`, `id_correcteur`, `id_redacteur`) VALUES
(null, 'Comment manger de la glace à la fraise', 'Lorem upsum reum fulm jummo loirem upsum reum fulm jum upsum reum fulm jumupsum reum fulm jum upsum reum fulm jum.', 'Lorem upsum reum fulm jummo loirem upsum reum fulm jum upsum reum fulm jumupsum reum fulm jum upsum reum fulm jum.', 'en attente', 'public', 24, 'Lorem upsum reum fulm jummo loirem upsum reum fulm jum upsum reum fulm jumupsum reum fulm jum upsum reum fulm jum.', '2022-09-03 16:44:52', '2022-08-22 06:41:47', NULL, '2022-08-01 10:41:47', '2022-08-01 20:41:47', 1, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id_article`),
  ADD KEY `id_correcteur` (`id_correcteur`,`id_redacteur`),
  ADD KEY `fk_article_redacteur` (`id_redacteur`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `id_article` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=257;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `fk_article_correcteur` FOREIGN KEY (`id_correcteur`) REFERENCES `correcteur` (`id_correcteur`),
  ADD CONSTRAINT `fk_article_redacteur` FOREIGN KEY (`id_redacteur`) REFERENCES `redacteur` (`id_redacteur`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
