import styled from 'styled-components';


export const ImgContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    max-height: 100%;
  }

`;
export const ImgWrapper = styled.div`
    display: flex;
    flex-direction: column;  
  }
  
  &:hover{
    transform: scale(1.02);
  }
  
`;
export const Heading = styled.h1`
    font-size: 20px;
    margin: 7px 0;
`;

export const InfoSec = styled.div`
  color: #fff;
  padding: 70px 0 160px 0;
  background: ${({ lightBg }) => (lightBg? '#000':'#fff'  )};
  align-items: center;
  text-align: center;

`;


export const TextWrapper = styled.div`
  max-width: 100%;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.h2`
  color: #fff;
  font:  Arial sans-serif;
  font-size: 45px;
  font-weight: bold;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 300px;
  vertical-align: middle;
  display: inline-block;
  max-height: 300px;
  z-index: 5;
  position: relative;
  border-radius: 20px;
 
 
`;
export const CTA = styled.div`
  margin-top: 8rem;
  height: 100%;
  width: 100%;
`;
export const CTAContainer= styled.div`
    border-radius: 5px; 
    background: linear-gradient( -168deg, rgba(188, 165, 255, 0) 0%, 
    #214d76 100% );
    box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
    width: 80%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 768px){
    flex-direction: column;
    width: 100%;
    padding-bottom: 15px;
  }
`;

export const Right = styled.div`
 
  flex-direction: row-reverse;
  @media screen and (max-width: 768px){
    margin-top: 10px;
  }
  
`;
export const Left = styled.div`
  max-width: 60%;
  flex-direction: column;
  margin-right: 170px;
  margin-left: 30px;
  @media screen and (max-width: 768px){
    max-width: 100%;
    margin-right: 0;
    margin-top: 10px;
  }

`;
export const Paragrap = styled.p`
  font-family: 'Poppins';
   font: normal;
   color: #696969;
   font-size: 20px;
   line-height: 1.1;
   margin-top: 12px;

`;
export const Headers = styled.h1`
    font-size: 30px;
`;



