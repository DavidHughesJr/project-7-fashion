import { Container } from "@mui/material"
import Banner from "../components/Banner"
import Hero from "../components/Hero"
import Listing from "../components/Listing"
import Info from "../settings/Info"

const NewArrivalsHeading = 'New Arrivals'
const NewArrivals = Info[0]
const CustomerFavoritesHeading = "Customer Favorites"
const CustomerFavorites = Info[1]


const Homepage = () => {
  return (
      <Container maxWidth='xl'>
        <Hero />
        {/* <Banner /> */}
        <Listing heading={NewArrivalsHeading} data={NewArrivals}/> 
        <Listing heading={CustomerFavoritesHeading} data={CustomerFavorites}/> 
      </Container>
  )
}

export default Homepage