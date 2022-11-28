import { createContext, ReactElement, useContext } from 'react';

type Theme = 'light' | 'dark';
const ThemeContext = createContext<Theme>('dark');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(ThemeContext);
}
