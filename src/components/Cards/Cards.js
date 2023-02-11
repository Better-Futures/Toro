import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Button} from '../../globalStyles';
import {
  Star,
  Security,
  TextContainer,
  Plane,
  IconContainer,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Paragrap,
  Header,
  Heading,
  ImgWrapper,
 
} from './Cards.elements';

const Home = (
  lightBg,
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
                <Heading>How does it's work!</Heading>
                <Paragrap>By carefull planning and management
        we make sure that we give credibility to the work we do.     
                </Paragrap>
                <Link to ='/services'>
               <Button>Learn More</Button>
               </Link>
              </TextWrapper>              
            </InfoColumn>
            
            <InfoColumn>
              <ImgWrapper start={start}>
              <IconContainer>
            <Star/>
            <TextContainer>
            <Header>Speed</Header>
            <Paragrap> We do all to make sure you get your
            cars on time.</Paragrap>
            </TextContainer>
            </IconContainer>
            </ImgWrapper>
            <ImgWrapper>
            <IconContainer>
            <Security/>
            <TextContainer>
            <Header>Accuracy</Header>
              <Paragrap>Well planned and organised, to ensure nothing is 
              left out.</Paragrap>
              </TextContainer>
            </IconContainer>
            </ImgWrapper>
            <ImgWrapper>
            <IconContainer>
            <Plane/>
            <TextContainer>
            <Header>Sustainability</Header>
            <Paragrap> Making sure it's endures for long with minimal
            and costless maintainace is our priority.
            </Paragrap>            
            </TextContainer>
            </IconContainer>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>


  )
}

export default Home