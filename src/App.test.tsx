import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';
import { ThemeProvider, useTheme } from './Context';

describe('Контекст', () => {
    it('Список правильно отрисовывается и реагирует на переключение темы', () => {
        const { container } = render(<App />);

        expect(container).toMatchSnapshot();

        const btn = screen.getByText('Toggle theme');
        userEvent.click(btn);

        expect(container).toMatchSnapshot();
    });

    it('ThemeProvider спускает тему через контекст, useTheme получает тему из контекста', () => {
        function Consumer() {
            const theme = useTheme();
            return <div>{theme}</div>;
        }

        const { container, rerender } = render(
            <ThemeProvider theme={'dark'}>
                <Consumer />
            </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();

        rerender(
            <ThemeProvider theme={'light'}>
                <Consumer />
            </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
    });
});
