import { Avatar, Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export const OurProffesionals = () => {
  return (
    <Box>
        <Box sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
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
            justifyContent:"space-between",
            alignItems:"center",
            mt:2,
            flexWrap:"wrap",
            gap:3
        }}>
            <Paper elevation={12} sx={{
                maxWidth:500,
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
                    
                }}>
                    <Button variant='contained' sx={{
                        bgcolor:"darkgreen"
                    }}>Book Appointment</Button>
                    <Button variant='outlined' sx={{
                        color:"darkgreen"
                    }}>View Profile</Button>
                </Box>
            </Paper>
            <Paper elevation={12} sx={{
                maxWidth:500,
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
                    
                }}>
                    <Button variant='contained' sx={{
                        bgcolor:"darkgreen"
                    }}>Book Appointment</Button>
                    <Button variant='outlined' sx={{
                        color:"darkgreen"
                    }}>View Profile</Button>
                </Box>
            </Paper>
            <Paper elevation={12} sx={{
                maxWidth:500,
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
                    
                }}>
                    <Button variant='contained' sx={{
                        bgcolor:"darkgreen"
                    }}>Book Appointment</Button>
                    <Button variant='outlined' sx={{
                        color:"darkgreen"
                    }}>View Profile</Button>
                </Box>
            </Paper>
            <Paper elevation={12} sx={{
                maxWidth:500,
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
                    
                }}>
                    <Button variant='contained' sx={{
                        bgcolor:"darkgreen"
                    }}>Book Appointment</Button>
                    <Button variant='outlined' sx={{
                        color:"darkgreen"
                    }}>View Profile</Button>
                </Box>
            </Paper>
        </Box>
    </Box>
  )
}
