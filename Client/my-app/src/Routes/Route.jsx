//import files
import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../Components/Home';
import Register from '../Components/Register';
import Login from '../Components/Login';
import Profile from '../Components/Profile';
import Error from '../Components/Error';
import Layout from "../Layouts/Header";

//router componenet
const Router = ()=>{
    return(
        <BrowserRouter>
        <Layout />
              <Routes>
                   <Route path="/" element = {<Home />}/>
                   <Route path="/register" element = {<Register />}/>
                   <Route path="/login" element = {<Login />} />
                   <Route path="/profile" element = {<Profile />} />
                   <Route path="*" element = {<Error />} />
              </Routes>
        </BrowserRouter>
    );
};

//export router
export default Router;