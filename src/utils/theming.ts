export enum Theme {
    System = 'system',
    Light = 'light',
    Dark = 'dark',
}

const DEFAULT_THEME = Theme.System;

export const isSystemThemeDark = (): boolean => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export const isDarkTheme = (theme: Theme): boolean => {
    if (theme === Theme.System) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return theme === Theme.Dark;
}

export const getCurrentTheme = (): Theme => {
    return localStorage?.theme ? localStorage.theme : DEFAULT_THEME;
}

export const getNextTheme = (currentTheme?: Theme): Theme => {
    if (!currentTheme) {
        currentTheme = getCurrentTheme();
    }
    
    switch(currentTheme) {
        case Theme.System:
            return isSystemThemeDark() ? Theme.Light : Theme.Dark;
        case Theme.Light:
            return isSystemThemeDark() ? Theme.Dark : Theme.System;
        case Theme.Dark:
            return isSystemThemeDark() ? Theme.System : Theme.Light; 
    }
}

export const switchToNextTheme = (currentTheme?: Theme): Theme => {
    if (!currentTheme) {
        currentTheme = getCurrentTheme();
    }
    
    const nextTheme = getNextTheme();
    
    localStorage.theme = nextTheme;

    applyTheme(nextTheme);

    return nextTheme;
}

export const applyTheme = (theme?: Theme): void => {
    if (!theme) {
        theme = getCurrentTheme();
    }

    if (isDarkTheme(theme)) {
        document.documentElement.classList.add('dark');
        return;
    }
    document.documentElement.classList.remove('dark');
}
