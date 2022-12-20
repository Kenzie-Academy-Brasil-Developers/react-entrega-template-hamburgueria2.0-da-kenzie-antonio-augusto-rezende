import { LogoMaster } from "../../Components/Logo";
import { MainLogin } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { Inputs } from "../../Components/Inputs";
import { useForm, UseFormRegister, FieldValues } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { formShemaLogin } from "./ShemaLogin";
import { StyledPErrors } from "../../Components/Inputs/style";
import { useContext, useEffect } from "react";
import { UserContexts } from "../../Contexts/UserContexts/UserContexts";
import { LoadingComp } from "../../Components/Loading";
import "react-toastify/dist/ReactToastify.css";

interface ILoginPage {
  email?: string;
  password?: string;
  register?: UseFormRegister<FieldValues>;
}

export const LoginPage = () => {
  const { loading, submitLogin, autoLogin } = useContext(UserContexts);
  useEffect(() => {
    autoLogin();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginPage>({
    resolver: yupResolver(formShemaLogin),
  });

  return (
    <>
      {loading && <LoadingComp />}
      <MainLogin>
        <section>
          <h2>Login</h2>
          <form onSubmit={handleSubmit(submitLogin)}>
            <Inputs
              text="Email"
              chave="email"
              type="email"
              register={register}
            />
            {errors.email && (
              <StyledPErrors>{errors.email.message}</StyledPErrors>
            )}
            <Inputs
              text="Senha"
              type="password"
              chave="password"
              register={register}
            />
            {errors.password && (
              <StyledPErrors>{errors.password.message}</StyledPErrors>
            )}
            <button type="submit">Logar</button>
          </form>
          <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
          <Link to="/register">Cadastrar</Link>
        </section>
        <LogoMaster />
      </MainLogin>
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
