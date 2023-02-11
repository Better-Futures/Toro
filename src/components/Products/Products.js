import React from 'react'
import { Container} from '../../globalStyles';
import {img1,img2, img3, img4, img5, img6} from '../../images';
import {Link} from 'react-router-dom';
import {
  InfoSec,
  ImgContainer,
  ImgWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Img
} from './Products.elements';

const Projects = (
  lightBg,
) => {

   
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
        <TextWrapper>
            <TopLine>       
                Our Products
            </TopLine>
            </TextWrapper>
            <Link to ='/services' style={{textDecoration:'none', color:'#fff'}}>
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
            </Link>
            </Container>
            </InfoSec>


    </>
  )
}

export default Projects;