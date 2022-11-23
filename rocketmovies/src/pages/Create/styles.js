import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
`;

export const Content = styled.div`
  max-width: 1137px;

  margin-top: 40px;

  
  
  > a {
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK};
    position: relative;
    right: -25px;
  }
  
  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-right: 8px;
    position: absolute;
    top: 159px;
  }

  > h1 {
    margin-top: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE_600};
  }

  #input {
    display: flex;

    width: 100%;

    margin-top: 40px;
    gap: 40px;

    -webkit-appearance: none;

    input {
      width: 547px;
    }

    input[type=number]::-webkit-inner-spin-button { 
      -webkit-appearance: none;
      
    }
  }

  textarea {
    width: 100%;
    height: 274px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    margin-top: 40px;
    border-radius: 10px;
    padding: 16px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }

  > h2 {
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_500};

    margin-top: 40px;
    margin-bottom: 24px;
  }

  #tag{
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  #tags{
    padding:16px 24px 16px 16px;
    width: 1137px;
    height: 88px;
    border-radius: 10px;
  }

  section {
    display: flex;
    background-color: #0D0C0F;
    border-radius: 10px;
    height: 88px;
    width: 1137px;
  }

  .marcadores {
    display: flex;
    position: relative;
    top: 15px;
    left: -500px;
    max-width: 113px;
    height: 56px;
    gap: 24px;
  }

  .excluirFilme {
    width: 536px;
    height: 56px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

    color: ${({ theme }) => theme.COLORS.PINK};

    border-radius: 10px;

    margin-top: 40px;
  }

  .salvarAlteracao {
    width: 536px;
    height: 56px;
    background: ${({ theme }) => theme.COLORS.PINK};

    color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    border-radius: 10px;

    margin-top: 40px;
    margin-left: 60px;
  }
`;