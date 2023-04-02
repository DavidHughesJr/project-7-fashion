import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { ThemeProvider, Box } from '@mui/material';
import theme from '../theme';
import NavBar from "../components/common/NavBar"
import Footer from "../components/common/Footer"


const Root = () => {

    const loadingTime = 0
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(!loading)
        }, loadingTime)
        // eslint-disable-next-line
    }, [])

    return (
        <ThemeProvider theme={theme} >
            <Box sx={{ opacity: loading ? 0 : 100, touchAction: loading ? 'none' : 'auto' }}>
                <NavBar />
                <Outlet />
                <Footer />
            </Box>
        </ThemeProvider >
    )
}

export default Root