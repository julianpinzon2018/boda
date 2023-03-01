import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const data = {
    modal,
    setModal,
  };
  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};

export default ModalContextProvider;
