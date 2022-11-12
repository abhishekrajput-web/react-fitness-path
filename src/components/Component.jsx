import React from 'react';
// import ButtonOutline from './Button';
import ButtonBg from './ButtonBg';
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import styled from 'styled-components';
const Component = (props) => {
    return (
        <Div>
            <h2 className='price-heading'>{props.title}</h2>
            <hr className='line' />
            <p className='price'>{props.price}</p>
            
            <div className="features-container">
                <p className='features'> <TiTick className='tick' />{props.description}</p>
                <p className='features'> <TiTick className='tick' />{props.description}</p>
                <p className='features'> <TiTick className='tick' />{props.description}</p>
                <p className='features'> <ImCross className='cross' />{props.description}</p>
                <p className='features'> <ImCross className='cross' />{props.description}</p>
            </div>

            <ButtonBg className='btn btn-outline'>{props.btn}</ButtonBg>

        </Div>


    );
}


const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.2rem;
  background-color: #fff;
  transition: all 0.3s ease-in;

  &:hover{
    background-color: #000;
    color: #fff;

    .price-heading{
      color: #fff;
    }
  }



.btn{
  margin-bottom: 2rem;
}

.btn-outline{
  background-color:#000;
  color:#fff;
  &:hover{
    color: #000;
    background-color: #fff;
  }
}

.line{
  border: 1px solid orange;
  width: 100%;
}


.price-heading{
  margin-top: 2rem;
  font-size: 5.5rem;
  color: #000;
}


.features-container{
  display: flex;
  gap: 2rem;
  flex-direction: column;
}

.features-container .features{
  font-size: 2rem;
}

.cross{
  color: red;
}

.tick{
  color: #222;
  font-size: 2.4rem;
}

.price{
  background-color:lightsalmon;
  color: #000;
  border-radius: 0.4rem;
  font-size: 4rem;
  font-weight: 600;
  padding: 0 1rem;
}
` ;

export default Component;
