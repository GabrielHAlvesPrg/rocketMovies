import styled from "styled-components";
import points from "../../assets/star.svg"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

`;

export const Content = styled.div`
  width: 1137px;

  > div {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-top: 50px;

    margin-bottom: 37px;
    
    h1,a {
      margin: 0px
    }

    a {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 10px;
      width: 207px;
      height: 48px;

      padding: 13px 32px;
    
      color: ${({theme}) => theme.COLORS.BACKGROUND_900};
      
     
      svg { 
        position: relative;
        right: 10px;
        bottom: -2px;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
      }

    }
  }

  main {
    display:flex;
    flex-direction:column;
    gap: 24px;
  }
`;

export const Note = styled.div`
  width: 100%;
  height: 270px;


  display: flex;
  flex-direction: column;
  

  background: rgba(255, 133, 155, 0.05);
  border: 1px solid #000000;
  border-radius: 16px;

  padding: 32px;

  
  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE_600};
    margin: 0;
    opacity: 10;
  }

  > p {
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  > svg {
    background-color: red;
  }

  div {
    display: flex;
    margin: 15px auto 32px 0;
    gap: 8px;
  }

  .tag {
    margin: 0;
    width: 100%;
    height: 24px;
    font-size: 12px;
    white-space: nowrap;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    display:flex;

  }
  
`;

export const Points = styled.div`
  background: url(${points}) no-repeat center center;
  width: 84px;
  height: 12px;

  margin: 8px auto 15px 0;
`;