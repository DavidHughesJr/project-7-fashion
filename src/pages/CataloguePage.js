import { useState, useEffect } from "react"
import { Container } from "@mui/material"
import commerce from "../lib/commerce"
import ProductList from "../components/product/ProductsList"

const CataloguePage = () => {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list()
      setProducts(data)
    } catch (error) {
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container maxWidth="xl">
      <ProductList products={products} />
    </Container>
 
  )
}

export default CataloguePage
