
import { Box } from '@mui/material'
import HeroSection from '../Components/HeroSection'
import Services from '../Components/Services'
import { OurProffesionals } from '../Components/OurProffesionals'

const Home = () => {
  return (
    <Box sx={{mt:10}}>
      <HeroSection /> 
      <Services />     
      <OurProffesionals />      
    </Box>
  )
}

export default Home
