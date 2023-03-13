import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import NavBar from './components/common/NavBar';
import { Homepage } from './pages/AllPages';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Homepage />
    </ThemeProvider>
  )
}

export default App