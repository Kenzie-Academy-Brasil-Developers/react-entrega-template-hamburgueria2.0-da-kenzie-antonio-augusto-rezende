import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContexts } from "../../Contexts/UserContexts/UserContexts";

export const ProtectRoute = () => {
  const { userLoading } = useContext(UserContexts);
  const token = window.localStorage.getItem("@TOKENHAMBURGUEIRA");
  if (userLoading) {
    return null;
  }

  return token ? <Outlet /> : <Navigate to={"/"} />;
};
