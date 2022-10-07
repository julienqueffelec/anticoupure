import {
  ThemeProvider,
  createBox,
  createText,
  useTheme as useReTheme
} from '@shopify/restyle';
import React from 'react';
import type { ReactNode } from 'react';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const aspectRatio = width / 375;

export const palette = {
  primary: '#04070E',
  green: '#0ECA18',
  tertiary: '#F9F9FA',
  white: '#fff',
  orange: 'orange',
  red: 'red'
};

const theme = {
  colors: {
    primary: palette.primary,
    tertiary: palette.tertiary,
    white: palette.white,
    green: palette.green,
    orange: palette.orange,
    red: palette.red
  },
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 80
  },
  borderRadii: {
    xxs: 1,
    xs: 2,
    s: 4,
    m: 10,
    l: 25,
    xl: 75
  },
  textVariants: {
    hero: {
      fontSize: 40,
      color: 'white',
      textAlign: 'center'
    },
    title1: {
      fontSize: 28,
      color: 'white',
      fontFamily: 'Nunito-Black'
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      color: 'white',
      fontFamily: 'Nunito-Black'
    },
    title3: {
      fontSize: 16,
      lineHeight: 24,
      color: 'white',
      fontFamily: 'Nunito-Black'
    },
    body: {
      fontSize: 14,
      lineHeight: 24,
      color: 'white',
      fontFamily: 'Nunito-Regular'
    },
    danger: {
      fontSize: 14,
      lineHeight: 24,
      color: 'danger'
    },
    bodyUppercase: {
      fontSize: 14,
      lineHeight: 24,
      textTransform: 'uppercase',
      color: 'white',
      fontFamily: 'Nunito-Regular'
    },
    bodyBold: {
      fontSize: 14,
      lineHeight: 24,
      color: 'white',
      fontFamily: 'Nunito-Bold'
    },
    button: {
      fontSize: 13,
      color: 'text',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontFamily: 'Nunito-Bold'
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      color: 'green'
    }
  },
  breakpoints: {
    phone: 0,
    tablet: 768
  }
};

export const ReStyleThemeProvider = ({ children }: { children: ReactNode }) => (
  <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
);

export type Theme = typeof theme;

export const Box = createBox<Theme>();

export const Text = createText<Theme>();

export const useTheme = () => useReTheme<Theme>();
