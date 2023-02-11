import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Paragraph} from '../../globalStyles';
import img1 from '../../images/car-forest.jpg';

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  ImgWrapper,
  Img,
  Circle,
  Arrow,
  TextContainer,
  Parag,
  CircleContainer
} from './Intro.elements';

const Intro= (
  lightBg,
  lightTopLine,
  lightText,
  imgStart,
  start
) => {

   
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
            <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>As Usual, </TopLine>
                <Heading lightText={lightText}> Together we </Heading>
                <TopLine>can change the world.</TopLine>
              <Paragraph>
              We build electric vehicles not only,
              to combat climate change but to make
               you comfortable and satisfied. 
              </Paragraph> 
              <Link to='/products' style={{textDecoration:'none'}}>
              <Circle>
          <CircleContainer>
        <TextContainer>
          <Parag>Let's</Parag>
          <Arrow/>         
        </TextContainer>
        <TextContainer>
        <Parag>Begin</Parag>
        </TextContainer>
          </CircleContainer>
        </Circle>
        </Link> 
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
              
                <Img src={img1} alt='Intro' />  
              </ImgWrapper>              
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>

</>

  )
}

export default Intro;