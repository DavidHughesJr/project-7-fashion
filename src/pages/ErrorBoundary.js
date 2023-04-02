import { useRouteError } from "react-router-dom";
import { Stack, Box, Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";


export const ErrorBoundary = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <Container maxWidth="lg">
            <Stack flexDirection={{ xs: 'column', md: 'row' }} pt={20}>
                <Box>
                    <Typography variant="h1">
                        404
                    </Typography>
                    <Typography variant="h6">
                        The page you’re looking for doesn’t exist.
                    </Typography><Typography variant="h6">
                    </Typography>
                    <Button sx={{ backgroundColor: 'black' }} component={Link} to={'/'} variant="contained">Back Home</Button>
                </Box>
                <Box>
                    <img
                        src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                        alt=""
                        width={500} height={250}
                    />
                </Box>
            </Stack>
        </Container>
    )
}
