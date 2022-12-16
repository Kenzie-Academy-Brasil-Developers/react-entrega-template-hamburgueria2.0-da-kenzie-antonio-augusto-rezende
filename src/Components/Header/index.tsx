import { StyledButton, StyledCotainerDiv, StyledHeader } from "./style";
import logo from "../../Assets/Mask Group.svg";
import bag from "../../Assets/bag.svg";
import exit from "../../Assets/exit.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContexts } from "../../Contexts/CartContexts/CartContexts";
import { UserContexts } from "../../Contexts/UserContexts/UserContexts";

interface ISearch {
  item: string;
}

export const Header = () => {
  const { submitSearch, handleExit, item } = useContext(CartContexts);
  const { register, handleSubmit } = useForm<ISearch>();
  const { setOpenModal } = useContext(UserContexts);

  return (
    <StyledHeader>
      <StyledCotainerDiv>
        <img src={logo} alt="" />
        <div>
          <form onSubmit={handleSubmit(submitSearch)}>
            <input {...register("item")} />
            <StyledButton type="submit">Pesquisar</StyledButton>
            {/* <ButtonDefault type="submit" text="Pesquisar" /> */}
          </form>
          <button onClick={() => setOpenModal(true)}>
            <img src={bag} alt="bag" />
            <p>{item.length}</p>
          </button>
          <button onClick={handleExit}>
            <img src={exit} alt="exit" />
          </button>
        </div>
      </StyledCotainerDiv>
    </StyledHeader>
  );
};
