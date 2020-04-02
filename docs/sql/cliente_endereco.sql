CREATE TABLE IF NOT EXISTS `cliente_endereco` (
    `enderecoID` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
    `enderecoRua` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
    `enderecoNumero` varchar(7) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
    `enderecoComplemento` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
    `enderecoBairro` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
    `enderecoCidade` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
    `enderecoEstado` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
    `enderecoCEP` varchar(9) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
    `enderecoDataCriacao` datetime DEFAULT NULL,
    `enderecoDataAlteracao` datetime DEFAULT NULL,
    `enderecoStatus` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'ativo',
    PRIMARY KEY (`enderecoID`) USING BTREE,
    CONSTRAINT `cliente` FOREIGN KEY (`enderecoID`) REFERENCES `cliente` (`clienteID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8;