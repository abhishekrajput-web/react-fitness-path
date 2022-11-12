import React from 'react';
import styled from 'styled-components';

const ReviewsComponent = (props) => {
  return (
    <Div>
    <img className='review-img' src={props.img} alt="people-img" />
    <h2 className='reviewer-name'>{props.title}</h2>
    <p className='review-description'>{props.description}</p>
  </Div>
  )
}

const Div = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
background-color: #fff;
border-radius: 0.2rem;
transition: all 0.3s ease-in;

&:hover{
    background-color: #000;
    color: #fff;

    .reviewer-name{
      color: #fff;
    }

    .review-description{
      color: #fff;
    }

    .review-img{
      border: 2px solid lightgreen;
      width: 124px;
      height: 124px;
    }
  }


.review-img{
  width: 125px;
  height: 125px;
  border-radius: 50%;

}

.reviewer-name{
  font-size: 2rem;
  color: #000;

}

.review-description{
font-size: 1.4rem;

color: #333;
}

`;
export default ReviewsComponent;
