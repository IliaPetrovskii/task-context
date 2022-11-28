import { useState } from 'react';
import { ThemeProvider, useTheme } from './Context';
import { data, IItem } from './data';
import './styles.css';

type Theme = 'light' | 'dark';

export function App() {
    const [currentTheme, setCurrentTheme] = useState<Theme>('light');

    function changeTheme() {
        setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }

    const className = `app app_${currentTheme}`;
    return (
        <ThemeProvider theme={currentTheme}>
            <div className={className}>
                <button onClick={changeTheme}>Toggle theme</button>
                <List data={data} />
            </div>
        </ThemeProvider>
    );
}

function List(props: { data: IItem[] }) {
    return (
        <div>
            {data.map((item) => (
                <ListItem caption={item.name} key={item.id} />
            ))}
        </div>
    );
}

function ListItem(props: { caption: string }) {
    const className = `listItem listItem_${useTheme()}`;
    return <div className={className}>{props.caption}</div>;
}
