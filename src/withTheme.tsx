import React, { Component, FC } from 'react';
import ThemeProvider from './ThemeProvider';
import { Theme } from './types';

export default function withTheme<Props = any>(
  theme?: Theme
): (Child: typeof Component | FC<Props>) => FC<Props> {
  return (Child: typeof Component | FC<Props>): FC<Props> => (props: Props) => (
    <ThemeProvider theme={theme}>
      <Child {...props} />
    </ThemeProvider>
  );
}
