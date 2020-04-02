CREATE TABLE `cliente` (
    `clienteID` VARCHAR(32) NOT NULL COLLATE 'utf8_general_ci',
    `clienteNome` VARCHAR(40) NOT NULL COLLATE 'utf8_general_ci',
    `clienteDataCriacao` DATETIME NOT NULL,
    `clienteDataAlteracao` DATETIME NOT NULL,
    `clienteStatus` VARCHAR(20) NOT NULL DEFAULT 'ativo' COLLATE 'utf8_general_ci',
    PRIMARY KEY (`clienteID`) USING BTREE
) COLLATE = 'utf8_general_ci' ENGINE = InnoDB;