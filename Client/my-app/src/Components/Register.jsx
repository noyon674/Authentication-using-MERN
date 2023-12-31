//import file
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/Register.css';

//registration component
const Register =() => {
  //navigator for redirect
  const navigate = useNavigate();

  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');
  const [phone, setNumber ] = useState('');

  //registration handler
  const handleRegister = ()=>{

    //passing username, password, phon number to the backend
    axios.post('http://localhost:3500/register', {username, password, phone})

    //if registration complete then redirect to the login page
    .then(()=>{
      console.log('Register completed.')
      navigate('/login');
    })

    //if registration is not complete then stay register page
    .catch((err)=>{
      console.log(err);
      navigate('/register');
    })
  };

  return (
    <div className='background'>
      <div className='form'>
        <h2 className='form_h1'>registration here</h2>

        <label className='label' htmlFor="username">Username: </label>
        <input className='input' type='text' id='username' placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}} required/>

        <br />
        <label className='label' htmlFor="password">Password: </label>
        <input className='input' type='password' id='password' placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

        <br />
        <label className='label' htmlFor="phone">Phone: </label>
        <input className='input' type="number" id='phone' placeholder='phone number' value={phone} onChange={(e)=>{setNumber(e.target.value)}}/>

        <br />
        <input className='button' type="submit" value="Register" onClick={handleRegister}/>
      </div>
    </div>
  )
};

//export Register component
export default Register;