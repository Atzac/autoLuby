import React, { createContext, useState, FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<any>(null);

type propTypes = {
  children: ReactNode;
};

const Provider: FC<propTypes> = (props) => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  const login = (email: string, password: string) => {
    if (email === "a") {
      setUser({ email, password });
      navigate("/");
    }
  };

  const logOut = () => {
    setUser(null);
    navigate("/")
  };

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, login, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default Provider;
