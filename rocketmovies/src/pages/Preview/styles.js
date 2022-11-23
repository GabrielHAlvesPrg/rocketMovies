import styled from "styled-components";
import noteStar from "../../assets/starfull.svg";
import hourImg from "../../assets/Vector.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

`;

export const Content = styled.div`
  width: 1137px;
  height: 581px;

  margin-top: 40px;
 
  > a {
    margin-bottom: 24px;
    color: ${( {theme }) => theme.COLORS.PINK};
  }
  
  > svg {
    color: ${( {theme }) => theme.COLORS.PINK};
    margin-right: 8px;    
  }

  .titulo-nota{
    margin-top: 24px;
    margin-bottom: 24px;
    margin-left: -12px;

    width: 360px;
    display: flex;
    

    align-items: center;
  
    
  }

  .post {
    margin-top: 24px;
    margin-bottom: 40px;
    margin-left: -10px;

    width: 240px;
    display: flex;
    

    align-items: center;
    
    img{
      width:15px;
      height: 16px;
      border-radius: 10px
    }
  }

  .dateHour {
    margin-top: 24px;
    margin-bottom: 40px;
    margin-left: -70px;

    width: 240px;
    display: flex;
    

    align-items: center;

  }

  .info {
    display: flex;
    width: 500px;

    margin-left: 0;
  }

  .tag {
    background: ${({theme}) => theme.COLORS.BACKGROUND_500};
  }

  .tags {
    margin-bottom: 40px;
    margin-left: 0;
  }

  p {
    text-align: justify;
  }
`;

export const NoteStar = styled.div`
  background: url(${noteStar}) no-repeat center center;
  width: 140px;
  height: 20px;
  
`;

export const HourImg = styled.div`
  background: url(${hourImg}) no-repeat center center;
  width: 16px;
  height: 25px;

  margin-left:65px;

  position: relative;
  bottom: -4px;
  
`;