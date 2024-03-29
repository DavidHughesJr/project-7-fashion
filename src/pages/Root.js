import { Outlet } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import theme from '../theme';
import NavBar from "../components/common/NavBar"
import Footer from "../components/common/Footer"


const Root = () => {

    return (
        <ThemeProvider theme={theme} >
            <NavBar />
            <Outlet />
            <Footer />
        </ThemeProvider >
    )
}

export default Root