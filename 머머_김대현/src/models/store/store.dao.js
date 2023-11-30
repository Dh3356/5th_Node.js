import { pool } from "../../../config/db.config.js";
import { BaseError } from "../../../config/error.js";
import { status } from "../../../config/response.status.js";
import {insertStoreSql} from "./store.sql.js";

////CREATE TABLE `store` (
// //   `id` varchar(36) NOT NULL,
// //   `name` varchar(255) NOT NULL,
// //   `address` varchar(255) NOT NULL,
// //   `score` int NOT NULL,
// //   `createdAt` datetime NOT NULL,
// //   `updatedAt` datetime NOT NULL,
// //   `regionId` varchar(36) DEFAULT NULL,
// //   PRIMARY KEY (`id`),
// //   KEY `FK_26fe9e05a517d67ca575fcc298c` (`regionId`),
// //   CONSTRAINT `FK_26fe9e05a517d67ca575fcc298c` FOREIGN KEY (`regionId`) REFERENCES `region` (`id`)
// // ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
export const addStore = async (store) => {
    try{
        const conn = await pool.getConnection();

        const result = await pool.query(insertStoreSql, [store.id, store.name, store.address, store.score, store.createdAt, store.updatedAt, store.regionId]);

        conn.release();
        return result[0].insertId;

    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}