import { Box,Icon,Paper,Typography } from '@mui/material'

 import {  FaStethoscope } from "react-icons/fa";
 import { FaRegClipboard } from "react-icons/fa";
import { GiAmbulance } from 'react-icons/gi';
import { LuLibraryBig } from "react-icons/lu";


const Services = () => {
  return (
    <Box sx={{
        mt:4,
        bgcolor:"#befae9",
        
        opacity:.9,
        alignItems:"center",
        justifyContent:"center",
    }}>
        <Box sx={{
            display:"flex",
            flexDirection:"column",
           textAlign:"center",
            gap:3,
            
        }}>
                <Typography variant='h5' sx={{
                    color:"darkgreen",
                    fontSize:"1.5rem",
                    fontWeight:"bold"
                }}>
                    Our Services
                </Typography>   
                <Typography variant='body1' sx={{
                    fontSize:"1.5rem",
                    color:"seagreen"
                }}>
                    Comprehensive healthcare solutions designed for rural communities with limited access to medical facilities.            
                </Typography>   
        </Box>
        <Box sx={{
            p:2,
            display:"grid",
            gridTemplateColumns:{
                xs:"repeat(1,1fr)",
                md:"repeat(2,1fr)",} ,
            alignItems:"center",
            justifyContent:"center",
            gap:3           
        }}>
            <Paper elevation={12} sx={{
                maxWidth:700,
                ":hover": {
                    
                    opacity:.9,
                    borderWidth:2,
                    borderColor:"darkseagreen",
                    transform:"scale(.9)"
                }
            }}>
                <Icon sx={{
                    m:2,
                    p:2,
                    bgcolor:"darkseagreen",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                    
                }}>
                    <FaStethoscope size={40}   color="darkgreen" />
                </Icon>
                <Box sx={{
                    p:2,
                    gap:3,
                    display:"flex",
                    flexDirection:"column"
                }}>
                    <Typography variant='h5' sx={{
                        fontWeight:700
                    }} >
                        Virtual Consultations
                    </Typography>   
                    <Typography variant='body1' sx={{
                        fontSize:20,
                        color:"darkgreen"

                    }}>
                        Connect with healthcare professionals through secure video calls from anywhere.
                    </Typography>                 
                </Box>
            </Paper>
            <Paper elevation={12} sx={{
                maxWidth:700,
                ":hover": {
                    
                    opacity:.9,
                    borderWidth:2,
                    borderColor:"darkseagreen",
                    transform:"scale(.8)"
                }
            }}>
                <Icon sx={{
                    m:2,
                    p:2,
                    bgcolor:"darkseagreen",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"

                    
                }}>
                    <LuLibraryBig size={40}   color="darkgreen" />
                </Icon>
                <Box sx={{
                    p:2,
                    gap:3,
                    display:"flex",
                    flexDirection:"column"
                }}>
                    <Typography variant='h5' sx={{
                        fontWeight:700
                    }} >
                       Health Resources
                    </Typography>   
                    <Typography variant='body1' sx={{
                        fontSize:20,
                        color:"darkgreen"

                    }}>
                        Access a library of reliable health information, articles, and self-care guides
                    </Typography>                 
                </Box>
            </Paper>
            <Paper elevation={12} sx={{
                maxWidth:700,
                ":hover": {
                    
                    opacity:.9,
                    borderWidth:2,
                    borderColor:"darkseagreen",
                    transform:"scale(.9)"
                }
            }}>
                <Icon sx={{
                    m:2,
                    p:2,
                    bgcolor:"darkseagreen",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                    
                }}>
                    <GiAmbulance size={40}   color="darkgreen" />
                </Icon>
                <Box sx={{
                    p:2,
                    gap:3,
                    display:"flex",
                    flexDirection:"column"
                }}>
                    <Typography variant='h5' sx={{
                        fontWeight:700
                    }} >
                        Emergency Assistance
                    </Typography>   
                    <Typography variant='body1' sx={{
                        fontSize:20,
                        color:"darkgreen"

                    }}>
                        Quickly find nearby emergency services and get immediate guidance.
                    </Typography>                 
                </Box>
            </Paper>
            <Paper elevation={12} sx={{
                maxWidth:700,
                ":hover": {
                    
                    opacity:.9,
                    borderWidth:2,
                    borderColor:"darkseagreen",
                    transform:"scale(.9)"
                }
            }}>
                <Icon sx={{
                    m:2,
                    p:2,
                    bgcolor:"darkseagreen",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                    
                }}>
                    <FaRegClipboard size={40}    />
                </Icon>
                <Box sx={{
                    p:2,
                    gap:3,
                    display:"flex",
                    flexDirection:"column"
                }}>
                    <Typography variant='h5' sx={{
                        fontWeight:700
                    }} >
                        Medical Records
                    </Typography>   
                    <Typography variant='body1' sx={{
                        fontSize:20,
                        color:"darkgreen"

                    }}>
                        Securely store and access your medical history and test results.
                    </Typography>                 
                </Box>
            </Paper>
        </Box>
    </Box>
)
}

export default Services
