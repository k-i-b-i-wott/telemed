import { Box, Grid, Paper, Typography } from '@mui/material'


const Testimonials = () => {
  return (
    <Box sx={{
        my:2,
        p:2,
        backgroundColor:"whitesmoke",
        borderRadius:2
    }}>
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            gap:2,
            textAlign:"center"
        }}>
            <Typography variant='h4' sx={{
                color:"#233E32",
                fontWeight:"bold"
            }}>
                What our users say                
            </Typography>  
            <Typography variant='body1' sx={{
                color:"#53ADD8",
                fontSize:20
            }}>
                  Real experiences from community members using our platform    
            </Typography>      
        </Box>  
        <Box sx={{
            display:"flex",
            flexDirection:"row",
            gap:2,
            flexWrap:"wrap",
            justifyContent:"center" ,
            mt:3           
        }}>
            <Paper elevation={10} sx={{maxWidth:300, mx:"auto", p:2}}>
                <Typography  variant="h3" sx={{fontWeight:"bold", color:"darkseagreen"}}>"</Typography>
                <Typography variant='body1' sx={{
                    color:"darkseagreen",
                    textAlign:"left"
                }}>
                The Village Wellness Hub has been a lifesaver for our community. We no longer have to travel hours to see a doctor for basic consultations.
                </Typography>
                <Box>
                    <Typography>
                        <strong>Rajesh Kumar</strong>
                    </Typography>
                    <Typography>
                        <em>Himachal Village</em>
                    </Typography>
                </Box>
            </Paper>
            <Paper elevation={10} sx={{maxWidth:300, mx:"auto", p:2}}>
                <Typography  variant="h3" sx={{fontWeight:"bold", color:"darkseagreen"}}>"</Typography>
                <Typography variant='body1' sx={{
                    color:"darkseagreen",
                    textAlign:"left"
                }}>
                I was able to get a second medical opinion without leaving my village. The doctors are very knowledgeable and caring.
                </Typography>
                <Box>
                    <Typography>
                        <strong>Maria Gonzalez</strong>
                    </Typography>
                    <Typography>
                        <em>Rural Mexico</em>
                    </Typography>
                </Box>
            </Paper>
            <Paper elevation={10} sx={{maxWidth:300, mx:"auto", p:2}}>
                <Typography  variant="h3" sx={{fontWeight:"bold", color:"darkseagreen"}}>"</Typography>
                <Typography variant='body1' sx={{
                    color:"darkseagreen",
                    textAlign:"left"
                }}>
                The health resources have helped me better manage my mother's diabetes. The clear instructions and regular check-ins with doctors make a huge difference.
                </Typography>
                <Box>
                    <Typography>
                        <strong>John Kibet</strong>
                    </Typography>
                    <Typography>
                        <em>Rural Kenya</em>
                    </Typography>
                </Box>
            </Paper>
        </Box>    
    </Box>
  )
}

export default Testimonials
