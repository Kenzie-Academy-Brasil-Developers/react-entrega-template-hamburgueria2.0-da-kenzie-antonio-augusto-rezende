import { createContext, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { api } from "../../Services/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface IContextUserProps {
  submitLogin: (user: ILogin) => void;
  loading: boolean;
  submitRegister: (user: IRegister) => void;
  user: null | IGetAutorization;
  userLoading: boolean;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<IGetAutorization | null>>;
  setUserLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IGetAutorization extends IRegister {
  id: number;
}

interface ILogin {
  name?: string;
  password?: string;
}
interface IRegister {
  email?: string;
  name?: string;
  password?: string;
}

export interface iChildren {
  children: React.ReactNode;
}

interface IData {
  accessToken: string;
  user: User;
}

interface User {
  id: string;
  name: string;
  email: string;
}
interface iDefaultErrorResponse {
  error: string;
}

export const UserContexts = createContext({} as IContextUserProps);

export const UserProvider = ({ children }: iChildren) => {
  const [user, setUser] = useState<null | IGetAutorization>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [userLoading, setUserLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const { reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    async function loaderUser() {
      const token = window.localStorage.getItem("@TOKENHAMBURGUEIRA");
      const id = window.localStorage.getItem("@IDUSERHAMBURGUEIRA");
      if (!token) {
        setUserLoading(false);
        return;
      }
      try {
        const { data } = await api.get<IGetAutorization>(`/users/${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
      } catch (error) {
        window.localStorage.clear();
        toast.error("Voce nao tem token");
        console.error(error);
      } finally {
        setUserLoading(false);
      }
    }
    loaderUser();
  }, []);

  const submitRegister: SubmitHandler<IRegister> = async (user: IRegister) => {
    try {
      setLoading(true);
      const { data } = await api.post<IData>("/users", user);
      reset();
      navigate("/");
      return data;
    } catch (error) {
      const errorAxios = error as AxiosError<iDefaultErrorResponse>;
      toast.error("Algo deu errado");
      console.error(errorAxios);
    } finally {
      setLoading(false);
    }
  };
  const submitLogin: SubmitHandler<ILogin> = async (user: ILogin) => {
    try {
      setLoading(true);

      const { data } = await api.post<IData>("/login", user);
      navigate(`/home/${data.user.id}`);

      window.localStorage.clear();
      window.localStorage.setItem("@TOKENHAMBURGUEIRA", data.accessToken);
      window.localStorage.setItem("@IDUSERHAMBURGUEIRA", data.user.id);

      reset();
    } catch (error) {
      const errorAxios = error as AxiosError<iDefaultErrorResponse>;

      toast.error("Algo deu errado");

      console.error(errorAxios);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContexts.Provider
      value={{
        submitLogin,
        loading,
        submitRegister,
        user,
        userLoading,
        openModal,
        setOpenModal,
        setUser,
        setUserLoading,
      }}
    >
      {children}
    </UserContexts.Provider>
  );
};
