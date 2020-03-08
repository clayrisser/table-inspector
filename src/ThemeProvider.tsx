import React, { FC, ReactNode } from 'react';
import ThemeContext from './contexts/Theme';
import base from './theme/base';
import themes from './theme';
import { Theme } from './types';

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props: ThemeProviderProps) => (
  <ThemeContext.Provider value={props.theme || base(themes['chromeLight'])}>
    {props.children}
  </ThemeContext.Provider>
);

export default ThemeProvider;
