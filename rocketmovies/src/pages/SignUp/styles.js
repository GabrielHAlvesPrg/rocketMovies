import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  
`;

export const Form = styled.form`
  padding: 0 136px;

  

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-left: 0;
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
    color: ${({ theme }) => theme.COLORS.WHITE_600};
    
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    margin-left: 0;

  }

  > a {
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};

    svg{
      position: relative;
      top: 2px;
      right: 8px;
    }
  }

  .input{
  }
  
  > div {
    width: 340px;
    height: 56px;
    margin-bottom: 8px;
  }

  > button {
    width: 340px;
    height: 56px;

    background: ${({theme}) => theme.COLORS.PINK};
    border-radius: 10px;

    margin-top: 16px;
  }
  
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
 
  opacity: 0.7;
`;