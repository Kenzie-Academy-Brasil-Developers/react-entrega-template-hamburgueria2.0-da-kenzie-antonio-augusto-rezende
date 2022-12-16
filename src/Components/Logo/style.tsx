import styled from "styled-components";
export {};
export const StyledLogo = styled.section`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & > img {
    margin-bottom: 22px;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 4px 40px -20px #00000040;
    height: 95px;
    width: 377px;
    border-radius: 5px;
    margin-bottom: 30px;
    padding: 17px 23px 18px 14px;

    div:nth-child(1) {
      height: 60px;
      width: 35%;
      border-radius: 5px;
      background-color: #27ae601a;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 19px;

      img {
        height: 20px;
        width: 18px;
      }
    }
    p {
      font-size: 14px;
      font-weight: 500;
      line-height: 22px;
      color: #828282;
    }
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
