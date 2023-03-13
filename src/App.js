import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import NavBar from './components/common/NavBar';
import { Homepage } from './pages/AllPages';
import Footer from './components/common/Footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Homepage />
     <Footer />
    </ThemeProvider>
  )
}

export default App