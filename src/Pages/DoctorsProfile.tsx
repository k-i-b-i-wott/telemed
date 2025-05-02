
import{Avatar, Box, Button, Divider, Tab,  Typography} from '@mui/material'
import { useState } from 'react';
import {TabContext, TabPanel,TabList} from "@mui/lab"
const DoctorsProfile = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    event.preventDefault()
    setValue(newValue);
  };
  return (
    <Box sx={{
      mt:17,
      display:"flex",
      flexDirection:{
        xs:"column",
        md:"row"
      },
      gap:3,  
      p:{
        xs:1,
        md:3
      }
      
    }}>
      <Box boxShadow={2} sx={{
        display:"flex",
        flexDirection:"column",
        width:{
          xs:"100%",
          md:"40%"
        },       
        gap:2,
        p:3
      }}>   
      <Box sx={{
        display:"flex",
         flexDirection:"column",
         alignItems:"center",
         justifyContent:"center",
         gap:3,
      }}>
      <Avatar sx={{width:100, height:100}}></Avatar>   
      <Typography variant='h5'>Dr. John Doe</Typography>
      <Typography variant='body1'><span>⭐</span> 4.5/5(3 reviews)</Typography>
      <Button variant='contained' fullWidth sx={{mb:2, backgroundColor:"seagreen"}}>View Profile</Button> 
      <Button variant='outlined' fullWidth sx={{mb:2,color:"seagreen"}}>Send Message</Button>
      </Box>
      <Divider />
      <Box sx={{
        display:"flex",
         flexDirection:"column",
         alignItems:"flex-start",
         gap:2,
         color:"seagreen"
      }}>
        <Typography variant='h5' sx={{
          color:"seagreen",
          fontSize:20
        }}>Specializations</Typography>
        <Box sx={{
          display:"flex",
          flexDirection:"row",
          gap:1,
          flexWrap:"wrap",
          whiteSpace:"wrap"        
      
        }}>
        <Typography variant='body1' sx={{
          fontSize:12,

        }}>General Practitioner</Typography>
        <Typography variant='body1' sx={{
          fontSize:12,
          
        }}>Chronic Disease management</Typography>
        <Typography variant='body1' sx={{
          fontSize:12,
          
        }}>Women's Health</Typography>
        <Typography variant='body1' sx={{
          fontSize:12,
          
        }}>Tele-medicine</Typography>

        </Box>
      </Box>

      <Divider />
      <Box sx={{
        display:"flex",
         flexDirection:"column",
         alignItems:"flex-start",
         gap:2,
         color:"seagreen"
      }}>
        <Typography variant='h4'>Languages</Typography>
        <Box sx={{
          display:"flex",
          flexDirection:"row",
          gap:2,
        }}>
        <Typography variant='body1' sx={{
          fontSize:12,
          
        }}>English</Typography>
        <Typography variant='body1' sx={{
          fontSize:12,
          
        }}>Kiswahili</Typography>  
        </Box>        
      </Box>
      </Box> 
      <Box sx={{width:{
        xs:"100%",
        md:"60%"
      }, padding: 2}}>       
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, display: "flex", flexDirection: "row", alignItems: "center",justifyContent:"space-around", borderColor: 'divider' }}>
          <TabList onChange={handleChange}  sx={{
          display:"flex",
          justifyContent:"space-around"
          }}>
            <Tab label="About" value="1" />
            <Tab label="Availability" value="2" />
            <Tab label="Reviews" value="3" />
          </TabList>
        </Box>
        <Box boxShadow={2}>
        <TabPanel value="1">
          <Box sx={{display:"flex", flexDirection:"column", gap:2}} >
             <Typography variant='h6' sx={{
               color:"#284A3A"

             }}>
                About Dr. John Doe
             </Typography>
             <Typography variant='body1' sx={{
               color:"seagreen",   
               fontSize:12            
             }}>
              Dr. John Doe is a dedicated general practitioner with over 15 years of experience in rural healthcare. She specializes in preventive care, chronic disease management, and telemedicine services for underserved communities.
             </Typography>
             <Divider />
             <Typography variant='h6' sx={{
               color:"#284A3A"

             }}>
                Education & Training
             </Typography>
             <Box sx={{ borderLeft: '2px solid #c8e6c9', pl: 2, ml: 1, mb: 2 }}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{
                  color:"#284A3A"
                }}>
                  Doctor of Medicine
                </Typography>
                <Typography variant="body2" sx={{
                  color:"seagreen"
                }}>
                  Stanford University School of Medicine
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  2008
                </Typography>
              </Box>

              <Box sx={{ borderLeft: '2px solid #c8e6c9', pl: 2, ml: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{
                  color:"#284A3A"
                }}>
                  Bachelor of Science in Biology
                </Typography>
                <Typography variant="body2" sx={{
                  color:"seagreen"
                }}>
                  University of Michigan
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  2004
                </Typography>
              </Box> 
              <Box sx={{
                display:"flex",
                flexDirection:"column",
                gap:2
              }}>
                <Typography variant='h6' sx={{
                  color:"#284A3A"

                }}>Experience</Typography>
                <Typography variant='body1' sx={{
                  color:"seagreen"                  
                }}>15 years of experience in providing healthcare services, with a special focus on rural and underserved communities.</Typography>
              </Box>                                      
            </Box>
        </TabPanel>
        <TabPanel value="2">Availability</TabPanel>
        <TabPanel value="3">Reviews</TabPanel>
        </Box>
      </TabContext>
    </Box>      
      </Box>                       
    
  )
}

export default DoctorsProfile
