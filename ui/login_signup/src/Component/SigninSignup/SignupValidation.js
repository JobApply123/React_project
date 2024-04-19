function SignupValidation(values){
    let error={}
    // const email_pattern=/^[^\S@]+@[^\S@]+\.[^S@]+$/
    //const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    const email_pattern=/^[A-Z0-9. _%+-]+@[A-Z0-9. -]+\. [A-Z]{2,}$/i
    const password_pattern=/^(.{6,})$/


    

    if(values.firstname===""){
        error.firstname="First Name Should not be empty."
    }else{
        error.firstname=""
    }

    if(values.lastname===""){
        error.lastname="Last Name Should not be empty."
    }else{
        error.lastname=""
    }



    if(values.email===""){
        error.email="Email Should not be empty."
    }
    else if(!email_pattern.test(values.email)){
        error.email="Email Didn't match."
    }else{
        error.email=""
    }
    
    
    if(values.password===""){
        error.password="Password should not be empty."
    }
    else if(!password_pattern.test(values.password)){
        error.password="Password didn't match."
    }else{
        error.password=""
    }
    
    return error;
    
    }
    export default SignupValidation;
    
    
    
    