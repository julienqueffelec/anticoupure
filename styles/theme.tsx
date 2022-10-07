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
  secondary: '#0ECA17',
  tertiary: '#F9F9FA'
};

const theme = {
  colors: {
    primary: palette.primary,
    secondary: palette.secondary,
    tertiary: palette.tertiary,
    white: '#fff'
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
      color: palette.white,
      textAlign: 'center'
    },
    title1: {
      fontSize: 28,
      color: palette.white,
      fontFamily: 'Nunito-Black'
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      color: palette.white
    },
    title3: {
      fontSize: 16,
      lineHeight: 24,
      color: 'text'
    },
    body: {
      fontSize: 14,
      lineHeight: 24,
      color: 'text'
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
      color: 'text'
    },
    bodyBold: {
      fontSize: 14,
      lineHeight: 24,
      color: 'text'
    },
    button: {
      fontSize: 13,
      color: 'text',
      textAlign: 'center',
      textTransform: 'uppercase'
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      color: 'secondary'
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
