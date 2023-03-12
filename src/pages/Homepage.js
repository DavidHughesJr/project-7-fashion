import { Container } from "@mui/material"
import Banner from "../components/Banner"
import Hero from "../components/Hero"
import Listing from "../components/Listing"
import Info from "../settings/Info"

const NewArrivalsHeading = 'New Arrivals'
const NewArrivals = Info


const Homepage = () => {
  return (
      <Container maxWidth='xl'>
        <Hero />
        {/* <Banner /> */}
        <Listing heading={NewArrivalsHeading} data={NewArrivals}/> 
      </Container>
  )
}

export default Homepage