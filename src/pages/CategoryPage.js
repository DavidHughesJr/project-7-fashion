import commerce from "../lib/commerce"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container } from "@mui/material"
import ProductList from "../components/product/ProductsList"

const Category = () => {

  const [products, setProducts] = useState([])

  let { id } = useParams()


  const fetchProducts = () => {
    commerce.products.list().then((products) => {  
      setProducts(products.data?.filter((items) => items.categories?.some((cate) => cate?.slug?.includes(id))));
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, []);


  return (
    <Container maxWidth='xl'>
      <ProductList products={products} />
    </Container>
  )
}

export default Category