import styled from "styled-components";

export const MainLogin = styled.main`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
  & > section:nth-child(1) {
    border: 2px solid #f5f5f5;
    border-radius: 5px;
    padding: 33px 24px 24px 28px;
    width: 30%;
    @media (max-width: 700px) {
      width: 95%;
    }
    h2 {
      font-size: 18px;
      font-weight: 700;
      color: #333333;
      text-align: left;
      margin-bottom: 12px;
    }
    form {
      button {
        height: 60px;
        width: 100%;
        border-radius: 8px;
        padding: 0px 40px 0px 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #219653;
        border: none;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        color: #ffffff;
        margin-bottom: 20px;
      }
    }
    & > p {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      color: #999999;
      text-align: center;
      padding: 0px 60px;
      margin-bottom: 20px;
    }
    a {
      height: 60px;
      width: 100%;
      border-radius: 8px;
      padding: 0px 40px 0px 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f5f5f5;
      border: none;
      font-size: 1rem;
      font-weight: 600;
      text-align: center;
      color: #828282;
      text-decoration: none;
    }
  }
  & > section:nth-child(2) {
    @media (max-width: 700px) {
      display: block;
      width: 90%;
      height: 25%;
      div {
        width: 100%;
      }
      & > img:nth-last-of-type(1) {
        display: none;
      }
    }

    /* img:nth-child(2) {
      display: none;
    } */
  }
`;
