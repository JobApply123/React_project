import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import LoginValidation from './LoginValidation';

function Login() {
const [values,setValues]=useState({
    email:'',
    password:''
})
const [errors,setErrors]=useState({

})
const handleInput=(event)=>{
 setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))   
}
const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(LoginValidation(values));
}

  return (
    <div className='d-flex justify-content-center align-items-center'>
        <div className='bg-white p-3 rounded w-25'>
            <form action="" onSubmit={handleSubmit}> 
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder='Enter Email' name="email" className='form-control rounded-0'
                onChange={handleInput}/>
                {errors.email&&<span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder='Enter Password' name="password" onChange={handleInput} className='form-control rounded-0'></input>
                {errors.password&&<span className='text-danger'>{errors.password}</span>}
            </div>
            <button type="submit"   className='btn btn-success w-100 rounded-0'><strong>Log in</strong></button>
            <p></p>
            <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> <strong>Sign Up</strong></Link>
            </form>
        </div>
    </div>
  )
}

export default Login