import { Paper, Box, Stack, Typography, Button, Divider } from "@mui/material"
import SalesImg from '../../img/banner/sales.png'
import SalesBackground from '../../img/banner/sales-background.png'

const styles = {
    customPaper: {
        width: '100%',
        height: 'auto',
        backgroundImage: `url(${SalesBackground})`,
        backgroundRepeat: 'no-repeat, repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }
};

const SalesBanner = () => {
    return (
        <Paper style={styles.customPaper}
            elevation={0}
        >
            <Stack justifyContent='center' alignItems='center' direction={{ xs: 'column', md: 'row' }} divider={<Divider orientation="vertical" flexItem />}>
                <Box sx={{width: {xs: '100%', md: '40%'}}}>
                    <img className='banner-img-large' src={SalesImg} alt="Sales Image"/>
                </Box>
                <Stack spacing={2} m={{xs: 0, md: '100px auto' }} p={2}>
                    <Typography variant="h2" fontWeight={900}> PAYDAY </Typography>
                    <Typography variant="h3" fontWeight={900}> SALE NOW </Typography>
                    <Typography variant="subtitle" fontWeight={500}> Spend minimal $100 & get 30% off
                        voucher code for your next purchase! </Typography>
                    <Typography mt={1} variant="subtitle2"> Entire Month Flash Sale </Typography>
                    <Typography mb={2} variant="subtitle2"> Terms & Conditions Apply </Typography>
                    <Box>
                        <Button sx={{ width: {xs: "100%", md: 'auto'}}} variant="contained" color="secondary"> Shop Now </Button>
                    </Box>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default SalesBanner