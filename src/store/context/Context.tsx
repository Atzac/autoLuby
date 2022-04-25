import { createContext, useState, FC, ReactNode } from "react";

type propTypes = {
  children: ReactNode;
};

export const AuthContext = createContext<any>(null);

const Provider: FC<propTypes> = (props) => {
  const [userData, setUserData] = useState<any>(null);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default Provider;
