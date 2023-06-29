//i,port files
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/Login.css'
import '../CSS/Register.css'

const Login=() =>{
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = ()=>{
    axios.post('http://localhost:3500/login', {username, password})
    .then((user)=>{
      localStorage.setItem('Token', user.data.Token);
      navigate('/profile')
    })
    .catch((err)=>{
      navigate('/error');
    })
  }
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
