import styled from "styled-components";

export const StyledInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  position: relative;
  padding-top: 13px;
  input {
    height: 60px;
    width: 100%;
    outline: none;
    padding: 15px 20px;
    border-radius: 8px;
    background-color: #ffffff;
    border: 2px solid #999999;
    font-size: 1rem;
    font-weight: 400;
    line-height: 19px;
    margin-bottom: 22px;

    text-align: left;
    color: #333333;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    -webkit-appearance: none;
  }
  input:focus {
    border: 2px solid #168821;
  }
  input::placeholder {
    color: transparent;
  }
  label {
    pointer-events: none;
    position: absolute;
    top: calc(50% - 8px);
    color: #999999;
    left: 15px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    background-color: white;
    padding: 5px;
    box-sizing: border-box;
  }
  /*  input:required:invalid + label {
    color: red;
  } */
  input:focus:required:invalid {
    border: 2px solid red;
  }
  /* input:required:invalid + label:before {
    content: "*";
  } */
  input:focus + label,
  input:not(:placeholder-shown) + label {
    font-size: 13px;
    top: 0;
    color: #999999;
  }
`;

export const StyledPErrors = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #e60000;
  margin-bottom: 14px;
`;
