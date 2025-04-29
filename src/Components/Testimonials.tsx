import { Box, Paper, Typography } from '@mui/material'


const Testimonials = () => {
  return (
    <Box>
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            gap:2,
            textAlign:"center"
        }}>
            <Typography variant='h4' sx={{
                color:"#233E32",
                fontWeight:"bold"
            }}>
                What our users say                
            </Typography>  
            <Typography variant='body1' sx={{
                color:"#53ADD8",
                fontSize:20
            }}>
                  Real experiences from community members using our platform    
            </Typography>      
        </Box>  
        <Box>
            <Paper elevation={10} sx={{maxWidth:300, mx:"auto", p:2}}>
                <Typography  variant="h3" sx={{fontWeight:"bold", color:"darkseagreen"}}>"</Typography>
                <Typography>
                    
                </Typography>
            </Paper>
        </Box>    
    </Box>
  )
}

export default Testimonials
