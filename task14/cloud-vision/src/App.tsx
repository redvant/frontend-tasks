import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Welcome from "./pages/Welcome";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Welcome />
      </ThemeProvider>
    </div>
  );
}

export default App;
