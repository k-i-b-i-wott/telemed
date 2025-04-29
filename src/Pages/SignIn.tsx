import { Box ,Grid,Typography,Checkbox, Paper, TextField,Avatar,Button,FormControlLabel} from '@mui/material'
import { Link } from 'react-router-dom'

const SignIn = () => {
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
            <h1>Sign In</h1> 
            </Box>   
            <Box
            component={"form"}
            sx={{
                maxWidth:500
            }}
            >              
                <TextField label="Enter your Email or Username" type='email' variant="outlined" 
                 fullWidth
                 sx={{
                    mb:2
                 }}
                />
                
                <TextField label="Password" type='password' variant="outlined" 
                 fullWidth
                 sx={{
                    mb:2
                 }}
                />
                
               <FormControlLabel
                  control={<Checkbox value="agree" color="primary" />}
                 label="Remember Me" 
                 sx={{
                    mv:2
                 }}
                    />
                <Button variant="contained" type='submit' size="large" fullWidth  sx={{
                    mb:2
                 }}>Sign In</Button>
            </Box>  

            <Grid container sx={{gap:1}}>
                <Grid >
                    <Typography>Don't have an account?</Typography>
                </Grid>
                <Grid >
                    <Typography component={Link} to="/register">Sign Up</Typography>
                </Grid>
            </Grid>           
        </Paper>

    </Box>
  )
}

export default SignIn
