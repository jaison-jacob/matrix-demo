import { createContext, useContext } from "react";

type SetValue = (value: any) => void;

interface IThemeContext {
  activeTheme: string;
  setActiveTheme: SetValue;
}

const defaultState = {
  activeTheme: "light",
  setActiveTheme: () => {},
};

export const RootThemeContext = createContext<IThemeContext>(defaultState);

export const useRootThemeContext = () => useContext(RootThemeContext);
