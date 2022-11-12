import React from 'react';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import ButtonOutline from './Button';
import ButtonBg from './ButtonBg';
import {ImCross} from "react-icons/im";
import {TiTick} from "react-icons/ti";
import Component from './Component';
const Pricing = () => {

  return (
  <Section>

    <div className="container">

<SectionHeading>pricing</SectionHeading>

<div className="pricing-container">
  <Component title="Noob" description="Lorem, ipsum dolor." price="32$" btn="Buy Now"/>
  <Component title="Pro" description="Lorem, ipsum dolor." price="45$" btn="Buy Now"/>
  <Component title="Ko" description="Lorem, ipsum dolor." price="60$" btn="Buy Now"/>
  <Component title="Done" description="Lorem, ipsum dolor." price="85$" btn="Buy Now"/>
</div>
</div>

  </Section>
  )
}

const Section = styled.section`
padding-top: 5rem;


.pricing-container{
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}


@media screen and (max-width:768px) {
  /* .pricing-container{
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
  } */
}
`;



export default Pricing;
