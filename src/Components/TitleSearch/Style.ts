import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  div {
    display: flex;
    align-items: center;
  }
  h2 {
    font-size: 26px;
    font-weight: 700;
    color: #333333;
  }
  span {
    font-size: 26px;
    font-weight: 700;
    color: #828282;
    margin-left: 10px;
  }
  button {
    padding: 0 20px;
    height: 40px;
    background-color: #27ae60;
    border: 2px solid #27ae60;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
    border-radius: 8px;
    margin-bottom: 15px;
    width: 16%;
    margin-left: 21px;
  }
  @media (max-width: 770px) {
    h2 {
      font-size: 21px;
    }
    span {
      font-size: 21px;
    }
    button {
      display: none;
    }
  }
`;
