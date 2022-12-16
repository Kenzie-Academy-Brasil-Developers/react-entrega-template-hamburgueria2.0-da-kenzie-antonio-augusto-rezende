import { useContext } from "react";
import { CartContexts } from "../../Contexts/CartContexts/CartContexts";
import { IProducts } from "../../Services/getProducts";
import { StyledProductCardLi } from "./style";

interface IPropsCard extends IProducts {
  key: number;
  product: IProducts;
}

export const ListProducts = ({
  name,
  category,

  price,
  img,
  product,
}: IPropsCard) => {
  const { carrinho } = useContext(CartContexts);

  return (
    <StyledProductCardLi>
      <img src={img} alt="" />

      <h3>{name}</h3>
      <p>{category}</p>
      <span>
        {price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <button onClick={() => carrinho(product)}>Adicionar</button>
    </StyledProductCardLi>
  );
};
