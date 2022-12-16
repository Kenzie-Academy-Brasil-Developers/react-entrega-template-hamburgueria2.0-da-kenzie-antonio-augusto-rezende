import { useContext } from "react";
import { Header } from "../../Components/Header";
import { ListProducts } from "../../Components/ListProducts";
import { MainContainer } from "../../Components/MainContainer";
import { Modal } from "../../Components/Modal";
import { ResultsSearch } from "../../Components/TitleSearch";
import { CartContexts } from "../../Contexts/CartContexts/CartContexts";
import { UserContexts } from "../../Contexts/UserContexts/UserContexts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  const { product, productSearch } = useContext(CartContexts);
  const { openModal } = useContext(UserContexts);

  return (
    <>
      {openModal && <Modal />}
      <Header />
      <MainContainer>
        {productSearch.length !== 0 && <ResultsSearch />}
        <ul>
          {productSearch.length
            ? productSearch.map((item) => (
                <ListProducts
                  name={item.name}
                  key={item.id}
                  price={item.price}
                  category={item.category}
                  img={item.img}
                  product={item}
                  id={item.id}
                />
              ))
            : product.map((item) => {
                return (
                  <ListProducts
                    name={item.name}
                    key={item.id}
                    price={item.price}
                    category={item.category}
                    img={item.img}
                    product={item}
                    id={item.id}
                  />
                );
              })}
        </ul>
      </MainContainer>
      <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
