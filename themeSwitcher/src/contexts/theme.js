import { createContext, useContext } from "react";

// you can pass in initial values that you need in your context in the next line as well
export const themeContext = createContext({
  themeMode: "light",
  darktheme: () => {},
  lighttheme: () => {},
});

export const ThemeProvider = themeContext.Provider;

// exporting custom hook
export default function useTheme() {
  return useContext(themeContext);
}
