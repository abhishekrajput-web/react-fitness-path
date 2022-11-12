import React from 'react';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
const Signup = () => {
  return (
  <Section>
  <div className="container">
<SectionHeading>SignUp </SectionHeading>

<div className="signup-container">
<form action="#" autoComplete='off'>
    <input type="text" placeholder='Username' name='username' required />
    <input type="password" placeholder='Password' name='password' required />
    <input type="password" placeholder='Confirm Password' name='confirm password' required />
    <input type="submit" value="Submit" />
</form>
</div>

  </div>
  </Section>
  )
}

const Section = styled.section`
  padding-top: 5rem;


  form{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-direction: column;
  }

  textarea,input{
    border: none;
    padding: 1rem 4rem;
    width: 100%;
    max-width: 750px;
    outline: none;
    border-radius: 0.5rem;
    font-size: 2rem;
  }

  input[type="submit"]{
    border: 1px solid #ccc;
    color: #fff;
    background-color: transparent;
    transition: all 0.3s ease-in;

    &:hover{
      color: #000;
      background-color: #fff;
    }
  }

  input:focus{
    border: none;
    outline: none;
  }

`;

export default Signup;
