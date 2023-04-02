import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Pagination } from "swiper";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const RelatedProducts = ({ product }) => {

    const relatedProducts = product?.[0]?.related_products

    return (
        <>
            <Typography mb={2} variant='h5'> Related Products </Typography>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        //xs
                        0: {
                            slidesPerView: 1,
                        },
                        600: {
                            slidesPerView: 2,
                        },
                        //md
                        900: {
                            slidesPerView: 3,
                        },
                        //lg
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {
                        relatedProducts?.map((item) => (
                            <SwiperSlide key={item?.id}
                                modules={[Navigation]}
                                style={{ flexGrow: '0'}}
                            >
                                <Card
                                    component={Link}
                                    to={`/product/${item.id}`}
                                    elevation={0}
                                    sx={{ textDecoration: 'none', width: '300px' }}
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={item.image.url}
                                            alt="listing info"
                                            sx={{ borderRadius: 2, minHeight: '570px', maxHeight: '570px'}}
                                        />
                                        <CardContent>
                                            <Typography color='secondary' variant='subtitle2'> {item.name} </Typography>
                                            <Typography color='secondary' variant='subtitle2'> {item.price.formatted_with_code} </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
        </>
    )
}

export default RelatedProducts