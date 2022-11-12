import React from 'react';
import styled from 'styled-components';
import ButtonBg from './ButtonBg';
import SectionHeading from './SectionHeading';
import { NavLink } from 'react-router-dom';
import ButtonOutline from './Button';
const About = () => {
  return (
    <Section>
      <div className="container">

      <SectionHeading>about us</SectionHeading>

  <div className="about-container">
    <div className="about-image-container">
      <figure><img src="./images/about10.png" className='about-img' /></figure>
    </div>

    <div className="about-data">
      <h2>make your self comfortable</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed rerum beatae tempore eius ab amet, omnis officia in repudiandae esse autem commodi dicta perspiciatis minima, ex veritatis. Id, harum eum Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, molestiae corporis deserunt ut ducimus laboriosam! </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed rerum beatae tempore eius ab amet, omnis officia in repudiandae esse autem commodi dicta perspiciatis minima, ex veritatis. Id, harum eum! </p>

       <NavLink to="/explore">
       <ButtonOutline className='explore-more'>Explore More</ButtonOutline>
       </NavLink>
    </div>

  </div>
  </div>

    </Section>
  )
}

const Section = styled.section`
padding-top: 5rem;

.about-container{
  display: grid;
  align-items: center; 
  grid-template-columns: 1fr 1fr;
}


.about-image-container figure .about-img{
width:100%;
} 

.about-data{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.3rem;
}


.about-data h2{
  font-size: 2.5rem;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
}

.about-data p{
  color: #999;
  font-size: 1.5rem;
}

.explore-more{
  border: 1px solid yellow;
  transition: all 0.3s ease-in;
&:hover{
  background-color:yellow;
  color: #000;
}
}

@media screen and (max-width:730px) {

.about-container{
grid-template-columns: 1fr;
gap: 5rem;
}

}


`;

export default About;

