import { Container } from "@mui/material"
import Hero from "../components/home/Hero"
import Listing from "../components/home/Listing"
import Banner from '../components/home/Banner'
import SalesBanner from "../components/home/SalesBanner"
import Info from "../settings/Info"
import Newsletter from "../components/common/Newsletter"



const NewArrivalsHeading = 'New Arrivals'
const NewArrivals = Info[0]
const CustomerFavoritesHeading = "Customer Favorites"
const CustomerFavorites = Info[1]


const Homepage = () => {
  return (
      <Container maxWidth='xl'>
        <Hero />
        <Banner />
        <Listing heading={NewArrivalsHeading} data={NewArrivals}/> 
        <SalesBanner />
        <Listing heading={CustomerFavoritesHeading} data={CustomerFavorites}/> 
        <Newsletter />
      </Container>
  )
}

export default Homepage