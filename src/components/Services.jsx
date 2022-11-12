import React from 'react';
import styled from "styled-components";
import SectionHeading from './SectionHeading';
import ServiceComponent from './ServiceComponent';
const Services = () => {
  return (
    <Section>
      <SectionHeading>
        Our Services
      </SectionHeading>

      <div className="container">
        <div className="services-container">
          <ServiceComponent img="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" title="best ground for exercise" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, cum." />
          <ServiceComponent img="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" title="best cycles for exercise" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, cum." />
          <ServiceComponent img="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" title="best dumbles for exercise" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, cum." />
          <ServiceComponent img="https://images.unsplash.com/photo-1598289431512-b97b0917affc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80" title="best cycles for exercise" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, cum." />
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
padding-top: 5rem;

.services-container{
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

`;

export default Services;
