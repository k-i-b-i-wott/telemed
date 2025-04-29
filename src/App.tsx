import { Box } from '@mui/material'
import {Routes,Route} from 'react-router-dom'
import { NavBar } from './Components/NavBar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
const App = () => {
  return (
    <Box>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<SignUp/>} />
        <Route path='/login' element={<SignIn/>} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
