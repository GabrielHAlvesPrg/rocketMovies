import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

 
  border-radius: 10px;
  border: ${({ theme, isNew }) => isNew ? `dashed 1px ${theme.COLORS.GRAY_600}` : "none"};
 

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
    padding: 16px;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
    padding: 16px;
  }

  > input {
    

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }
`;