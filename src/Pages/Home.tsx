
import { Box } from '@mui/material'
import HeroSection from '../Components/HeroSection'
import Services from '../Components/Services'

const Home = () => {
  return (
    <Box sx={{mt:10}}>
      <HeroSection /> 
      <Services />           
    </Box>
  )
}

export default Home
