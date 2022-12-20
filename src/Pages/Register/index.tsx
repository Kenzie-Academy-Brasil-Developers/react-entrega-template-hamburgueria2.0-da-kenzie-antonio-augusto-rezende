import { LogoMaster } from "../../Components/Logo";
import { Main } from "./style";
import { Link } from "react-router-dom";
import { Inputs } from "../../Components/Inputs";
import { ToastContainer } from "react-toastify";
import { useForm, UseFormRegister, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formShemaRegister } from "./ShemaRegister";
import { StyledPErrors } from "../../Components/Inputs/style";
import { useContext } from "react";
import { UserContexts } from "../../Contexts/UserContexts/UserContexts";
import { LoadingComp } from "../../Components/Loading";
import "react-toastify/dist/ReactToastify.css";

interface IRegister {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  register?: UseFormRegister<FieldValues>;
}

export const Register = () => {
  const { submitRegister, loading } = useContext(UserContexts);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: yupResolver(formShemaRegister),
  });

  return (
    <>
      {loading && <LoadingComp />}
      <Main>
        <LogoMaster />
        <section>
          <div>
            <h2>Cadastro</h2>
            <Link to="/">Retornar para o login</Link>
          </div>
          <form onSubmit={handleSubmit(submitRegister)}>
            <Inputs text="Nome" type="text" register={register} chave="name" />
            {errors.name && (
              <StyledPErrors>{errors.name.message}</StyledPErrors>
            )}
            <Inputs
              text="Email"
              type="email"
              register={register}
              chave="email"
            />
            {errors.email && (
              <StyledPErrors>{errors.email.message}</StyledPErrors>
            )}
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            {errors.password && (
              <StyledPErrors>{errors.password.message}</StyledPErrors>
            )}
            <input
              type="password"
              placeholder="Confirmar Senha"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <StyledPErrors>{errors.confirmPassword.message}</StyledPErrors>
            )}
            <button type="submit">Cadastrar</button>
          </form>
        </section>
      </Main>
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
