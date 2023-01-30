import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
   
    

    const handleSubmit =(e) =>{
        e.preventDefault();
        const userName =e.target.userName.value;
        const email =e.target.email.value;
        const password =e.target.password.value;

       const newUser = {userName,email, password};

        fetch ('http://localhost:5000/registration',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('success', data)
            alert('New user added!!');
            e.target.reset();
        })
    }

  return (
    <>
        <h2>Sign Up</h2>
        <form className='d-grid w-50 container gap-2' onSubmit={handleSubmit}>
      <input type='text' placeholder='write your Name' name='userName' />
      <input type='email' placeholder='write email' name='email' />
      <input type="text" placeholder='write password' name='password' />
      <input type="submit" value='Sign Up'/>
      <h5>Already have an account?<Link to='/'> Login here</Link></h5>
    </form>
    </>
  )
}

export default SignUp