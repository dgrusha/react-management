import * as common from "./commonValidation";
import {checkEmail, checkTextLengthRange} from "./commonValidation";
import {useState} from "react";


export function validateAgencyFields(fieldName, fieldValue) {
    let error = ''
    if (fieldName === "specialization"){
        if(!common.checkRequired(fieldValue)) {
            error = "required";
        }else if(!checkTextLengthRange(fieldValue, 2, 60)){
            error = "contain2-60";
        }
    }
    if (fieldName === "tax_number"){
        if(!common.checkRequired(fieldValue)) {
            error = "required";
        }else if(!common.checkTextLengthRange(fieldValue, 5, 60)){
            error = "contain5-60";
        }else if(!common.checkIfOnlyNums(fieldValue)){
            error = "numbers";
        }
    }
    if (fieldName === "phone"){
        if(!common.checkRequired(fieldValue)) {
            error = "required";
        }else if(!common.checkPhone(fieldValue)){
            error = "phone"
        }
    }
    if (fieldName === "date_of_creation"){
        if(!common.checkRequired(fieldValue)) {
            error = "required";
        }
    }

    return error;
}