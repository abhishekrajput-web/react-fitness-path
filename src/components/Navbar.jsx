import React, { useState } from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {AiOutlineMenuUnfold} from "react-icons/ai"
const Navbar = () => {
  const [openMenu,setOpenMenu] = useState(false);
  return (
 <Header>
  <NavLink to="/" className="logo">
    fitness_path
  </NavLink>

  <nav className='nav-container'>
    <ul className={openMenu ? 'list-container active' : 'list-container'}>
      <li className='nav-list'>
        <NavLink to="/" className="nav-link">Home</NavLink>
      </li>
      <li className='nav-list'>
        <NavLink to="/about" className="nav-link">About</NavLink>
      </li>
      <li className='nav-list'>
        <NavLink to="/services" className="nav-link">Services</NavLink>
      </li>
      <li className='nav-list'>
        <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
      </li>
      <li className='nav-list'>
        <NavLink to="/reviews" className="nav-link">Reviews</NavLink>
      </li>
      <li className='nav-list'>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </li>
    </ul>
    <div className="menu-btn">
      <AiOutlineMenuUnfold name='menu-icon' onClick={() => setOpenMenu(!openMenu)}/>
    </div>

  </nav>
 </Header>
  )
}

const Header = styled.header`
background-color: #fff;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 8rem;
overflow: hidden;

.logo{
  color: #000;
  font-weight: bold;
  border: 2px solid lightgreen;
  font-size: 2rem;
}


.list-container{
   z-index: 999;
  display: flex;
  gap: 2.2rem;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
  overflow: hidden;
}

.nav-list{
  list-style: none;
}

.nav-link{
  color: #000;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.3rem;
  text-transform:uppercase;
  transition:all 0.3s ease-in;
  &:hover{
  border-bottom: 1px solid red;
}

}
.menu-btn{
  font-size: 3rem;
  color:#000;
  font-weight: bold;
  margin-top: 0.6rem;
  display: none;
}


/*  768px - mobile*/

@media screen and (max-width:768px) {
.list-container{
  visibility: hidden;
  display: flex;
  gap:4rem;
  flex-direction: column;
  position: absolute;
  top: 4.7rem;
  width: 100%;
  color: #000;
background-color: #fff;
right:0;
z-index: 999;
}

.nav-link{
  font-size: 1.5rem;
}

.menu-btn{
  display: inline-block;
}

.active{
  visibility: visible;
}

}

`;



export default Navbar;

