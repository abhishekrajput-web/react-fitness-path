import React from 'react';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import ReviewsComponent from './ReviewsComponent';
const Reviews = () => {
  return (
    <Section>
      <div className="container">

      <SectionHeading>Our Reviews</SectionHeading>
<div className="reviews-container">
<ReviewsComponent img="https://randomuser.me/api/portraits/men/3.jpg" title="Harry" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto perspiciatis repellat deserunt tempora accusantium! Dolorum vero placeat delectus? Vel, ad."/>
<ReviewsComponent img="https://randomuser.me/api/portraits/women/26.jpg" title="Tokyo" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto perspiciatis repellat deserunt tempora accusantium! Dolorum vero placeat delectus? Vel, ad."/>
<ReviewsComponent img="https://randomuser.me/api/portraits/men/2.jpg" title="Mike" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto perspiciatis repellat deserunt tempora accusantium! Dolorum vero placeat delectus? Vel, ad."/>
<ReviewsComponent img="https://randomuser.me/api/portraits/women/67.jpg" title="Kerry" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto perspiciatis repellat deserunt tempora accusantium! Dolorum vero placeat delectus? Vel, ad."/>

</div>

      </div>
    </Section>
  )
}

const Section = styled.section`
padding-top: 5rem;

.reviews-container{
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
}

@media screen and (max-width:768px) {
  /* .reviews-container{
    flex-direction: column;
  } */
}
`;


export default Reviews;
