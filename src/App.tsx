import { Box } from '@mui/material'
import {Routes,Route} from 'react-router-dom'
import { NavBar } from './Components/NavBar'
import Home from './Pages/Home'
const App = () => {
  return (
    <Box>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Box>
  )
}

export default App
