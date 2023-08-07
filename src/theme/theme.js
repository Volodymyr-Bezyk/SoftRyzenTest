const theme = {
  colors: {
    white: '#ffffff',
    accent: '#7B61FF',
    bg: '#fefcff',
    logoText: '#7B61FF',
    languageButtonTextColor: '#3F3F3F',
    placeholderColor: '#888888',
    sortListItemColor: '#aca7c3',
    buttonTextColor: '#3F3F3F',
    buttonHoverBg: '#6243FF',
    highPriority: '#FF2B77',
    mediumPriority: '#E2A300',
    lowPriority: '#6BD475',
    title: '#1C1B1F',
    text: '#49454F',
    hover: '#6243FF',
    disabled: '#ACA7C3',
  },
  space: [
    0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
    40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76,
    78, 80,
  ],
  fontSizes: [8, 10, 12, 14, 16, 20, 24, 32, 48, 64, 72],

  fontFamily: {
    primary: 'Poppins',
    secondary: 'Alata',
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeights: {
    normal: 'normal',
    max: '100%',
  },
  radii: {
    langButton: '8px',
    button: '8px',
    input: '8px',
    card: '12px',
    primary: '8px',
    secondary: '4px',
    form: '8px',
    calendar: '11px',
  },

  borders: {
    main: '1px solid #7b61ff',
    button: ' 1px solid var(--accent, #7B61FF);',
    input: '1px solid  #aca7c3',
  },

  shadows: {
    langButton: '2px 4px 9px 0px rgba(166, 141, 174, 0.28)',
    inputShadow: '2px 4px 9px 0px rgba(166, 141, 174, 0.28)',
    button: '2px 4px 9px 0px rgba(166, 141, 174, 0.28);',
    card: '2px 4px 9px 0px rgba(166, 141, 174, 0.28);',
    form: '2px 4px 9px 0px rgba(166, 141, 174, 0.28)',
  },

  screens: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1440px',
  },
  cursor: {
    pointer: 'pointer',
    notAllow: 'not-allowed',
  },
  pEvents: {
    all: 'all',
    none: 'none',
  },
};

export default theme;

// @media (min-width: ${p => p.theme.screens.desktop}) {}
