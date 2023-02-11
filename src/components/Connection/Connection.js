import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Paragraph, Button} from '../../globalStyles';


import {
  Pinkgradient,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  ImgWrapper,
  Img
} from './Connection.elements';

const Connection = ({
  lightBg,
  lightheading,
  imgStart,
  start,
  heading,
  paragraph,
  buttonInfo,
  img1,
  alt

}) => {

   
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
            <TextWrapper>
                <TopLine lightheading={lightheading}>{heading}</TopLine>
              <Paragraph>
              {paragraph}
              </Paragraph> 
              <Link to='/services'>
                <Button>{buttonInfo}</Button>
              </Link> 
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img1} alt={alt} />
                <Pinkgradient />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    

</>

  )
}

export default Connection