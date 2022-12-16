import { StyledBoxModal, StyledModal } from "./style";
import { VscChromeClose } from "react-icons/vsc";
import { useContext } from "react";
import { UserContexts } from "../../Contexts/UserContexts/UserContexts";
import { LoadingComp } from "../Loading";

import lixo from "../../Assets/lixo.svg";
import { CartContexts } from "../../Contexts/CartContexts/CartContexts";

export const Modal = () => {
  const { loading, setOpenModal } = useContext(UserContexts);
  const { item, setItem, sumTotal, itemTrash, carrinho, carrinhoSub } =
    useContext(CartContexts);

  return (
    <StyledModal>
      {loading && <LoadingComp />}
      <StyledBoxModal>
        <header>
          <h2>Carrinho de Compras</h2>
          <button onClick={() => setOpenModal(false)}>
            <VscChromeClose />
          </button>
        </header>

        {item.length !== 0 ? (
          <>
            <ul>
              {item.map((product) => (
                <li key={product.id}>
                  <div>
                    <div>
                      <img src={product.img} alt="" />
                    </div>
                    <div>
                      <p>{product.name}</p>
                      <div>
                        <button type="button" onClick={() => carrinho(product)}>
                          +
                        </button>
                        <span>{product.quantidade}</span>
                        <button
                          type="button"
                          onClick={() => carrinhoSub(product)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => itemTrash(product.id)}>
                    <img src={lixo} alt="lixo" />
                  </button>
                </li>
              ))}
            </ul>
            <div>
              <p>Total</p>
              <span>
                {sumTotal.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <button onClick={() => setItem([])}>Remover todos</button>
          </>
        ) : (
          <section>
            <p>Sua sacola está vazia</p>
            <p>Adicione itens</p>
          </section>
        )}
      </StyledBoxModal>
    </StyledModal>
  );
};
