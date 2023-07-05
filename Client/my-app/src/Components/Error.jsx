//import file
import React from 'react';
import '../CSS/Error.css'

//error component
 const Error = () =>{
  return (
    <div className='backgroundErr'>
      <h2 className='h2'>401! Try Again please</h2>
      <p className='p'>Incorrect username, password</p>
    </div>
  )
}

export default Error;