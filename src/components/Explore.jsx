import React from 'react';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import { NavLink } from 'react-router-dom';
import ButtonOutline from './Button';
const Explore = () => {
  return (
    <Section>
      <div className="container">

      <SectionHeading>More About Us</SectionHeading>

  <div className="explore-container">
    <div className="explore-image-container">
      <figure><img src="./images/explore.png" className='explore-img' /></figure>
    </div>

    <div className="explore-data">
      <h2>Know More About Us</h2>
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

.explore-container{
  display: grid;
  align-items: center; 
  grid-template-columns: 1fr 1fr;
}

.container{
  width: 90%;
  max-width: 1100px;
  margin:auto;
}


.explore-image-container figure .explore-img{
width:100%;
} 

.explore-data{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.3rem;
}


.explore-data h2{
  font-size: 2.5rem;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
}

.explore-data p{
  color: #999;
  font-size: 1.5rem;
}

.explore-more{
  border: 1px solid lightblue;
  transition: all 0.3s ease-in;
  opacity: 1;
&:hover{
  background-color:lightcyan;
  color: #000;
  opacity: 1;
}
}



@media screen and (max-width:768px) {

  .explore-container{
  grid-template-columns: 1fr;
  gap: 5rem;
  }


}
`;

export default Explore;

