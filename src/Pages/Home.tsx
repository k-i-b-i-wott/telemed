
import { Box } from '@mui/material'
import HeroSection from '../Components/HeroSection'
import Services from '../Components/Services'
import { OurProfessionals } from '../Components/OurProffesionals'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <Box sx={{mt:10}}>
      <HeroSection /> 
      <Services />     
      <OurProfessionals />
      <Testimonials />      
    </Box>
  )
}

export default Home
