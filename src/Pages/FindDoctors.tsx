import {Box, Button, Card, CardActions,Avatar, CardContent, FormControl,  MenuItem, Select, TextField, Typography} from "@mui/material"

const FindDoctors = () => {
  return (
    <Box sx={{
        mt:15,
        p:4,       
    }}>
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            gap:1,
            mt:3
        }}>
            <Typography variant="h3" sx={{
                
                fontWeight:600,
                color:"#233E32"
            }}>
                Find a Doctor
            </Typography>
            <Typography variant="body1" sx={{
                fontWeight:300,
                fontSize:15,
                color:"darkseagreen"
            }}>
                 Connect with qualified healthcare professionals for remote consultations
            </Typography>
         </Box>   
        <Box sx={{
            boxShadow:2,
            display:"flex",
            justifyContent:"space-around",
            mt:3,
            alignItems:"center",
            flexWrap:"wrap"
            
        }}>
            <Box sx={{
                flex:1,
                gap:1,
                p:3
            }}>
                <Typography variant="body1" sx={{
                    color:"darkseagreen",
                    mb:1
                }}>
                    Search By Name
                </Typography>
                <TextField 
                    placeholder="Search doctors name"
                    
                    type="text"
                    sx={{
                        width:200
                                               
                    }}
                />
            </Box >
            <Box sx={{
                  flex:1,
                  gap:1,
                  p:3
            }} >
            <Typography sx={{
                color:"darkseagreen",
                mb:1
            }}>
                Specialty
            </Typography>
            <FormControl  sx={{
                width:200

            }}>                
                <Select>
                    <MenuItem>All Specialties</MenuItem>
                    <MenuItem>General Medicine</MenuItem>
                    
                    <MenuItem>Pediatrics</MenuItem>
                    <MenuItem>Obstetrics $ Gynecology</MenuItem>
                    <MenuItem>Cardiology</MenuItem>
                    <MenuItem>Psychiatry</MenuItem>
                    <MenuItem>Dermatology</MenuItem>
                </Select>
            </FormControl>       
            </Box>             
            <Box sx={{
                  flex:1,
                  gap:1,                  
                  alignItems:"center",
                  justifyContent:"center"
            }}>
                <Button variant="contained"
                sx={{
                    backgroundColor:"darkseagreen",
                   maxWidth:300
                }}
                >
                    Apply Filters                                        
                </Button>                     
            </Box> 
        </Box>
        <Box sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            placeItems:"center",
            flexWrap:"wrap",
            boxShadow:1,
            borderBlockColor:"darkseagreen",
            p:4, 
            gap:3
        }}>
            <Card>
                <CardContent>
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
                            
                </CardContent>   
                <CardActions>
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
                </CardActions>             
            </Card>
            <Card>
                <CardContent>
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
                            
                </CardContent>   
                <CardActions>
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
                </CardActions>             
            </Card>
            <Card>
                <CardContent>
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
                            
                </CardContent>   
                <CardActions>
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
                </CardActions>             
            </Card>
            <Card>
                <CardContent>
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
                            
                </CardContent>   
                <CardActions>
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
                </CardActions>             
            </Card>
        </Box>  

    </Box>
  )
}

export default FindDoctors
