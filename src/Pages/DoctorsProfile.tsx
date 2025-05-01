
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
       
        gap:2,
        p:3
      }}>   
      <Box sx={{
        display:"flex",
         flexDirection:"column",
         alignItems:"center",
         justifyContent:"center",
         gap:3,
      }}>
      <Avatar sx={{width:100, height:100}}></Avatar>   
      <Typography variant='h5'>Dr. John Doe</Typography>
      <Typography variant='body1'><span>⭐</span> 4.5/5(3 reviews)</Typography>
      <Button variant='contained' fullWidth sx={{mb:2}}>View Profile</Button> 
      <Button variant='outlined' fullWidth sx={{mb:2}}>Send Message</Button>
      </Box>
      <Divider />
      <Box sx={{
        display:"flex",
         flexDirection:"column",
         alignItems:"flex-start",
         gap:2,
         color:"seagreen"
      }}>
        <Typography variant='h4'>Specialty</Typography>
        <Box sx={{
          display:"flex",
          flexDirection:"row",
          gap:1,
         
      
        }}>
        <Typography variant='body1' sx={{
          fontSize:12,

        }}>General Practitioner</Typography>
        <Typography variant='body1' sx={{
          fontSize:12,
          
        }}>Chronic Disease management</Typography>
        <Typography variant='body1' sx={{
          fontSize:12,
          
        }}>Women's Health</Typography>
        <Typography variant='body1' sx={{
          fontSize:12,
          
        }}>Tele-medicine</Typography>

        </Box>
      </Box>

      </Box> 
      <Box>
        
      </Box>                       
    </Box>
  )
}

export default DoctorsProfile
