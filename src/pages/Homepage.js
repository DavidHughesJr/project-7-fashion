import { Box, Container } from "@mui/material"
import Banner from "../components/Banner"
import Hero from "../components/Hero"

const Homepage = () => {
  return (
      <Container maxWidth='xl'>
        <Hero />
        <Banner />
      </Container>
  )
}

export default Homepage