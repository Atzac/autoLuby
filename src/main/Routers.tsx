import { Routes, Route } from "react-router-dom";
import { Home, Login, AllVehicles, YourVehicles, Employees } from "@page/index";
import PrivateRoutes from "./PrivateRoutes";

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Login />
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />

      <Route path="/allVehicles" element={<AllVehicles />} />
      <Route path="/yourVehicles" element={<YourVehicles />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  );
};
export default Routers;
