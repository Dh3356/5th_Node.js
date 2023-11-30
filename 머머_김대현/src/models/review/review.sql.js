//CREATE TABLE `review` (
//   `id` varchar(36) NOT NULL,
//   `content` varchar(255) NOT NULL,
//   `score` int NOT NULL,
//   `userId` varchar(36) DEFAULT NULL,
//   `storeId` varchar(36) DEFAULT NULL,
//   PRIMARY KEY (`id`),
//   KEY `FK_1337f93918c70837d3cea105d39` (`userId`),
//   KEY `FK_92744c9129e970d05764b24467f` (`storeId`),
//   CONSTRAINT `FK_1337f93918c70837d3cea105d39` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
//   CONSTRAINT `FK_92744c9129e970d05764b24467f` FOREIGN KEY (`storeId`) REFERENCES `store` (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
export const insertReviewSql = "INSERT INTO review (id, content, score, userId, storeId) VALUES (?, ?, ?, ?, ?);"