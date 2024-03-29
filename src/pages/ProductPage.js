import { useState, useEffect } from "react"
import commerce from "../lib/commerce"
import { useParams } from "react-router-dom"
import ProductGallery from "../components/product/ProductGallery"
import ProductInfo from "../components/product/ProductInfo"
import ProductAccordion from '../components/product/ProductAccordion'
import RelatedProducts from '../components/product/RelatedProducts'
import { Container, Stack, Box } from "@mui/material"
import { renderLinearLoader } from "../components/helper/Loaders"


const ProductPage = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    let { id } = useParams()


    useEffect(() => {
        const fetchProducts = async () => {
            const products = await commerce.products.list()
            setProduct(products?.data?.filter((data) => data.id.includes(id)));
        }
        fetchProducts()
    }, [id]);

    useEffect(() => {
        if (product.length > 0) {
            setLoading(false)
        }
    }, [product])

 

    return (
        <Container maxWidth='lg'>
            <Stack gap={5} mb={10} flexDirection={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'center', md: 'flex-start' }}>
                <Box width={{ xs: '100%', md: '50%' }} >
                    {
                        loading ? renderLinearLoader() : <ProductGallery product={product} />
                    }
                </Box>
                <Stack spacing={1} p={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
                    <ProductInfo product={product} />
                    <ProductAccordion />
                </Stack>
            </Stack>
            <RelatedProducts product={product} />
        </Container>

    )
}

export default ProductPage

