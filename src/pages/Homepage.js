import { Box, Container } from "@mui/material"
import Banner from "../components/Banner"
import Hero from "../components/Hero"

const Homepage = () => {
  return (
    <Box>
      <Container maxWidth='xl'>
        <Hero />
        <Banner />
      </Container>
   
      <Container maxWidth='xl'>

      </Container>
    </Box>
  )
}

export default Homepage