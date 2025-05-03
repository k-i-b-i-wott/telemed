import { Box, Button, CardContent, TextField, Typography, Card,  Divider, } from '@mui/material'

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
            mb:3,
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
        <Divider />
        <Box boxShadow={2} sx={{
            mt:3,
            p:3,
            display:"flex",
            flexDirection:"row",
            gap:3,
            justifyContent:"space-around",                       
            flexWrap:"wrap",
            alignItems:"center"
        }}>
            <Card sx={{
                width:400,
                borderRadius:3,
                
            }}>
                <CardContent sx={{
                    display:"flex",
                    flexDirection:"column", 
                    gap:2,
                    borderRadius:3,
                    
                }}>
                    <Box
                    component={"img"}

                    src='https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='healthcare'
                    sx={{
                        width:"100%",
                        height:300,
                        objectFit:"cover"
                    }}
                    />
                    <Box sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-between"
                    }}>
                        <Typography variant='body2' sx={{
                            color:"seagreen",

                        }}>
                             Infectious Disease
                        </Typography >
                        <Typography variant='body2' sx={{
                            color:"seagreen"
                        }}>15TH April 2025</Typography>
                    </Box>  
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap:1,
                    }}>
                        <Typography variant='h6'>
                             COVID-19 Prevention Guidelines
                        </Typography>
                        <Typography variant='body2' sx={{
                            color:"seagreen",
                            fontStyle:"italic",
                            fontSize:12
                        }}>
                            By Dr. John Doe
                        </Typography>
                        <Typography variant='body1' sx={{
                            color:"seagreen",
                            mb:3,
                        }}>
                        Essential guidelines for preventing COVID-19 in rural communities, including vaccination information, mask guidance, and social distancing practices                        
                        </Typography>
                        <Typography variant='body2' component={"a"} href='#' sx={{
                            textDecoration:"none",
                            color:"seagreen",
                            fontWeight:700,

                        }}>Read More</Typography>
                    </Box>                 
                </CardContent>
            </Card>
            <Card sx={{
                width:400,
                borderRadius:3,
                
            }}>
                <CardContent sx={{
                    display:"flex",
                    flexDirection:"column", 
                    gap:2,
                    borderRadius:3,
                    
                }}>
                    <Box
                    component={"img"}

                    src='https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='healthcare'
                    sx={{
                        width:"100%",
                        height:300,
                        objectFit:"cover"
                    }}
                    />
                    <Box sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-between"
                    }}>
                        <Typography variant='body2' sx={{
                            color:"seagreen",

                        }}>
                             Infectious Disease
                        </Typography >
                        <Typography variant='body2' sx={{
                            color:"seagreen"
                        }}>15TH April 2025</Typography>
                    </Box>  
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap:1,
                    }}>
                        <Typography variant='h6'>
                             COVID-19 Prevention Guidelines
                        </Typography>
                        <Typography variant='body2' sx={{
                            color:"seagreen",
                            fontStyle:"italic",
                            fontSize:12
                        }}>
                            By Dr. John Doe
                        </Typography>
                        <Typography variant='body1' sx={{
                            color:"seagreen",
                            mb:3,
                        }}>
                        Essential guidelines for preventing COVID-19 in rural communities, including vaccination information, mask guidance, and social distancing practices                        
                        </Typography>
                        <Typography variant='body2' component={"a"} href='#' sx={{
                            textDecoration:"none",
                            color:"seagreen",
                            fontWeight:700,

                        }}>Read More</Typography>
                    </Box>                 
                </CardContent>
            </Card>
            <Card sx={{
                width:400,
                borderRadius:3,
                
            }}>
                <CardContent sx={{
                    display:"flex",
                    flexDirection:"column", 
                    gap:2,
                    borderRadius:3,
                    
                }}>
                    <Box
                    component={"img"}

                    src='https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='healthcare'
                    sx={{
                        width:"100%",
                        height:300,
                        objectFit:"cover"
                    }}
                    />
                    <Box sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-between"
                    }}>
                        <Typography variant='body2' sx={{
                            color:"seagreen",

                        }}>
                             Infectious Disease
                        </Typography >
                        <Typography variant='body2' sx={{
                            color:"seagreen"
                        }}>15TH April 2025</Typography>
                    </Box>  
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap:1,
                    }}>
                        <Typography variant='h6'>
                             COVID-19 Prevention Guidelines
                        </Typography>
                        <Typography variant='body2' sx={{
                            color:"seagreen",
                            fontStyle:"italic",
                            fontSize:12
                        }}>
                            By Dr. John Doe
                        </Typography>
                        <Typography variant='body1' sx={{
                            color:"seagreen",
                            mb:3,
                        }}>
                        Essential guidelines for preventing COVID-19 in rural communities, including vaccination information, mask guidance, and social distancing practices                        
                        </Typography>
                        <Typography variant='body2' component={"a"} href='#' sx={{
                            textDecoration:"none",
                            color:"seagreen",
                            fontWeight:700,

                        }}>Read More</Typography>
                    </Box>                 
                </CardContent>
            </Card>
            <Card sx={{
                width:400,
                borderRadius:3,
                
            }}>
                <CardContent sx={{
                    display:"flex",
                    flexDirection:"column", 
                    gap:2,
                    borderRadius:3,
                    
                }}>
                    <Box
                    component={"img"}

                    src='https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='healthcare'
                    sx={{
                        width:"100%",
                        height:300,
                        objectFit:"cover"
                    }}
                    />
                    <Box sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-between"
                    }}>
                        <Typography variant='body2' sx={{
                            color:"seagreen",

                        }}>
                             Infectious Disease
                        </Typography >
                        <Typography variant='body2' sx={{
                            color:"seagreen"
                        }}>15TH April 2025</Typography>
                    </Box>  
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap:1,
                    }}>
                        <Typography variant='h6'>
                             COVID-19 Prevention Guidelines
                        </Typography>
                        <Typography variant='body2' sx={{
                            color:"seagreen",
                            fontStyle:"italic",
                            fontSize:12
                        }}>
                            By Dr. John Doe
                        </Typography>
                        <Typography variant='body1' sx={{
                            color:"seagreen",
                            mb:3,
                        }}>
                        Essential guidelines for preventing COVID-19 in rural communities, including vaccination information, mask guidance, and social distancing practices                        
                        </Typography>
                        <Typography variant='body2' component={"a"} href='#' sx={{
                            textDecoration:"none",
                            color:"seagreen",
                            fontWeight:700,

                        }}>Read More</Typography>
                    </Box>                 
                </CardContent>
            </Card>
        </Box>             
    </Box>
  )
}

export default HealthCareResources
