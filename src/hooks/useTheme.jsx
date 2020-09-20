import { useEffect, useState } from "react";

import { LIGHT_THEME, DARK_THEME, THEME_KEY } from '../utils/constants';

const useTheme = () => {
    const [theme, setTheme] = useState(LIGHT_THEME);

    const toggleTheme = () => {
        if (theme === LIGHT_THEME) {
            window.localStorage.setItem(THEME_KEY, DARK_THEME);
            setTheme(DARK_THEME);
        } else {
            window.localStorage.setItem(THEME_KEY, LIGHT_THEME);
            setTheme(LIGHT_THEME);
        }
        document.body.classList.toggle('dark');
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem(THEME_KEY);
        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === DARK_THEME) {
                document.body.classList.toggle('dark');
            }
        }
    }, []);

    return [
        theme,
        toggleTheme,
    ];
};

export default useTheme;
