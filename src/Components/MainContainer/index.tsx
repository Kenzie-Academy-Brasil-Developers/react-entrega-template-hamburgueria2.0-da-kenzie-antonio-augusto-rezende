import { iChildren } from "../../Contexts/UserContexts/UserContexts";
import { StyledMain } from "./style";

export const MainContainer = ({ children }: iChildren) => {
  return <StyledMain>{children}</StyledMain>;
};
