import { useContext } from "react";
import { CartContexts } from "../../Contexts/CartContexts/CartContexts";
import { StyledSearch } from "./Style";

export const ResultsSearch = () => {
  const { formData, setProductSearch } = useContext(CartContexts);
  return (
    <StyledSearch>
      <div>
        <h2>Resultados para:</h2>
        <span>{formData}</span>
      </div>
      <button onClick={() => setProductSearch([])}>Limpar Busca</button>
    </StyledSearch>
  );
};
