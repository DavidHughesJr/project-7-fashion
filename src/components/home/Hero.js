import React from 'react'
import { Box, Paper, Container, Typography, Button, Stack } from '@mui/material'
import HeroBackground from '../../img/hero/Hero.jpg'
import HeroImage from '../../img/hero/HeroImage.png'
import Vector from '../../img/common/vector.png'

const styles = {
    customPaper: {
        width: '100%',
        height: 'auto',
        backgroundImage: `url(${HeroBackground})`,
        backgroundRepeat: 'no-repeat, repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        paddingTop: '1rem'
    }
};

const Hero = () => {
    return (
        <Paper
            style={styles.customPaper}
            elevation={0}
            sx={{borderRadius: 10}}
        >
            <Container maxWidth='lg'>
                <Stack
                    justifyContent="space-between"
                    alignItems="center"
                    direction={{ xs: 'column-reverse ', md: 'row' }}
                >
                    <Box p={5} sx={{ zIndex: 2 }}>
                        <Box className="hero-box-white">    <Typography className='hero-text' variant='h2'> LET'S </Typography> </Box>
                        <Box className="hero-box-none">     <Typography className='hero-text' variant='h2'> EXPLORE </Typography> </Box>
                        <Box className="hero-box-yellow">   <Typography className='hero-text' variant='h2'> UNIQUE </Typography> </Box>
                        <Box className="hero-box-none">    <Typography className='hero-text' variant='h2'> CLOTHING </Typography> </Box>
                        <Box pb={2} pt={2}>
                            <Typography variant='subtitle' pt={2} pb={2}>  Live for Influential and Innovative fashion!</Typography>
                        </Box>
                        <Stack direction={{xs: 'column', md: 'row'}} spacing={2} >
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',}} > 
                                <img style={{ width: '70%', padding: 10 }} src={Vector} alt="hero vector" />
                            </Box>
                            <Button variant='contained' color='secondary'> Shop Now </Button>
                        </Stack>
                    </Box>
                    <Box sx={{ zIndex: 1, maxWidth: { xs: '400px', md: '800px' }, marginTop: 'auto', width: {sm: '40%', md: '50%', lg: '40%' }, position: 'relative', top: {sm: '3rem', md: 0}}}>
                        <img className='banner-img-large' src={HeroImage} alt="Hero" />
                    </Box>
                </Stack>
            </Container>
        </Paper>
    )
}

export default Hero