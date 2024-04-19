import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import SignupValidation from './SignupValidation';


function Signup() {

    
        const [values,setValues]=useState({
            firstname:'',
            lastname:'',
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
            setErrors(SignupValidation(values));
        }


  return (
    <div className='d-flex justify-content-center align-items-center'>
    <div className='bg-white p-3 rounded w-25'>
        <form action="" onSubmit={handleSubmit}> 
        <div className='mb-3'>
            <label htmlFor="firstname"><strong>First Name</strong></label>
            <input type="firstname" name="firstname" placeholder='Enter First Name' className='form-control rounded-0'></input>
        </div>
        <div className='mb-3'>
            <label htmlFor="lastname"><strong>Last Name</strong></label>
            <input type="lastname" name="lastname" placeholder='Enter Last Name' className='form-control rounded-0'></input>
        </div>
        <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" name="email" onChange={handleInput} placeholder='Enter Email' className='form-control rounded-0'></input>
            {errors.email&&<span className='text-danger'>{errors.email}</span>}
        </div>
        <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" name="password" onChange={handleInput} placeholder='Enter Password' className='form-control rounded-0'></input>
            {errors.password&&<span className='text-danger'>{errors.password}</span>}
        </div>
        <button type="submit" className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
        <p></p>
        <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> <strong>Log in </strong></Link>
        </form>
    </div>
</div>
  )
}

export default Signup