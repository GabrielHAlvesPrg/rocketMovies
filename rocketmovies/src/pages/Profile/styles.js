import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: rgba(255, 133, 155, 0.05);

    padding:50px;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

  }

  .voltar{  
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  
  svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 24px;

      

      position: relative;
      bottom: -6px;
      left: -8px;
    }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  a {
    position: relative;
    left: -460px;
    top: -120px;
    
    color: ${({ theme }) => theme.COLORS.PINK};

  }

  

  > div:nth-child(3){
    margin-top: 8px;
  }

  > div:nth-child(5){
    margin-top: 8px;
  }

  > div:nth-child(4){
    margin-top: 24px;
  }

  button {
    width: 340px;
    height: 48px;
    
    color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 10px;

    margin-top: 38px;
  }

`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 64px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      position: absolute;
      bottom: 13px;
      right: -7px;
    }

  }
`;