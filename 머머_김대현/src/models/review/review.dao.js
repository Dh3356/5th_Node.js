import { pool } from "../../../config/db.config.js";
import { BaseError } from "../../../config/error.js";
import { status } from "../../../config/response.status.js";
import {insertReviewSql} from "./review.sql.js";

export const addReview = async (review) => {
    try{
        const conn = await pool.getConnection();

        const result = await pool.query(insertReviewSql, [review.id, review.content, review.score, review.userId, review.storeId]);

        conn.release();
        return result[0].insertId;
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}