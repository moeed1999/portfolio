import lightTheme from './themes/lightTheme';
import { ThemeProvider } from '@mui/material/styles';
import PortfolioHome from './screens/PortfolioHome/PortfolioHome';
import About from './screens/About/About';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <PortfolioHome />
      <About />
    </ThemeProvider>
  );
}

export default App;
