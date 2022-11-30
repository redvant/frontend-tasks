import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat', 
      'sans-serif'
    ].join(','),
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#535bf2',
    },
  },
});

export default theme;