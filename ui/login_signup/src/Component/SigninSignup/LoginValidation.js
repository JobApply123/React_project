function LoginValidation(values){
    //alert(values);
let error={}
// const email_pattern=/^[^\S@]+@[^\S@]+\.[^S@]+$/
const email_pattern=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
// const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
const password_pattern=/^(.{6,})$/

if(values.email===""){
    error.email="Email Should not be empty."
}
else if(!email_pattern.test(values.email)){
    error.email="Please enter a valid email address."
}else{
    error.email=""
}


if(values.password===""){
    error.password="Password should not be empty."
}
else if(!password_pattern.test(values.password)){
    error.password="Password must be at least 6 characters long."
}else{
    error.password=""
}

return error;

}
export default LoginValidation;



