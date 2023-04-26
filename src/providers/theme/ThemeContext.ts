import React, {createContext} from "react";
import themes from "../../constant/themes";

interface ThemeContext {
  theme: string,
  setTheme: React.Dispatch<string>
}

const ThemeContext = createContext<ThemeContext>({
  theme: themes.light,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {},
});

export default ThemeContext;