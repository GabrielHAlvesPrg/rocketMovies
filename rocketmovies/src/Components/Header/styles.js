import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;


  width: 100%;
  height: 116px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  
  
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  .avatarImg {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > h1 {
    font-size: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > div {
    display: flex;
    position: relative;
    flex-direction: column;
    
    margin-right: 10px;
    margin-left: 64px;

    font-size: 14px;
    
    a {
      position: absolute;
      right: 0;
      bottom: -17px;
      
      
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }

  #inputHeader{
    width: 630px;
    
  }
`;