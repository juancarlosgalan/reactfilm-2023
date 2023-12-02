import { createContext, useContext } from "react";

export const CardContext = createContext();
export const { Provider } = CardContext;
export const usecardContext = () => useContext(CardContext);