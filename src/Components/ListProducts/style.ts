import styled from "styled-components";

export const StyledProductCardLi = styled.li`
  border: 2px solid #e0e0e0;
  height: 346px;
  width: 300px;
  border-radius: 5px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 12px;

  img {
    background-color: #f5f5f5;
    width: 100%;
    height: 50%;
    object-fit: none;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #333333;
    margin-left: 21px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: #828282;
    margin-left: 21px;
  }
  span {
    font-size: 14px;
    font-weight: 600;
    color: #27ae60;
    margin-left: 21px;
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
    width: 40%;
    margin-left: 21px;
  }
  @media (max-width: 770px) {
    min-width: 225px;
    margin-right: 20px;
    button {
      width: 50%;
    }
  }
`;
