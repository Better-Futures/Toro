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


