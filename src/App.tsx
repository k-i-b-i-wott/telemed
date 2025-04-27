import { Box } from '@mui/material'
import {Routes,Route} from 'react-router-dom'
import { NavBar } from './Components/NavBar'
const App = () => {
  return (
    <Box>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
      </Routes>
    </Box>
  )
}

export default App
