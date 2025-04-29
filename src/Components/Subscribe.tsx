import { Box,Button,Paper, Typography } from '@mui/material'


const Subscribe = () => {
  return (
    <Box sx={{
        px:5,    

    }}>
        <Paper elevation={3} sx={{
            backgroundColor:"darkseagreen",
            py:4,
            display:"flex"           ,
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:3
        }}>
            <Typography variant='h3' sx={{
                textAlign:"center",
                color:"white"
            }}>Start Your Healthcare Journey Today</Typography>
            <Typography variant='body1' sx={{
                textAlign:"center",
                color:"white"
            }}>Join thousands of rural community members who have improved their access to quality healthcare through our platform.</Typography>
            <Box sx={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"center",
                gap:2,
                mt:3
            }}>
                <Button variant='contained' sx={{bgcolor:"white", color:"darkseagreen"}}>
                    Register
                </Button>
                <Button variant='outlined' sx={{
                 color:"white"
                }}>
                    Find a Doctor
                </Button>
            </Box>
        </Paper>
    </Box>
  )
}

export default Subscribe
