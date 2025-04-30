import { Box, Button, TextField, Typography } from '@mui/material'

const HealthCareResources = () => {
  return (
    <Box sx={{
        mt:14,

    }}>
        <Box sx={{
            display:"flex",
            flexDirection:"column",

        }}>
            <Typography variant='h3'>
                Health Resources
            </Typography>
            <Typography variant='body1' sx={{
                color:"seagreen"
            }}>
                Access reliable health information, guides, and educational materials
            </Typography>
        </Box> 
        <Box sx={{
            boxShadow:2,
            display:"flex",
            flexDirection:"row",
            p:3,
            gap:4,
            mt:3,
        }}>
            <TextField
            type="text"            
            fullWidth
            placeholder='Search for health resources'

            />
            <Button variant='contained' sx={{
                backgroundColor:"darkseagreen",
                
            }}>
                Search    
            </Button>            
        </Box>
        <Box sx={{
            display:"flex",
            flexDirection:{xs:"column", md:"row"},
            alignItems:"center",
            justifyContent:"space-between", 
            p:2,
            bgcolor:"#E9EDEB"  , 
            m:2,
            borderRadius:2   ,
            gap:3
                 
        }}>
            <Button variant='contained' sx={{
                bgcolor:"#DCF0E4",
                color:"black"

            }}>Articles</Button>    
            <Button variant='contained' sx={{
                bgcolor:"#DCF0E4",
                color:"black"

            }} >Videos</Button>  
            <Button variant='contained' sx={{
                bgcolor:"#DCF0E4",
                color:"black"

            }}>Self-Care Guides</Button>      
        </Box>
        <Box sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-around",
            gap:3,
            flexWrap:"wrap",
        }}>
            <Button variant='contained' sx={{
                bgcolor:"#DCF0E4",
                color:"black"

            }} >All Categories</Button>  
            <Button variant='contained' sx={{
                bgcolor:"#DCF0E4",
                color:"black"

            }}>Infectious Disease</Button>   
            <Button variant='contained' sx={{
                bgcolor:"#DCF0E4",
                color:"black"

            }} >Chronic Disease</Button>  
            <Button variant='contained' sx={{
                bgcolor:"#DCF0E4",
                color:"black"

            }}>Women's Health</Button>   
            <Button variant='contained' sx={{
                bgcolor:"#DCF0E4",
                color:"black"

            }} >Pediatric Health</Button>  
            <Button variant='contained' sx={{
                bgcolor:"#DCF0E4",
                color:"black"

            }}>Mental Health</Button>  
            <Button variant='contained' sx={{
                bgcolor:"#DCF0E4",
                color:"black"

            }} >Environmental Health</Button>  
            <Button variant='contained' sx={{
                bgcolor:"#DCF0E4",
                color:"black"

            }}>More ....</Button>    

        </Box>
        <Box boxShadow={2} sx={{
            
        }}>

        </Box>             
    </Box>
  )
}

export default HealthCareResources
