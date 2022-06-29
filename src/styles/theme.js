import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#F63356',
    background: '#1A1A1A',
    textGray: '#747474',
    textWhite: '#CDCDCD',
  },
  status: {
    warn: '#FFBC44',
    success: '#17EBA0',
  },
};

const styles = {
  global: {
    body: {
      WebkitTapHighlightColor: 'transparent',
      fontFamily: 'Poppins,  sans-serif;',
    },
    a: {
      textDecoration: 'none',
    },
  },
};

export const theme = extendTheme({
  colors,
  styles,
});
