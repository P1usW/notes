import React from 'react';
import ThemeContext from "./ThemeContext";
import themes from "../../constant/themes";


interface ThemeProvider {
  children: React.ReactNode
}

// Функция, которая ищет значение темы у пользователя с локального хранилища,
// если такой не существует, то устанавливает тему из операционной системы.
// Если тему не удалось определить, ставим светлую тему как основную.
const getTheme = () => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const theme = `${window?.localStorage?.getItem('theme')}`;
  if (Object.values(themes).includes(theme)) return theme;

  const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
  if (userMedia.matches) return themes.dark;

  return themes.light;
}

// Функциональный компонент, в который оборачиваем всё приложение.
// Он будет отслеживать изменение темы и будет изменять значение
// темы в html теге.
const ThemeProvider = ({ children }: ThemeProvider) => {
  const [ theme, setTheme ] = React.useState(getTheme);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [ theme ]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider