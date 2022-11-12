import React from 'react';
import styled from 'styled-components';

const ServiceComponent = (props) => {
  return (
    <Div>
    <div className="service-img-container">
      <img className='service-img' src={props.img} alt="trainer" />
    </div>
      <div className="service-data">
        <h2 className='service-name'>{props.title}</h2>
        <p className='service-description'>{props.heading}</p>
      </div>
  </Div>
  )
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  border-radius: 0.2rem;
  background-color: #fff;
  transition: all 0.3s ease-in;

  &:hover{
    background-color: #000;
    color: #fff;

    .service-name{
      color: #fff;
    }
  }


.service-img-container{
  background-color: #ccc;
  overflow: hidden;
  &:hover .service-img{
    transform: scale(1.1);
  }
}

.service-img{
  width: 100%;
  display: block;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-outline{
  background-color:#000;
  color:#fff;
  &:hover{
    color: #000;
    background-color: #fff;
  }
}




.service-name{
  font-size: 2rem;
  color: #000;
}

.service-description{
  font-size: 1.2rem;
  display: none;
}

`;

export default ServiceComponent;
