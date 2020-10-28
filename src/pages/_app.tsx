import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from '@/hooks/usePersistedState';

import GlobalStyle from '@/styles/GlobalStyle';
import light from '@/styles/themes/light';
import dark from '@/styles/themes/dark';

import ThemeSwitch from '@/components/ThemeSwitch';

export default function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('@theme', light);

    const toogleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
            <ThemeSwitch onChangeAction={toogleTheme} />
        </ThemeProvider>
    );
}
