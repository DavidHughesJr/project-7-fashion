import { Link } from "react-router-dom"
import { Grid, Box, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material"
import { renderLinearLoader } from "../helper/Loaders"

const ProductList = ({ products }) => {



    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.length === 0 ? renderLinearLoader() :
                        <>
                            {
                                products?.map((item) => (
                                    <Grid item xs={2} sm={3} key={item.id}>
                                        <Card
                                            key={item?.id}
                                            component={Link}
                                            to={`/product/${item.id}`}
                                            elevation={0}
                                            sx={{
                                                textDecoration: 'none',
                                                borderRadius: 2
                                            }}
                                        >
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    image={item?.assets[0]?.url}
                                                    alt="listing info"
                                                    sx={{minHeight: 550}}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="subtitle2" component="div" color='secondary' >
                                                        {item?.name}
                                                    </Typography>
                                                    <Typography variant="subtitle" color="text.secondary">
                                                        {item.price.formatted_with_code}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))
                            }
                        </>
                }
            </Grid>
        </Box>
    )
}

export default ProductList