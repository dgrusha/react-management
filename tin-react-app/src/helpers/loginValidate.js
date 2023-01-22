import * as common from "./commonValidation";
import {checkEmail, checkTextLengthRange} from "./commonValidation";

export function loginValidate(fieldName, fieldValue) {
    let error = ''
    if (fieldName === "date_of_creation"){
        if(!common.checkRequired(fieldValue)) {
            error = "required";
        }
    }

    if (fieldName === "date_of_creation"){
        if(!common.checkRequired(fieldValue)) {
            error = "required";
        }
    }


    return error;
}