CREATE TABLE `estado` (
    `estadoID` INT(2) UNSIGNED NOT NULL,
    `estadoUF` CHAR(2) NOT NULL COLLATE 'utf8_general_ci',
    `estadoEstado` VARCHAR(50) NOT NULL COLLATE 'utf8_general_ci',
    `estadoCapital` VARCHAR(50) NOT NULL COLLATE 'utf8_general_ci',
    PRIMARY KEY (`estadoID`) USING BTREE
) COLLATE = 'utf8_general_ci' ENGINE = InnoDB;