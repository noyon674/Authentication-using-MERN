//import files
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/layout.css';

// layout component
const Layout = ()=>{
    const [state, setState] = useState(-1)
    return(
        <nav className='header'>
            <Link className='element' to={'/'}>Home</Link> &nbsp; &nbsp;
            <Link className='element' to={'/register'}>Register</Link>&nbsp; &nbsp;
            <Link className='element' to={'/login'}>Login</Link>&nbsp; &nbsp;
            <Link className='element' to={'/profile'}>Profile</Link>
        </nav>
    )
};

//export component
export default Layout;
