import styled from "styled-components";

export const StyledLoading = styled.div`
  background-color: var(--color-opacity);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  div {
    display: flex;
    gap: 10px;

    div {
      height: 20px;
      width: 20px;
      background-color: var(--color-primary);
      border-radius: 50%;
      animation: bounce 300ms infinite ease-in-out alternate;
    }

    div:nth-child(2) {
      animation-delay: 100ms;
    }
    div:nth-child(3) {
      animation-delay: 200ms;
    }
  }
  @keyframes bounce {
    to {
      transform: translateY(12px);
    }
  }
`;
