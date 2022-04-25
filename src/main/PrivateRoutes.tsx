import { Navigate } from "react-router-dom";
import { getSession } from "@helpers/localStorage";

type propsType = {
  children: JSX.Element;
};

const PrivateRoutes = (props: propsType) => {
  const authenticated = getSession();
  
  if (!authenticated) {
    return <Navigate to="/login" />;
  }
  return props.children;
};

export default PrivateRoutes;
