import { toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getProducts, IProducts } from "../../Services/getProducts";
export {};

interface IContextCartProps {
  submitSearch: (data: ISearch) => void;
  handleExit: () => void;
  product: IProducts[];
  formData: string;
  setFormData: React.Dispatch<React.SetStateAction<string>>;
  productSearch: IProducts[];
  setProductSearch: React.Dispatch<React.SetStateAction<IProducts[]>>;
  setItem: React.Dispatch<React.SetStateAction<ICarrinho[]>>;
  item: ICarrinho[];
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  sum: () => void;
  sub: () => void;
  itemTrash: (id: number) => void;
  total: number;
  sumTotal: number;
  carrinho(itemSelect: IProducts): void;
  carrinhoSub(itemSelect: IProducts): void;
}
export interface ICarrinho extends IProducts {
  quantidade: number;
}

interface iChildren {
  children: React.ReactNode;
}
interface ISearch {
  item: string;
}

export const CartContexts = createContext({} as IContextCartProps);

export const CartProvider = ({ children }: iChildren) => {
  const [product, setProduct] = useState([] as IProducts[]);
  const [productSearch, setProductSearch] = useState([] as IProducts[]);
  const [formData, setFormData] = useState("");
  const [item, setItem] = useState([] as ICarrinho[]);
  const [counter, setCounter] = useState(1);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const submitSearch: SubmitHandler<ISearch> = (data) => {
    setFormData(data.item);
  };

  const sum = () => {
    setCounter(counter + 1);
  };
  const sub = () => {
    setCounter(counter - 1);
  };

  const itemTrash = (id: number) => {
    // eslint-disable-next-line array-callback-return
    const filterFood = item.filter((product) => {
      if (product.id !== id) {
        return item;
      }
    });
    setItem(filterFood);
  };
  function carrinho(itemSelect: IProducts) {
    const newListCart = item.map((food) => {
      if (food.id === itemSelect.id) {
        let counter = food.quantidade + 1;
        return { ...food, quantidade: counter };
      } else {
        return food;
      }
    });

    item.some((prod) => prod.id === itemSelect.id)
      ? setItem(newListCart)
      : setItem([...item, { ...itemSelect, quantidade: 1 }]);
    toast.success("Item adicionado");
  }
  function carrinhoSub(itemSelect: IProducts) {
    const newListCart = item.map((food) => {
      if (food.id === itemSelect.id) {
        let counter = food.quantidade - 1;

        return { ...food, quantidade: counter };
      } else {
        return food;
      }
    });

    item.some((prod) => prod.id === itemSelect.id)
      ? setItem(newListCart)
      : setItem([...item, { ...itemSelect, quantidade: 1 }]);
    toast.success("Item excluido");
  }

  const sumTotal = item.reduce(
    (acc, cur) => acc + cur.price * cur.quantidade,
    0
  );

  useEffect(() => {
    const itensSearched = () => {
      if (formData.length) {
        // eslint-disable-next-line array-callback-return
        const foodsFiltered = product.filter((food) => {
          if (
            food.name.toLowerCase().includes(formData.toLocaleLowerCase()) ||
            food.category.toLowerCase().includes(formData.toLocaleLowerCase())
          ) {
            return food;
          }
        });

        setProductSearch(foodsFiltered);
        return foodsFiltered;
      } else {
      }
    };
    itensSearched();
  }, [formData]);

  const handleExit = () => {
    window.localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    async function loaderProducts() {
      const token = window.localStorage.getItem("@TOKENHAMBURGUEIRA");
      try {
        if (token) {
          const response = await getProducts(token);
          setProduct(response);
        }
      } catch (error) {
        console.error(error);
      }
    }
    loaderProducts();
  }, []);

  return (
    <CartContexts.Provider
      value={{
        submitSearch,
        handleExit,
        product,
        formData,
        setFormData,
        productSearch,
        setProductSearch,
        setItem,
        item,
        setCounter,
        counter,
        sum,
        sub,
        itemTrash,
        total,
        sumTotal,
        carrinho,
        carrinhoSub,
      }}
    >
      {children}
    </CartContexts.Provider>
  );
};
