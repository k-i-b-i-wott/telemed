import {Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material"

const FindDoctors = () => {
  return (
    <Box sx={{
        mt:15,
        p:4
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
            mt:3
            
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
                        width:300, 
                                               
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
                width:300

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
                  p:3,
                  alignItems:"center",
                  justifyContent:"center"
            }}>
            <Button variant="contained" sx={{
                backgroundColor:"darkseagreen",
                                                
            }}>
                    Apply Filters                
            </Button> 
            </Box> 
        </Box>   
    </Box>
  )
}

export default FindDoctors
