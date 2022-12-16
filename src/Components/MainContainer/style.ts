import styled from "styled-components";

export const StyledMain = styled.main`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  ul {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 770px) {
      display: flex;
      overflow-y: auto;
      flex-wrap: nowrap;
      width: 100%;
      margin-bottom: 30px;
    }
    li {
      margin-left: 30px;
    }
    li:hover {
      border: 2px solid #27ae60;
    }
  }
`;
