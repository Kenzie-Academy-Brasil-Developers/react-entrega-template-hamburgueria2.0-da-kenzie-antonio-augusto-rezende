import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & > section:nth-child(2) {
    border: 2px solid #f5f5f5;
    border-radius: 5px;
    padding: 33px 24px 24px 28px;
    width: 30%;
    @media (max-width: 700px) {
      width: 90%;
    }
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 35px;
      h2 {
        font-size: 18px;
        font-weight: 700;
        color: #333333;
        text-align: left;
      }
      a {
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
        text-decoration-line: underline;
        color: var(--color-gray-300);
      }
    }
    form {
      input:nth-child(n + 3) {
        height: 60px;
        width: 100%;
        outline: none;
        padding: 0px, 15px, 0px, 15px;
        border-radius: 8px;
        background-color: #f5f5f5;
        border: 2px solid #f5f5f5;
        font-size: 1rem;
        font-weight: 400;
        line-height: 19px;
        text-align: left;
        color: #333333;
        padding-left: 15px;
        margin-bottom: 22px;
      }
      input::placeholder {
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: #999999;
      }
      button {
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
      }
    }
  }
`;
