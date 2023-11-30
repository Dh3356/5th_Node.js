import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import {addReviewResponseDTO} from "../dtos/review.dto.js";
import {addReview} from "../models/review/review.dao.js";

export const joinReview = async (review) => {
    const reviewData = await addReview(review);
    if(reviewData === -1){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }else{
        return addReviewResponseDTO(review);
    }
}