import axios from 'axios';
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/Profile.css'

export default function Profile() {
const navigate = useNavigate();

  useEffect(() => {
   const Token = localStorage.getItem('Token');
   axios.get('http://localhost:3500/profile', {
    headers: {
      Authorization: Token
    }
   })
   .then((res)=>console.log(res))
   .catch((err)=>{
    console.log(err);
    navigate('/login');
   })
  });
  
  return (
    <div className='background'>
      <h1 className='profileElement'>welcome to your profile</h1>
    </div>
  )
}
