import { Avatar, Box, Button,  Paper, Typography } from '@mui/material'


export const OurProfessionals = () => {
    
  return (
    <Box sx={{
        mt:4,
        boxShadow:2,
        py:4,
        mb:2
    }}>
        <Box sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            p:3
        }}>
            <Box sx={{
                display:"flex",
                flexDirection:"column",
               
                gap:1
            }}>
            <Typography variant='h3' fontWeight={600}>Our HealthCare Professionals</Typography>
            <Typography variant='body1' sx={{fontSize:15, color:"darkseagreen"}}>Qualified doctors ready to provide care remotely.</Typography>
            </Box>
            <Button variant='outlined' sx={{
                bgColor:"darkseagreen",
                color:"lightseagreen"
            }}>
                View All
            </Button>
        </Box>
        <Box sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            mt:2,
            flexWrap:"wrap",
            gap:3
        }}>
            <Paper elevation={12} sx={{
                maxWidth:400,
                p:3,
            }}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    
                    alignItems:"center",
                    padding:"1rem"
                }}>
                    <Avatar sx={{width:100, height:100}}>

                    </Avatar>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        marginLeft:3
                    }}>
                        <Typography sx={{
                            fontWeight:600,
                            color:"darkseagreen"

                        }}>
                            Dr. John Doe
                        </Typography>
                        <Typography sx={{
                            fontWeight:100,
                            fontStyle:"italic",
                        }}>
                            Cardiologist
                        </Typography>
                    </Box>                    
                </Box>  
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    padding:3
                }}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"row",
                        gap:2
                    }}>
                        <Typography sx={{
                            fontWeight:600,
                            fontSize:15
                        }}>
                            Experience :  
                        </Typography>
                        <Typography sx={{
                            
                        }}>
                            15 Years
                        </Typography>
                    </Box>
                    <Typography>
                        <span>⭐</span> 4.5/5
                    </Typography>
                </Box>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    gap:2
                    
                }}>
                    <Button variant='outlined' sx={{
                        color:"darkgreen"
                    }}>View Profile</Button>
                    <Button variant='contained' sx={{
                        bgcolor:"darkgreen"
                    }}>Book Appointment</Button>
                    
                </Box>
            </Paper>
            <Paper elevation={12} sx={{
                maxWidth:400,
                p:3,
            }}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    
                    alignItems:"center",
                    padding:"1rem"
                }}>
                    <Avatar sx={{width:100, height:100}}>

                    </Avatar>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        marginLeft:3
                    }}>
                        <Typography sx={{
                            fontWeight:600,
                            color:"darkseagreen"

                        }}>
                            Dr. Priya Sharma
                        </Typography>
                        <Typography sx={{
                            fontWeight:100,
                            fontStyle:"italic",
                        }}>
                            Obstetrics & Gynecology
                        </Typography>
                    </Box>                    
                </Box>  
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    padding:3
                }}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"row",
                        gap:2
                    }}>
                        <Typography sx={{
                            fontWeight:600,
                            fontSize:15
                        }}>
                            Experience :  
                        </Typography>
                        <Typography sx={{
                            
                        }}>
                            12 Years
                        </Typography>
                    </Box>
                    <Typography>
                        <span>⭐</span> 4.9/5
                    </Typography>
                </Box>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    gap:2
                    
                }}>
                    <Button variant='outlined' sx={{
                        color:"darkgreen"
                    }}>View Profile</Button>
                    <Button variant='contained' sx={{
                        bgcolor:"darkgreen"
                    }}>Book Appointment</Button>
                    
                </Box>
            </Paper>
            <Paper elevation={12} sx={{
                maxWidth:400,
                p:3,
            }}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    
                    alignItems:"center",
                    padding:"1rem"
                }}>
                    <Avatar sx={{width:100, height:100}}>

                    </Avatar>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        marginLeft:3
                    }}>
                        <Typography sx={{
                            fontWeight:600,
                            color:"darkseagreen"

                        }}>
                            Dr. Sarah Johnson
                        </Typography>
                        <Typography sx={{
                            fontWeight:100,
                            fontStyle:"italic",
                        }}>
                        General Medicine
                        </Typography>
                    </Box>                    
                </Box>  
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    padding:3
                }}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"row",
                        gap:2
                    }}>
                        <Typography sx={{
                            fontWeight:600,
                            fontSize:15
                        }}>
                            Experience :  
                        </Typography>
                        <Typography sx={{
                            
                        }}>
                            10 Years
                        </Typography>
                    </Box>
                    <Typography>
                        <span>⭐</span> 4.7/5
                    </Typography>
                </Box>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    gap:2
                    
                }}>
                    <Button variant='outlined' sx={{
                        color:"darkgreen"
                    }}>View Profile</Button>
                    <Button variant='contained' sx={{
                        bgcolor:"darkgreen"
                    }}>Book Appointment</Button>
                    
                </Box>
            </Paper><Paper elevation={12} sx={{
                maxWidth:400,
                p:3,
            }}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    
                    alignItems:"center",
                    padding:"1rem"
                }}>
                    <Avatar sx={{width:100, height:100}}>

                    </Avatar>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"column",
                        marginLeft:3
                    }}>
                        <Typography sx={{
                            fontWeight:600,
                            color:"darkseagreen"

                        }}>
                            Dr. Michael Chen
                        </Typography>
                        <Typography sx={{
                            fontWeight:100,
                            fontStyle:"italic",
                        }}>
                           Pediatrics
                        </Typography>
                    </Box>                    
                </Box>  
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    padding:3
                }}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"row",
                        gap:2
                    }}>
                        <Typography sx={{
                            fontWeight:600,
                            fontSize:15
                        }}>
                            Experience :  
                        </Typography>
                        <Typography sx={{
                            
                        }}>
                            10 Years
                        </Typography>
                    </Box>
                    <Typography>
                        <span>⭐</span> 4.9/5
                    </Typography>
                </Box>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    gap:2
                    
                }}>
                    <Button variant='outlined' sx={{
                        color:"darkgreen"
                    }}>View Profile</Button>
                    <Button variant='contained' sx={{
                        bgcolor:"darkgreen"
                    }}>Book Appointment</Button>
                    
                </Box>
            </Paper>
            
        </Box>
    </Box>
  )
}
