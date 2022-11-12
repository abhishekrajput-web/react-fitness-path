import React from 'react';
import styled from "styled-components";
import SectionHeading from './SectionHeading';
import TrainersComponent from './TrainersComponent';

const Trainers = () => {
  return (
    <Section>
      <SectionHeading>
        Our Trainers
      </SectionHeading>

      <div className="container">
        <div className="trainers-container">
  
  <TrainersComponent title="Mike" img="https://images.pexels.com/photos/4218662/pexels-photo-4218662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
  <TrainersComponent title="Razor" img="https://images.pexels.com/photos/10501522/pexels-photo-10501522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
  <TrainersComponent title="Ruke" img="https://images.pexels.com/photos/9313077/pexels-photo-9313077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
  <TrainersComponent title="Kevin" img="https://images.pexels.com/photos/6062177/pexels-photo-6062177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding-top: 5rem;
  .trainers-container{
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`;

export default Trainers;
