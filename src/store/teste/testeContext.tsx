import { createContext, useState, FC, ReactNode } from "react";

export const TesteContext = createContext<any>(null);

type propTypes = {
  children: ReactNode;
};

const TesteProvider: FC<propTypes> = (props) => {
  const [a, setA] = useState<any>("Isaac");
  return (
    <TesteContext.Provider value={{ a, setA }}>
      {props.children}
    </TesteContext.Provider>
  );
};

export default TesteProvider;
