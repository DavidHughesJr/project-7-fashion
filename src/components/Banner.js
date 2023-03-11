import { Box, Stack } from "@mui/material"
import HnM from '../img/banner/HnM.png'
import Obey from '../img/banner/Obey.png'
import Shopify from '../img/banner/Shopify.png'
import Lacoste from '../img/banner/Lacoste.png'
import Levis from '../img/banner/Levis.png'
import Amazon from '../img/banner/Amazon.png'

const Banner = () => {
    return (
        <Box sx={{ borderRadius: 10 }}>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent='space-between'
                alignItems="center"
                m={5}
            >
                <Box sx={{ width: 100 }}>  <img src={HnM} alt="H&M" style={{ width: '100%', position: 'relative', bottom: 5 }} /> </Box>
                <Box sx={{ width: 100 }}>  <img src={Obey} alt="Obey" style={{ width: '100%', position: 'relative', bottom: 5 }} /> </Box>
                <Box sx={{ width: 100 }}>  <img src={Shopify} alt="H&M" style={{ width: '100%', position: 'relative', bottom: 5 }} /> </Box>
                <Box sx={{ width: 100 }}>  <img src={Levis} alt="Obey" style={{ width: '100%', position: 'relative', bottom: 5 }} /> </Box>
                <Box sx={{ width: 100 }}>  <img src={Lacoste} alt="H&M" style={{ width: '100%', position: 'relative', bottom: 5 }} /> </Box>
                <Box sx={{ width: 100 }}>  <img src={Amazon} alt="Obey" style={{ width: '100%', position: 'relative', bottom: 0 }} /> </Box>
            </Stack>
            <Box sx={{ borderRadius: 10, backgroundColor: '#ebd96b', width: '100%', height: { xs: '20rem', md: '5rem' }, position: 'relative', zIndex: 2, bottom: { xs: 350, md: 120 }, mixBlendMode: 'multiply' }}>  </Box>
        </Box>

    )
}

export default Banner