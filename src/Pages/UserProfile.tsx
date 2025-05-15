import { Box,Typography,Avatar,Button} from '@mui/material'

const UserProfile = () => {
  return (
    <Box  sx={{
      mt:17,
      display:'flex',
      flexDirection:{
        sx:"column",
        md:"row"
      }
    }}>
      <Box sx={{
        display:"flex",
        flexDirection:"Column",
        justifyContent:"space-between",
        margin:2,
        p:3,
        alignItems:"center",
        boxShadow:3,
        width:200
      }}>   
        <Avatar>
        </Avatar>
        <Box sx={{
          display:"flex",
          flexDirection:"column",
          gap:1,
          fontSize:10,
        }}>
          <Typography variant='h5'>
            Name          
          </Typography>  
          <Typography variant='body1'>
            Email
          </Typography>
        </Box>
        <Typography>
            Member since date
        </Typography>
        <Box sx={{
          display:"flex",
          flexDirection:"column"                    ,
          gap:2,
          aligItems:"left"
        }}>
          <Button 
          fullwidth
          sx={{
            variant:"outlined",
            fontSize:12            
          }}>
            Personal Information
          </Button>
          <Button
           fullwidth
           sx={{
             variant:"outlined",
             fontSize:12            
           }}
          >
            Appointments
          </Button>
          <Button
           fullwidth
           sx={{
             variant:"outlined",
             fontSize:12            
           }}
          >
            Medical Records
          </Button> 
            <Button
             fullwidth
             sx={{
               variant:"outlined",
               fontSize:12            
             }}            
            >
              Settings
            </Button>         
        </Box>
      </Box>        
    </Box>  
  )
}

export default UserProfile
