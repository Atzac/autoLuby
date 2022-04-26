import { createContext, useState, FC, ReactNode, useEffect } from "react";

type propTypes = {
  children: ReactNode;
};

export const AuthContext = createContext<any>(null);
const converte = () => {
  const local = localStorage.getItem("USER_DATA");
  if (local) {
    return JSON.parse(local);
  }
  return null;
};

const Provider: FC<propTypes> = (props) => {
  const [userData, setUserData] = useState<any>(converte());
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("USER_DATA", JSON.stringify(userData));
    setLoading(false);
  }, [userData]);

  return (
    <AuthContext.Provider value={{ userData, setUserData, loading, filter, setFilter }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default Provider;
