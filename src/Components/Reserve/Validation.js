export default function Validation(){ //validation code that was used originally to validate inputs are of correct type and form
    const errors = {}

    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const name_pattern = /^[^[A-Za-z]+$/
    const date_pattern = /^[1-9][0-9][0-9]{2}-([0][1-9]|[1][0-2])-([1-2][0-9]|[0][1-9]|[3][0-1])$/
    const time_pattern = /^([01]\d|2[0-3]):?([0-5]\d)$/

    if(values.name === ""){
        errors.name = "Name is Required";
    }

    if(values.email === "" || !email_pattern){
        errors.email = "Valid email address Required"
    }

    if(values.date === "" || !date_pattern){
        errors.date = "Please enter a valid date"
    }

    if(values.time === "" || !time_pattern){
        errors.time = "Please enter a valid time"
    }


}