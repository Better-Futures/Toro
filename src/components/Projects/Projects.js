import React from 'react'
import { Container, Button} from '../../globalStyles';
import {img1,img2, img3, img4, img5, img6} from '../../images';
import {Link} from 'react-router-dom';
import {
  InfoSec,
  ImgContainer,
  ImgWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Left,
  Right,
  CTA,
  CTAContainer,
  Paragrap,
  Headers,
  Img
} from './Projects.elements';

const Projects = (
  lightBg,
) => {

   
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
        <TextWrapper>
            <TopLine>       
        Some of our Best Models include:
            </TopLine>
            </TextWrapper>
            <ImgContainer>
                <ImgWrapper>
                   <Img src={img1} alt='/' />
                   <Heading>ToroX</Heading> 
                </ImgWrapper>
                <ImgWrapper>
                   <Img src={img2} alt='/' />
                   <Heading>TY-Model</Heading> 
                </ImgWrapper>
                <ImgWrapper>
                   <Img src={img3} alt='/' />
                   <Heading>T4-Model</Heading> 
                </ImgWrapper>
                <ImgWrapper>
                   <Img src={img4} alt='/' />
                   <Heading>ToroY</Heading> 
                </ImgWrapper>
                <ImgWrapper>
                   <Img src={img5} alt='/' />
                   <Heading>Jeep-Z</Heading> 
                </ImgWrapper>
                <ImgWrapper>
                   <Img src={img6} alt='/' />
                   <Heading>TA-Model</Heading> 
                </ImgWrapper>
            </ImgContainer>
            <CTA>
                <CTAContainer>
                <Left>
                  <Headers>
                  What are you waiting for! 
                  </Headers>
                    <Paragrap>
            Just contact us and
            give you orders, then follow the payment method
            and you're done.            
                    </Paragrap>
                    </Left>
                    <Right>
                    <Link to='/services'>
                    <Button fontBig >Let's Begin</Button>
                    </Link>
                    </Right>
                </CTAContainer>
            </CTA>

            </Container>
            </InfoSec>


    </>
  )
}

export default Projects;