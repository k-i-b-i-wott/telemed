import { Avatar, Box, Button, FormControlLabel,Checkbox, Paper, TextField, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const SignUp = () => {
  return (
    <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        mt:20
    }}>
        <Paper sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",   
            p:3    
        }}>
        <Box sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
        }}>
            <Avatar sx={{width:70, height:70}} />  
            <h1>Sign Up</h1> 
            </Box>   
            <Box
            component={"form"}
            sx={{
                maxWidth:500
            }}
            >
                <TextField label="First Name" type='text' variant="outlined" 
                 fullWidth
                 sx={{
                    mb:2
                 }} />
                 <TextField label="Last Name" type='text' variant="outlined" 
                 fullWidth
                 sx={{
                    mb:2
                 }} />
                <TextField label="Email" type='email' variant="outlined" 
                 fullWidth
                 sx={{
                    mb:2
                 }}
                />
                <TextField label="Username" type='text' variant="outlined" 
                 fullWidth
                 sx={{
                    mb:2
                 }}
                />

                <TextField label="Enter Your Address" type='text' variant="outlined" 
                 fullWidth
                 sx={{
                    mb:2
                 }} />
                 <TextField label="Phone Number" type='phone' variant="outlined" 
                 fullWidth
                 sx={{
                    mb:2
                 }} />
                <TextField label="Password" type='password' variant="outlined" 
                 fullWidth
                 sx={{
                    mb:2
                 }}
                />
                <TextField label="Confirm Password" type='password' variant="outlined" 
                 fullWidth
                 sx={{
                    mb:2
                 }}
                />
               <FormControlLabel
                  control={<Checkbox value="agree" color="primary" />}
                 label="I agree to terms and conditions" 
                 sx={{
                    mv:2
                 }}
                    />
                <Button variant="contained" type='submit' size="large" fullWidth  sx={{
                    mb:2
                 }}>Sign Up</Button>
            </Box>  

            <Grid container sx={{gap:1}}>
                <Grid >
                    <Typography>Already have an account?</Typography>
                </Grid>
                <Grid >
                    <Typography component={Link} to="/login">Login</Typography>
                </Grid>
            </Grid>           
        </Paper>

    </Box>
  )
}

export default SignUp
