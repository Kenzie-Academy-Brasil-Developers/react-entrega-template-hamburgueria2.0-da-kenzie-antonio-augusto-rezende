import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContexts } from "../../Contexts/UserContexts/UserContexts";

export const ProtectRoute = () => {
  const { user, userLoading } = useContext(UserContexts);
  if (userLoading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to={"/"} />;
};
