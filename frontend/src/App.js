import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1DBEB4',
      light: '#50dad1',
      dark: '#29938c',
      contrastText: '#fff',
    },
    secondary: {
      main: '#383B58',
      light: '#545776',
      dark: '#262838',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained">MUI button</Button>
    </ThemeProvider>
  );
}

export default App;
