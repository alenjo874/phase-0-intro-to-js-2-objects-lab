// Write your solution in this file!
let employee = {
    name: "Alen",
    streetAddress: "123 Spaghetti ave",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key] : value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key, value){
    let newObj = {...employee}
    newObj[key] = value
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key] = value
    return employee
}
