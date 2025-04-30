import { Box, Typography } from '@mui/material'
import AboutImg  from "../../src/assets/images/about-img.jpeg"


const AboutUs = () => {
  return (
    <Box sx={{
        mt:19,
        p:2
    }}>
        <Box sx={{
            mt:4,
            display:"flex",
            flexDirection:{
                xs:"column",
                md:"row"
            },
            justifyContent:"space-around",
            alignItems:"center",
            gap:3,

        }}>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                gap:3,
                maxWidth:{
                    xs:"100%",
                    md:600,
                }
            }}>
                <Typography variant='h2' sx={{
                    fontWeight:700,
                    
                }}>
                    Our Mission
                </Typography>   
                <Typography variant='body1' sx={{
                    color:"seagreen"                    
                }}  >
                    Village Wellness Hub is dedicated to bridging the healthcare gap for rural communities through innovative technology solutions. We believe that quality healthcare should be accessible to everyone, regardless of their geographical location.
  
                    </Typography> 
                    <Typography variant='body2' sx={{
                        color:"seagreen"
                    }}>
                    Our platform connects patients in remote areas with qualified healthcare professionals, provides reliable health information, and offers tools for managing health conditions with limited resource                                          
                    </Typography> 
                    <Box boxShadow={2} sx={{
                        p:2,
                        display:"flex",
                        flexDirection:"column",
                        gap:2
                    }}>
                        <Typography variant='h4'>
                            Our Vision
                        </Typography>
                        <Typography variant='body1' sx={{
                            color:"seagreen"
                        }}>
                                A world where geographical barriers no longer determine access to quality healthcare and wellness resources.
                        </Typography>
                        
                    </Box>     
            </Box>            
            <Box 
            component={"img"}            
            src={AboutImg}
            sx={{
                maxWidth:{
                    xs:"100%",
                    md:600
                },
                
                objectFit:"cover",
                borderRadius:3
            }}
            />
        </Box>
    </Box>
  )
}

export default AboutUs
