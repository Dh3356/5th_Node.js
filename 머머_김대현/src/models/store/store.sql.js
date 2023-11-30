//CREATE TABLE `store` (
//   `id` varchar(36) NOT NULL,
//   `name` varchar(255) NOT NULL,
//   `address` varchar(255) NOT NULL,
//   `score` int NOT NULL,
//   `createdAt` datetime NOT NULL,
//   `updatedAt` datetime NOT NULL,
//   `regionId` varchar(36) DEFAULT NULL,
//   PRIMARY KEY (`id`),
//   KEY `FK_26fe9e05a517d67ca575fcc298c` (`regionId`),
//   CONSTRAINT `FK_26fe9e05a517d67ca575fcc298c` FOREIGN KEY (`regionId`) REFERENCES `region` (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
export const insertStoreSql = "INSERT INTO store (id, name, address, score, createdAt, updatedAt, regionId) VALUES (?, ?, ?, ?, ?, ?, ?);"
export const getStoreID = "SELECT * FROM store WHERE id = ?;";