import * as common from "./commonValidation";
import {checkEmail, checkTextLengthRange} from "./commonValidation";
import {useState} from "react";


export function validateDeptFields(fieldName, fieldValue) {
    let error = ''
    if (fieldName === "name"){
        if(!common.checkRequired(fieldValue)) {
            error = "Field is required";
        }else if(!checkTextLengthRange(fieldValue, 2, 60)){
            error = "Should contain from 2 to 60 characters";
        }
    }
    if (fieldName === "adress"){
        if(!common.checkRequired(fieldValue)) {
            error = "Field is required";
        }else if(!checkTextLengthRange(fieldValue, 2, 60)){
            error = "Should contain from 2 to 60 characters";
        }
    }
    if (fieldName === "email"){
        if(!common.checkRequired(fieldValue)) {
            error = "Field is required";
        }else if(!checkTextLengthRange(fieldValue, 2, 60)){
            error = "Should contain from 2 to 60 characters";
        }else if(!checkEmail(fieldValue)){
            error = "Not correct form of email"
        }
    }

    return error;
}