import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#F63356',
    background: '#1A1A1A',
    textGray: '#747474',
    textDarkGray: '#363636',
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
      backgroundColor: '#1A1A1A',
      color: '#747474',
    },
    a: {
      textDecoration: 'none',
    },
    p: {
      marginTop: '0 !important',
    },
  },
};

const Select = {
  variants: {
    unstyled: () => ({
      field: {
        height: '34px',
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: '0.02em',
        padding: 0,
        border: 'none',
        outline: 'none',
      },
      icon: {
        color: 'transparent',
      },
    }),
  },

  defaultProps: {
    size: 'lg',
    variant: 'unstyled',
  },
};

const Input = {
  sizes: {
    lg: {
      field: {
        fontSize: '32px',
        fontWeight: 400,
        letterSpacing: '0.02em',
        textAlign: 'right',
      },
    },
  },

  defaultProps: {
    size: 'lg',
    variant: 'unstyled',
  },
};

export const theme = extendTheme({
  colors,
  components: {
    Select,
    Input,
  },
  styles,
});
