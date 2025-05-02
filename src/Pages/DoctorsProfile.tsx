
import{Avatar, Box, Button, Divider, Tab,  Typography,Rating,LinearProgress} from '@mui/material'
import { useState } from 'react';
import {TabContext, TabPanel,TabList} from "@mui/lab"

const reviewsData = [
  { stars: 5, count: 2, total: 3 },
  { stars: 4, count: 1, total: 3 },
  { stars: 3, count: 0, total: 3 },
  { stars: 2, count: 0, total: 3 },
  { stars: 1, count: 0, total: 3 },
];
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
        <TabPanel value="2">
            <Typography variant="h4" sx={{ color: "#284A3A", mb: 2 }}>Weekly Availability</Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 2,
                width: "100%",
              }}
            >
              {[
                { day: "Monday", hours: "9:00 AM - 5:00 PM" },
                { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
                { day: "Wednesday", hours: "9:00 AM - 1:00 PM" },
                { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
                { day: "Friday", hours: "9:00 AM - 5:00 PM" },
                { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
                { day: "Sunday", hours: "Closed" },
              ].map(({ day, hours }) => (
                <Box
                  key={day}
                  sx={{
                    p: 2,
                    border: "1px solid #ddd",
                    borderRadius: 2,
                    boxShadow: 1,
                    backgroundColor: "#f9fefa",
                  }}
                >
                  <Typography variant="body1" sx={{ color: "seagreen", fontWeight: 600 }}>
                    {day}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "seagreen" }}>
                    {hours}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Typography variant="body2" sx={{ mt: 3, fontStyle: "italic", color: "gray" }}>
              <strong>Note:</strong> All times are in your local timezone. Appointments are typically 30 minutes long.
            </Typography>
          </TabPanel>

        <TabPanel value="3">
          <Typography variant="h4" sx={{ color: "#284A3A", mb: 2 }}>
            Patients Reviews
          </Typography>
          <Box sx={{display:"flex", flexDirection:"row", gap:2 }}> 
            <Box sx={{display:"flex", flexDirection:"column", gap:1}}>
              <Typography variant="h6" sx={{ color: "#284A3A",}}>
                4.5  
              </Typography>
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} /> 
              <Typography sx={{color:"seagreen"}}>5 reviews</Typography>
            </Box>
            <Box sx={{display:"flex", flexDirection:"column", gap:1}}>
              {
                reviewsData.map((review) => {
                  const percentage = (review.count / review.total) * 100
                  return(
                  <Box key={review.stars} sx={{mb:1, display:"flex", flexDirection:"row", gap:1}}>
                      <Box sx={{alignItems:"center", spacing:1}}>
                      <Typography variant="h6" sx={{ color: "#284A3A",}}>
                         {review.stars} {review.stars === 1 ? 'star' : 'stars'}
                      </Typography>
                      </Box>
                   <Box flexGrow={1} sx={{alignItems:"center",  width:300}}>
                  <LinearProgress 
                      variant="determinate"
                      value={percentage}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: '#e0e0e0',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#4CAF50', 
                        },
                      }} /> 
                    </Box>
                    <Box>
                      <Typography sx={{color:"seagreen"}}>{review.count} reviews</Typography> 
                    </Box>
                    </Box>
                    
                  )
                }
                 
                )
              }
            </Box>  
            
          </Box>
        </TabPanel>
        </Box>
      </TabContext>
    </Box>      
      </Box>                       
    
  )
}

export default DoctorsProfile
