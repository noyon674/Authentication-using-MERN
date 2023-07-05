//i,port files
//import file
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/Login.css'
import '../CSS/Register.css'

const Login=() =>{

  //navigator for redirect
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //login handller
  const loginHandler = ()=>{

    //passing username and password to the backend for login
    axios.post('http://localhost:3500/login', {username, password})

    //after login successful we get a token according to the user
    .then((user)=>{
      //storing token to the localstorage from user
      localStorage.setItem('Token', user.data.Token);
      //if login machanism work properly from backend login logic then redirect to the profile page
      navigate('/profile')
    })
    .catch((err)=>{
      //if login not complete then redirect to the error page
      navigate('/error');
    })
  };
  
  return (
    <div className='background'>
      <h2>Login form</h2>

      <label className='label' htmlFor="username">Username: </label>
      <input className='input' type='text' id='username' placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
      <br />

      <label className='label' htmlFor="password">Password: </label>
      <input className='input' type="password" id='password' placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <br />

      <input className='button' type="submit" value='Login' onClick={loginHandler}/>
    </div>
    )
};

export default Login;
