import { createContext } from 'react';

export const themeContext = createContext({
    isDarkMode: false,
    setIsDarkMode: (val: boolean) => { }
});