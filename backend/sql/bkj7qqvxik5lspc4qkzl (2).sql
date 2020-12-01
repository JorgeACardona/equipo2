-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bkj7qqvxik5lspc4qkzl-mysql.services.clever-cloud.com:3306
-- Generation Time: Nov 30, 2020 at 09:21 PM
-- Server version: 8.0.15-5
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bkj7qqvxik5lspc4qkzl`
--

-- --------------------------------------------------------

--
-- Table structure for table `calificaciones`
--

CREATE TABLE `calificaciones` (
  `id_calificacion` int(60) NOT NULL,
  `matematicas` decimal(5,0) DEFAULT NULL,
  `fisica` decimal(5,0) DEFAULT NULL,
  `español` decimal(5,0) DEFAULT NULL,
  `periodo` int(1) NOT NULL,
  `estudiante` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `calificaciones`
--

INSERT INTO `calificaciones` (`id_calificacion`, `matematicas`, `fisica`, `español`, `periodo`, `estudiante`) VALUES
(1, NULL, NULL, NULL, 4, NULL),
(2, NULL, NULL, NULL, 4, NULL),
(3, NULL, NULL, NULL, 4, NULL),
(4, '4', '3', '4', 4, 'Camilo');

-- --------------------------------------------------------

--
-- Table structure for table `cursa`
--

CREATE TABLE `cursa` (
  `id_cursa` int(60) NOT NULL,
  `cod_materia` int(11) DEFAULT NULL,
  `id_estudiante` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cursa`
--

INSERT INTO `cursa` (`id_cursa`, `cod_materia`, `id_estudiante`) VALUES
(101, 1001, 1234567891),
(102, 1002, 1023622440),
(103, 1003, 1000548955);

-- --------------------------------------------------------

--
-- Table structure for table `docente`
--

CREATE TABLE `docente` (
  `id_docente` int(60) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `apellido` varchar(60) NOT NULL,
  `grado` int(5) NOT NULL,
  `area` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `docente`
--

INSERT INTO `docente` (`id_docente`, `nombre`, `apellido`, `grado`, `area`) VALUES
(123, 'Jhon Jairo', 'Sanclemente', 11, 'Matemáticas'),
(456, 'Julián', 'Medina', 11, 'Física'),
(789, 'Jimena', 'Vergara', 11, 'Español');

-- --------------------------------------------------------

--
-- Table structure for table `estudiante`
--

CREATE TABLE `estudiante` (
  `id_estudiante` int(60) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `apellido` varchar(60) NOT NULL,
  `grado` int(5) NOT NULL,
  `edad` int(2) NOT NULL,
  `cod_trabajo` int(11) DEFAULT NULL,
  `correo` varchar(60) DEFAULT NULL,
  `contraseña` varchar(60) DEFAULT NULL,
  `acudiente` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `estudiante`
--

INSERT INTO `estudiante` (`id_estudiante`, `nombre`, `apellido`, `grado`, `edad`, `cod_trabajo`, `correo`, `contraseña`, `acudiente`) VALUES
(1000548955, 'Jorge', 'Cardona', 1101, 17, 101, NULL, NULL, NULL),
(1023622440, 'Luisa', 'Giraldo', 1102, 17, 101, NULL, NULL, NULL),
(1234567891, 'Ana', 'Pastrana', 1101, 18, 103, NULL, NULL, NULL),
(1234567892, 'Pedro', 'Perez', 1101, 17, NULL, 'pedro@gmail.com', NULL, NULL),
(1234567893, 'Laura', 'Osorio', 1101, 23, NULL, NULL, NULL, NULL),
(1234567894, 'Laura', 'Osorio', 1101, 23, NULL, NULL, NULL, NULL),
(1234567895, 'Camila', 'Mendez', 1102, 17, NULL, 'cm@gmail.com', '123456789012', 'Lucas'),
(1234567896, 'Brayan', 'Torres', 1102, 17, NULL, 'brayan@gmail.com', '12345678', 'Lina'),
(1234567897, 'Jose', 'Fernandez', 1101, 18, NULL, 'jose@gmail.com', '987654321', 'Lucia'),
(1234567898, 'Daniel', 'Mejia', 1101, 18, NULL, 'daniel@gmail.com', '1234567898765', 'Yuli'),
(1234567899, 'Jhon', 'Correa', 1101, 17, NULL, 'jhon@gmail.com', '1234567', 'Ana'),
(1234567900, 'Raul', 'Correa', 1101, 18, NULL, 'raul@gmail.com', '1122334455', 'Jose'),
(1234567901, 'Juan', 'Garcia', 1101, 18, NULL, 'juan@gmail.com', '123456', 'Dora');

-- --------------------------------------------------------

--
-- Table structure for table `inquietud`
--

CREATE TABLE `inquietud` (
  `cod_inquietud` int(60) NOT NULL,
  `duda` text,
  `cod_trabajo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `inquietud`
--

INSERT INTO `inquietud` (`cod_inquietud`, `duda`, `cod_trabajo`) VALUES
(111, NULL, 101),
(222, NULL, 102),
(333, NULL, 103),
(334, '¿Por qué nos dejaron sin grados presenciales?', NULL),
(335, '¿Funcionará a la primera?', NULL),
(336, 'Alerta', NULL),
(337, '¿Servirá la alerta?', NULL),
(338, '¿Servirá la alerta?', NULL),
(339, '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `materia`
--

CREATE TABLE `materia` (
  `cod_materia` int(60) NOT NULL,
  `grado` int(5) NOT NULL,
  `docente` varchar(60) NOT NULL,
  `nom_materia` varchar(60) NOT NULL,
  `tematica` varchar(60) NOT NULL,
  `id_docente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `materia`
--

INSERT INTO `materia` (`cod_materia`, `grado`, `docente`, `nom_materia`, `tematica`, `id_docente`) VALUES
(1001, 11, 'Sanclemente', 'Matemáticas', 'Funciones', 123),
(1002, 11, 'Julian', 'Físca', 'Circuito', 456),
(1003, 11, 'Jimena', 'Español', 'Estereotipos', 789);

-- --------------------------------------------------------

--
-- Table structure for table `sacan`
--

CREATE TABLE `sacan` (
  `id_sacan` int(60) NOT NULL,
  `cod_trabajo` int(11) DEFAULT NULL,
  `id_calificacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sacan`
--

INSERT INTO `sacan` (`id_sacan`, `cod_trabajo`, `id_calificacion`) VALUES
(111, 101, 1),
(222, 102, 2),
(333, 103, 3);

-- --------------------------------------------------------

--
-- Table structure for table `trabajo`
--

CREATE TABLE `trabajo` (
  `cod_trabajo` int(60) NOT NULL,
  `archivo` blob
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `trabajo`
--

INSERT INTO `trabajo` (`cod_trabajo`, `archivo`) VALUES
(101, NULL),
(102, NULL),
(103, NULL),
(104, 0x433a5c66616b65706174685c4cc3ad6d69746573202d204a6f72676520436172646f6e61202d2031312e312e706466),
(105, 0x433a5c66616b65706174685c414354495649444144455320454a454349544144415320504f522045444741522e646f6378),
(106, 0x433a5c66616b65706174685c47554941204c494d495445532e646f6378),
(111, 0x433a5c66616b65706174685c47554941204c494d495445532e646f6378),
(114, 0x433a5c66616b65706174685c4cc3ad6d69746573202d204a6f72676520436172646f6e61202d2031312e312e706466);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD PRIMARY KEY (`id_calificacion`);

--
-- Indexes for table `cursa`
--
ALTER TABLE `cursa`
  ADD PRIMARY KEY (`id_cursa`),
  ADD KEY `cod_materia` (`cod_materia`),
  ADD KEY `id_estudiante` (`id_estudiante`);

--
-- Indexes for table `docente`
--
ALTER TABLE `docente`
  ADD PRIMARY KEY (`id_docente`);

--
-- Indexes for table `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`id_estudiante`),
  ADD KEY `cod_trabajo` (`cod_trabajo`);

--
-- Indexes for table `inquietud`
--
ALTER TABLE `inquietud`
  ADD PRIMARY KEY (`cod_inquietud`),
  ADD KEY `cod_trabajo` (`cod_trabajo`);

--
-- Indexes for table `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`cod_materia`),
  ADD KEY `id_docente` (`id_docente`);

--
-- Indexes for table `sacan`
--
ALTER TABLE `sacan`
  ADD PRIMARY KEY (`id_sacan`),
  ADD KEY `cod_trabajo` (`cod_trabajo`),
  ADD KEY `id_calificacion` (`id_calificacion`);

--
-- Indexes for table `trabajo`
--
ALTER TABLE `trabajo`
  ADD PRIMARY KEY (`cod_trabajo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `calificaciones`
--
ALTER TABLE `calificaciones`
  MODIFY `id_calificacion` int(60) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cursa`
--
ALTER TABLE `cursa`
  MODIFY `id_cursa` int(60) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `docente`
--
ALTER TABLE `docente`
  MODIFY `id_docente` int(60) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=790;

--
-- AUTO_INCREMENT for table `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `id_estudiante` int(60) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1234567902;

--
-- AUTO_INCREMENT for table `inquietud`
--
ALTER TABLE `inquietud`
  MODIFY `cod_inquietud` int(60) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=340;

--
-- AUTO_INCREMENT for table `materia`
--
ALTER TABLE `materia`
  MODIFY `cod_materia` int(60) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1004;

--
-- AUTO_INCREMENT for table `sacan`
--
ALTER TABLE `sacan`
  MODIFY `id_sacan` int(60) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=334;

--
-- AUTO_INCREMENT for table `trabajo`
--
ALTER TABLE `trabajo`
  MODIFY `cod_trabajo` int(60) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cursa`
--
ALTER TABLE `cursa`
  ADD CONSTRAINT `cursa_ibfk_1` FOREIGN KEY (`cod_materia`) REFERENCES `materia` (`cod_materia`),
  ADD CONSTRAINT `cursa_ibfk_2` FOREIGN KEY (`id_estudiante`) REFERENCES `estudiante` (`id_estudiante`);

--
-- Constraints for table `estudiante`
--
ALTER TABLE `estudiante`
  ADD CONSTRAINT `estudiante_ibfk_1` FOREIGN KEY (`cod_trabajo`) REFERENCES `trabajo` (`cod_trabajo`);

--
-- Constraints for table `inquietud`
--
ALTER TABLE `inquietud`
  ADD CONSTRAINT `inquietud_ibfk_1` FOREIGN KEY (`cod_trabajo`) REFERENCES `trabajo` (`cod_trabajo`);

--
-- Constraints for table `materia`
--
ALTER TABLE `materia`
  ADD CONSTRAINT `materia_ibfk_1` FOREIGN KEY (`id_docente`) REFERENCES `docente` (`id_docente`);

--
-- Constraints for table `sacan`
--
ALTER TABLE `sacan`
  ADD CONSTRAINT `sacan_ibfk_1` FOREIGN KEY (`cod_trabajo`) REFERENCES `trabajo` (`cod_trabajo`),
  ADD CONSTRAINT `sacan_ibfk_2` FOREIGN KEY (`id_calificacion`) REFERENCES `calificaciones` (`id_calificacion`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
