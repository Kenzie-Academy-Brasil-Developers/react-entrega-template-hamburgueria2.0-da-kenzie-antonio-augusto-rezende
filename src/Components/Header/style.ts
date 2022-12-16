import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 80px;
  width: 100vw;
  background-color: #f5f5f5;
  margin-bottom: 30px;

  @media (max-width: 770px) {
    height: 139px;
  }
`;
export const StyledCotainerDiv = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;

  & > img {
    height: 22.851531982421875px;
    width: 150px;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: right;
  }
  input {
    height: 60px;
    width: 365px;
    display: flex;
    border-radius: 8px;
    padding: 0px 10px 0px 15px;
    justify-content: space-between;
    border: 2px solid #e0e0e0;
    background-color: #ffffff;
    font-size: 16px;
    font-weight: 400;
  }
  input:focus {
    outline: 2px solid #333333;
  }
  input::placeholder {
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    color: #e0e0e0;
  }
  div {
    display: flex;
    & > button:first-of-type {
      border: none;
      width: 50px;
      background-color: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 25px;
      p {
        background-color: var(--color-primary);
        border-radius: 7px;
        padding: 5px;
        border: none;
        color: #ffffff;
        position: absolute;
        right: 225px;
        top: 10px;
        font-family: Inter;
        font-size: 14px;
        font-weight: 900;
      }
    }
    & > button:last-of-type {
      border: none;
      margin-left: 25px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: space-evenly;
    width: 95%;
    input {
      width: 65vw;
    }
    div {
      width: 100%;
      & > button:first-of-type {
        p {
          right: 50px;
          top: 60px;
        }
      }
    }
  }
`;

export const StyledButton = styled.button`
  padding: 0 20px;
  height: 40px;
  background-color: #27ae60;
  border: 2px solid #27ae60;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  border-radius: 8px;
  position: absolute;
  margin-right: 15px;
`;
