import * as common from "./commonValidation";
import {checkEmail, checkTextLengthRange} from "./commonValidation";
import {useState} from "react";


export function validateEmpFields(fieldName, fieldValue) {
    let error = ''
    if (fieldName === "lname"){
        if(!common.checkRequired(fieldValue)) {
            error = "Field is required";
        }else if(!checkTextLengthRange(fieldValue, 2, 60)){
            error = "Should contain from 2 to 60 characters";
        }
    }
    if (fieldName === "fname"){
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
    if (fieldName === "date_of_birth"){
        if(!common.checkRequired(fieldValue)) {
            error = "Field is required";
        }
    }

    return error;
}