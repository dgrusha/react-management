import * as common from "./commonValidation";
import {checkEmail, checkTextLengthRange} from "./commonValidation";
import {useState} from "react";


export function validateDeptFields(fieldName, fieldValue) {
    let error = ''
    if (fieldName === "name"){
        if(!common.checkRequired(fieldValue)) {
            error = "required";
        }else if(!checkTextLengthRange(fieldValue, 2, 60)){
            error = "contain2-60";
        }
    }
    if (fieldName === "adress"){
        if(!common.checkRequired(fieldValue)) {
            error = "required";
        }else if(!checkTextLengthRange(fieldValue, 2, 60)){
            error = "contain2-60";
        }
    }
    if (fieldName === "email"){
        if(!common.checkRequired(fieldValue)) {
            error = "required";
        }else if(!checkTextLengthRange(fieldValue, 2, 60)){
            error = "contain2-60";
        }else if(!checkEmail(fieldValue)){
            error = "email"
        }
    }

    return error;
}