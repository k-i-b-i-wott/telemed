
import{Avatar, Box, Button, Divider, Typography} from '@mui/material'

const DoctorsProfile = () => {
  return (
    <Box sx={{
      mt:12,
      display:"flex",
      flexDirection:{
        xs:"column",
        md:"row"
      }
    }}>
      <Box boxShadow={2} sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        gap:2,
        p:3
      }}>   
      <Avatar sx={{width:100, height:100}}></Avatar>   
      <Typography variant='h5'>Dr. John Doe</Typography>
      <Typography variant='body1'><span>⭐</span> 4.5/5(3 reviews)</Typography>
      <Button variant='contained' fullWidth sx={{}}>View Profile</Button> 
      <Button variant='outlined' fullWidth sx={{}}>Send Message</Button>
      <Divider sx={{my:2}}/>
         
      </Box> 
      <Box>
        
      </Box>                       
    </Box>
  )
}

export default DoctorsProfile
