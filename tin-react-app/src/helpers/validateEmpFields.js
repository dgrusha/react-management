import * as common from "./commonValidation";
import {checkEmail, checkTextLengthRange} from "./commonValidation";
import {useState} from "react";
import { useTranslation } from 'react-i18next';


export function validateEmpFields(fieldName, fieldValue) {
    let error = ''
    if (fieldName === "lname"){
        if(!common.checkRequired(fieldValue)) {
            error = "required";
        }else if(!checkTextLengthRange(fieldValue, 2, 60)){
            error = "contain2-60";
        }
    }
    if (fieldName === "fname"){
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
    if (fieldName === "date_of_birth"){
        if(!common.checkRequired(fieldValue)) {
            error = "required";
        }
    }

    return error;
}