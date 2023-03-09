import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { Container } from '@mui/material';
import NavBar from './components/NavBar';
import React from 'react'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container maxWidth="xl">
        Testing
      </Container>
    </ThemeProvider>
  )
}

export default App