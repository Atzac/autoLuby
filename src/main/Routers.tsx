import { Routes, Route } from "react-router-dom";
import { Home, Login, AllVehicles, YourVehicles, Employees } from "@page/index";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/allVehicles" element={<AllVehicles />} />
      <Route path="/yourVehicles" element={<YourVehicles />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  );
};
export default Routers;
