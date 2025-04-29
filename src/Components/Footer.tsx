import { Box,Typography,Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box
     sx={{
        bgcolor:"white",
        mt:3,
        borderRadius:2,
        p:3,
     }}
    >

        <Box sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"center",
            boxShadow:2,
            p:2,
            flexWrap:"wrap",
            gap:3
        }}>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
                
            }}>
            <Box sx={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"center",
            }}>
                <Avatar sx={{ m: 1, bgcolor: 'darkseagreen', width:50, height:50, fontSize:20 }} >
          VH
        </Avatar>
        <Typography  component={"a"} href="/" sx={{
            color:'#284A3A',              
              flexGrow:1,
              textWrap:'wrap',
              fontSize:20,
              textDecoration:'none',
              whiteSpace:'normal',
              overflowWrap:'break-word'
            }}>
                Village Wellness Hub
            </Typography>
                </Box>  
                <Typography variant='body1' sx={{
                    color:"darkseagreen",
                    fontSize:15
                }}>
                    Bringing quality healthcare to rural communities through technology                
                </Typography>      
            </Box>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
            }} >
                <Typography variant='h6' sx={{
                    color:'#284A3A',
                    fontSize:15,
                    mb:2
                }}>
                    <b>Quick Links</b>
                </Typography> 
                <Typography variant='body1' component={Link} to={"/"} sx={{
                    color:"darkseagreen",
                    fontSize:15,
                    mb:2,
                    textDecoration:'none'
                }}>
                    Home
                </Typography>
                <Typography variant='body1' component={Link} to={"/"} sx={{
                    color:"darkseagreen",
                    fontSize:15,
                    mb:2,
                    textDecoration:'none'
                }}>
                    Find a Doctor
                </Typography>
                <Typography variant='body1' component={Link} to={"/"} sx={{
                    color:"darkseagreen",
                    fontSize:15,
                    mb:2,
                    textDecoration:'none'
                }}>
                    Health resources
                </Typography>
                <Typography variant='body1' component={Link} to={"/"} sx={{
                    color:"darkseagreen",
                    fontSize:15,
                    mb:2,
                    textDecoration:'none'
                }}>
                    About Us
                </Typography>       
                
            </Box> 
            <Box sx={{
                display:"flex",
                flexDirection:"column",
            }} >
                <Typography variant='h6' sx={{
                    color:'#284A3A',
                    fontSize:15,
                    mb:2
                }}>
                    <b>Our Services</b>
                </Typography> 
                <Typography variant='body1' component={Link} to={"#"} sx={{
                    color:"darkseagreen",
                    fontSize:15,
                    mb:2,
                    textDecoration:'none'
                }}>
                    Telemedicine
                </Typography>
                <Typography variant='body1' component={Link} to={"#"} sx={{
                    color:"darkseagreen",
                    fontSize:15,
                    mb:2,
                    textDecoration:'none'
                }}>
                    Health Tracking
                </Typography>
                <Typography variant='body1' component={Link} to={"#"} sx={{
                    color:"darkseagreen",
                    fontSize:15,
                    mb:2,
                    textDecoration:'none'
                }}>
                    Emergency Services
                </Typography>
                <Typography variant='body1' component={Link} to={"#"} sx={{
                    color:"darkseagreen",
                    fontSize:15,
                    mb:2,
                    textDecoration:'none'
                }}>
                    Health Education
                </Typography>       
                
            </Box> 
            <Box sx={{
                display:"flex",
                flexDirection:"column",
            }} >
                <Typography variant='h6' sx={{
                    color:'#284A3A',
                    fontSize:15,
                    mb:2
                }}>
                    <b>Contact Us</b>
                </Typography> 
                <Typography variant='body1'  sx={{
                    color:"darkseagreen",
                    fontSize:15,
                    mb:2,
                    textDecoration:'none'
                }}>
                    Email : <em>contact@villagewellness.org</em>
                </Typography>
                <Typography variant='body1'  sx={{
                    color:"darkseagreen",
                    fontSize:15,
                    mb:2,
                    textDecoration:'none'
                }}>
                    Phone: <em>+2547 -181 -05315</em>
                </Typography>
                <Typography variant='body1'  sx={{
                    color:"darkseagreen",
                    fontSize:15,
                    mb:2,
                    textDecoration:'none'
                }}>
                    Address: <em>123 Main Street, Nairobi, Kenya</em>
                </Typography>
                     
                
            </Box>             
        </Box>
        <Box sx={{p:2, textAlign:"center", boxShadow:2}}><Typography>&copy; {new Date().getFullYear()} Village Wellness Hub | All rights reserved | Terms and Conditions</Typography></Box>
    </Box>
  )
}

export default Footer
