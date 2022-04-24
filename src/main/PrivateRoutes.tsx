import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "@store/index";

type propsType = {
  children: JSX.Element;
};

const PrivateRoutes = (props: propsType) => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) {
    return <Navigate to="/login" />;
  }
  return props.children;
};

export default PrivateRoutes;
