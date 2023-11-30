import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addStore } from "../models/store/store.dao.js";
import { addStoreResponseDTO } from "../dtos/store.dto.js";

export const joinStore = async (store) => {
    const storeData = await addStore(store);
    if(storeData === -1){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }else{
        return addStoreResponseDTO(store);
    }
}