import { DefaultTheme } from 'styled-components';

/**
 * Theme definition based on styled-system theme specification
 * @see {@link https://styled-system.com/theme-specification}
 */
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: string[];
    space: number[];
    radii: string[];
    fontWeights: number[];
    colors: {
      surfaceBackground: string;
      background: string;
      brandPrimary: string;
      brandPrimaryText: string;
      brandSecondary: string;
      blueGray10: string;
      blueGray100: string;
      blueGray400: string;
      blueGray600: string;
      blueGray900: string;
    };
    sizes: {
      button: string;
      header: string;
      input: string;
    };
  }
}

export const theme: DefaultTheme = {
  breakpoints: ['768px'],
  space: [0, 8, 16, 24, 32, 40],
  radii: ['0px', '4px', '8px', '16px', '32px'],
  fontWeights: [400, 500, 600],
  colors: {
    surfaceBackground: '#FFFFFF',
    background: '#F4F8FA',
    brandPrimary: '#1B31A8',
    brandPrimaryText: '#FFFFFF',
    brandSecondary: '#0277FF',
    blueGray10: '#F4F8FA',
    blueGray100: '#CBD5DC',
    blueGray400: '#708797',
    blueGray600: '#4D6475',
    blueGray900: '#1E2A32',
  },
  sizes: {
    button: '56px',
    header: '56px',
    input: '56px',
  },
};
