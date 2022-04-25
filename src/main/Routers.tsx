import { Routes, Route } from "react-router-dom";
import { Home, Login, AllVehicles, YourVehicles, Employees } from "@page/index";
import PrivateRoutes from "./PrivateRoutes";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
      <Route
        path="/allVehicles"
        element={
          <PrivateRoutes>
            <AllVehicles />
          </PrivateRoutes>
        }
      />
      <Route
        path="/yourVehicles"
        element={
          <PrivateRoutes>
            <YourVehicles />
          </PrivateRoutes>
        }
      />
      <Route
        path="/employees"
        element={
          <PrivateRoutes>
            <Employees />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};
export default Routers;
