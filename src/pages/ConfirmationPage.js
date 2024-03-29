import { Container, Stack, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";



const ConfirmationPage = () => {

    const orderReceipt = JSON.parse(sessionStorage.getItem("order_receipt"))

    if (!orderReceipt) {
        return null;
    }
    
    return (
        <Container maxWidth="lg">
            <Stack spacing={2}>
                <Typography mt={5} variant="h4"> Thank you for your purchase! </Typography>
                <Typography mt={5} variant="h4"> {orderReceipt.customer.firstname}, {orderReceipt.customer.lastname}  </Typography>
                <Typography variant="h5"> Receipt Total: {orderReceipt.order_value.formatted_with_symbol}  </Typography>
                <Typography variant="subtitle2"> </Typography>
                <Stack >
                    {
                        orderReceipt?.order?.line_items?.map((item) => (
                            <Stack key={item.id} mb={5} flexDirection={{ xs: 'column', sm: 'row' }} gap={2} justifyContent='space-between' alignItems={{xs: 'center', sm: 'flex-start'}}>
                                <Box width='150px'>
                                    <img style={{ width: '100%' }} src={item.image.url} alt='product' />
                                </Box>
                                <Typography variant="subtitle2"> Quantity: {item.quantity} </Typography>
                                <Typography variant="subtitle2"> Name: {item.product_name} </Typography>
                                <Typography variant="subtitle2"> Price: {item.price.formatted_with_symbol} </Typography>
                            </Stack>

                        ))
                    }
                </Stack>
            </Stack>
            <Stack mt={15} spacing={2} width={{ xs: '100%', md: '50%' }}>
                <Typography variant="h4"> RETURN TO SHOPPING </Typography>
                <Button component={Link} to='/' variant="contained"> Home  </Button>
                <Button component={Link} to='/' variant="outlined"> Catalogue  </Button>
            </Stack>
        </Container>
    )
}

export default ConfirmationPage