import { useState, useEffect } from 'react';
import { Box, Card, CardMedia, Stack } from '@mui/material'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';





const ProductGallery = ({ product }) => {

    const [productAssets, setProductAssets] = useState([])


    useEffect(() => {
        const assets = product.map((item) => item.assets)
        setProductAssets(...assets)
    }, [product])


    return (
        <Stack direction={{ xs: 'column', md: 'row-reverse' }} justifyContent='center' alignItems='center' spacing={1}>
            <Box width={{ xs: '80%', sm: '60%', md: '100%' }}>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {
                        productAssets?.map((item) => (
                            <SwiperSlide
                                key={item.id}
                            >
                                <Card sx={{ borderRadius: 2 }} >
                                    <CardMedia
                                        component="img"
                                        image={item.url}
                                        alt="listing info"
                                    />

                                </Card>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Box>
        </Stack>
    )
}

export default ProductGallery