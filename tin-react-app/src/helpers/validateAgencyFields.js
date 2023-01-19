import * as common from "./commonValidation";
import {checkEmail, checkTextLengthRange} from "./commonValidation";
import {useState} from "react";


export function validateAgencyFields(fieldName, fieldValue) {
    let error = ''
    if (fieldName === "specialization"){
        if(!common.checkRequired(fieldValue)) {
            error = "Field is required";
        }else if(!checkTextLengthRange(fieldValue, 2, 60)){
            error = "Should contain from 2 to 60 characters";
        }
    }
    if (fieldName === "tax_number"){
        if(!common.checkRequired(fieldValue)) {
            error = "Field is required";
        }else if(!common.checkTextLengthRange(fieldValue, 5, 60)){
            error = "Should contain from 2 to 60 characters";
        }else if(!common.checkIfOnlyNums(fieldValue)){
            error = "Should be only numbers";
        }
    }
    if (fieldName === "phone"){
        if(!common.checkRequired(fieldValue)) {
            error = "Field is required";
        }else if(!common.checkPhone(fieldValue)){
            error = "Not correct form of phone"
        }
    }
    if (fieldName === "date_of_creation"){
        if(!common.checkRequired(fieldValue)) {
            error = "Field is required";
        }
    }

    return error;
}