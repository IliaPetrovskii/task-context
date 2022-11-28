import { ReactElement } from 'react';

type Theme = 'light' | 'dark';

export function ThemeProvider(props: {
    theme: Theme;
    children: ReactElement;
}) {}

export function useTheme(): Theme {}
