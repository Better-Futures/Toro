import styled from 'styled-components';


export const Parag = styled.p`
    font-family: inherit;
    font-size: 18px;
`;
export const Paragrap = styled.p`
    font-family: inherit;
    color: #45cf33;
    font-size: 18px;
    padding: 0 3px;
`;

export const Pinkgradient = styled.div`
    z-index: 0;
    width: 40%;
    height: 35%;
    top: 2000px;
    background: linear-gradient(90deg, #f4c4f3 0%, #fc67fa 100%);
    filter: blur(900px);
    @media screen and (max-width: 768px){
    top: 2700px;
  }
    
    `;
export const Whitegradient = styled.div`
    z-index: 1;
    width: 80%;
    height: 80%
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.6);
    filter: blur(750px);
    bottom: 40px;
`;
export const Bluegradient = styled.div`
    z-index: 0;
    width: 50%;
    height: 50%;
    right: 20px;
    bottom: 20px;
    background: linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%);
    filter: blur(123px);
`;

export const InfoSec = styled.div`
  color: #fff;
  padding: 70px 0 160px 0;
  background: ${({ lightBg }) => (lightBg? '#fff':'#000'  )};

`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row':'row-reverse' )};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ?'flex-end' :'flex-start')};
`;

export const TopLine = styled.h1`
  color: ${({ lightheading }) => (lightheading ?'#fff' :'#000')};
  font:  Arial sans-serif;
  font-size: 45px;
  font-weight: bold;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  z-index: 5;
  position: relative;
  border-radius: 20px;
 
`;

export const Heading = styled.h1`
  font-size: 50px;
  font-weight: 600;
  background: radial-gradient(
    64.18% 64.18% at 71.16% 35.69%,
    #dffade 0.89%,
    #c0f5be 17.23%,
    #a0f09d 42.04%,
    #86eb7d 55.12%,
    #61e65c 71.54%,
    #45cf33 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


