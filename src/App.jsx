import React, { useState, useEffect } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import GlobalStyle from './GlobalStyle';
// IMPORT PAGE COMPONENTS
import Home from "./components/Home";
import About from './components/About';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Explore from "./components/Explore";
import Error from './components/Error';
import Navbar1 from './components/Navbar1';
// IMPORT BOOTSTRAP AND STYLE LINK
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
    {loading ? ( <h1 style={{fontSize:"60px",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"}}>Loading...</h1> ) : (
      <BrowserRouter>
      <GlobalStyle/>
      <Navbar1/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    ) }
    </>

  )
}

export default App;
