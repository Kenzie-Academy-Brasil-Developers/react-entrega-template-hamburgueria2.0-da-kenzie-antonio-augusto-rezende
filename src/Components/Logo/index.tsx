import { StyledLogo } from "./style";
import logo from "../../Assets/Mask Group.svg";
import bag from "../../Assets/shopping-bag.svg";
import balls from "../../Assets/Group 135.svg";

export const LogoMaster = () => {
  return (
    <StyledLogo>
      <img src={logo} alt="Burguer Kenzie" />
      <div>
        <div>
          <img src={bag} alt="bag" />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os melhores
          ingredientes.
        </p>
      </div>

      <img src={balls} alt="balls" />
    </StyledLogo>
  );
};
