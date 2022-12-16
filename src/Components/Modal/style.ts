import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  background: #33333380;
`;

export const StyledBoxModal = styled.div`
  background: #ffffff;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 4px 40px -10px #00000040;
  height: fit-content;
  top: 189px;
  border-radius: 4px;
  animation: animateModal 2s;
  @media (max-width: 700px) {
    width: 90%;
    height: 45%;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    background-color: var(--color-primary);
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    margin-bottom: 15px;
    height: 50px;

    h2 {
      font-size: 18px;
      font-weight: 700;
      color: #ffffff;
      margin-left: 20px;
    }
    button {
      background: none;
      border: none;
      margin-right: 12px;
      color: #ffffff80;
      width: 20px;
      height: 20px;
    }
  }
  ul {
    border-bottom: 2px solid #e0e0e0;
    li {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 20px;
      div:nth-child(1) {
        display: flex;

        div:nth-child(1) {
          background-color: #e0e0e0;
          padding: 13px;
          border-radius: 5px;
          img {
            width: 54px;
            height: 54px;
          }
        }
      }
      div:nth-child(2) {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
          font-size: 18px;
          font-weight: 700;
          color: #333333;
        }

        div:nth-child(2) {
          display: flex;
          flex-direction: row;
          height: 50%;
          align-items: end;
          span {
            border: 2px solid #f2f2f2;
            width: 30%;
            height: 71%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: 400;
          }
          button {
            width: 35%;
            height: 70%;
            border: 2px solid #f2f2f2;
            background-color: #f2f2f2;
            color: #eb5757;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }

      button {
        border: none;
        background-color: #ffffff;
      }
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px;
    p {
      font-size: 14px;
      font-weight: 600;
      color: #333333;
    }
    span {
      font-size: 14px;
      font-weight: 600;
      color: #828282;
    }
  }
  & > button:nth-last-child(1) {
    height: 60px;
    border-radius: 8px;
    padding: 0px 20px 0px 20px;
    width: 95%;
    margin-left: 13px;
    border: 2px solid #e0e0e0;
    font-size: 16px;
    font-weight: 600;
    color: #828282;
    margin-bottom: 20px;
  }
  section {
    padding: 40px 0px;
    p:nth-child(1) {
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
      color: #333333;
      text-align: center;
      margin-bottom: 30px;
    }
    p:nth-child(2) {
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      text-align: center;
      color: #828282;
    }
  }

  @keyframes animateModal {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
