import { Routes, Route } from "react-router-dom";
import { ProtectRoute } from "../Components/ProtectRoute";

import { Home } from "../Pages/Home";
import { LoginPage } from "../Pages/Login";
import { Register } from "../Pages/Register";

export const RouteMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectRoute />}>
        <Route path="/home/:id" element={<Home />} />
      </Route>
    </Routes>
  );
};
