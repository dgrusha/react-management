import * as common from "./commonValidation";


export function validateDeptEmpFields(fieldName, fieldValue) {
    let error = ''
    if (fieldName === "name"){
        if(!common.checkRequired(fieldValue)) {
            error = "required";
        }
    }
    if (fieldName === "emp_id"){
        if(!common.checkRequired(fieldValue)) {
            error = "required";
        }
    }
    if (fieldName === "start_contract"){
        if(!common.checkDate(fieldValue)) {
            error = "required";
        }
    }

    return error;
}