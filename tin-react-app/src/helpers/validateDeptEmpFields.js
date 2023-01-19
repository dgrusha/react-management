import * as common from "./commonValidation";


export function validateDeptFields(fieldName, fieldValue) {
    let error = ''
    if (fieldName === "name"){
        if(!common.checkRequired(fieldValue)) {
            error = "Field is required";
        }
    }
    if (fieldName === "emp_id"){
        if(!common.checkRequired(fieldValue)) {
            error = "Field is required";
        }
    }
    if (fieldName === "start_contract"){
        if(!common.checkDate(fieldValue)) {
            error = "Date start is required";
        }
    }

    return error;
}