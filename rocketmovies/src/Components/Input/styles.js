import styled from "styled-components";

export const Container = styled.div`
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border-radius: 10px;

  > input {
    height: 56px;

    padding-left: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }

  > svg {
    margin-left: 16px;
    }
  
`;