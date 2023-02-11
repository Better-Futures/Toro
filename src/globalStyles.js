import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
export const Paragraph = styled.p`
   font-family: 'Poppins';
   font: normal;
   color: #696969;
   font-size: 20px;
   line-height: 1.1;
   max-width: 350px;
   margin-top: 16px;
   margin-bottom: 16px;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: linear-gradient(
    157.81deg,
    #faedde -43.27%,
    #f5ddbe -21.24%,
    #f0cf9d 12.19%,
    #ddb66c 29.82%,
    #ddaa4c 51.94%,
    #da9b27 90.29%
  );
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: #da9b27;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
