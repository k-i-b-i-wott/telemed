import { Box ,Grid,Typography,Checkbox, Paper, TextField,Avatar,Button,FormControlLabel, Alert} from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import apiUrl from '../utils/apiUrl'

const SignIn = () => {
    const [identifier, setIdentifier]= useState("")
    const [password, SetPassword] =useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const {mutate,isPending}=useMutation({
        mutationKey:["Login-User"],
        mutationFn: async () =>{
            const response = await axios.post(`${apiUrl}/auth/login`,{
                identifier,
                password
            },{withCredentials:true})
            console.log(response.data)    
            return response.data
        },
        onSuccess:()=>{
            // navigate('/')
        },
        onError:(error)=>{
            if(axios.isAxiosError(error)){
                setError(error.response?.data.message)
            }else{
                setError("An error occurred")
            }
        }
    })



    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setError("")        
        if (!identifier || !password){
            setError("All fields required")
            return
        }
        mutate ()        ;
    }
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
            onSubmit={handleSubmit}
            sx={{
                maxWidth:500
            }}
            >     
                {
                error && <Alert severity='error' sx={{mb:2}}>{error}</Alert> 
                }         
                <TextField label="Enter your Email or Username"  variant="outlined" 
                 fullWidth
                 value={identifier}
                 onChange={(e)=> setIdentifier(e.target.value)}
                 sx={{
                    mb:2
                 }}
                />
                
                <TextField label="Password" type='password' variant="outlined" 
                 fullWidth
                 value={password}
                 onChange={(e)=>SetPassword(e.target.value)}
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
                <Button variant="contained" type='submit' size="large" fullWidth disabled={isPending}  sx={{
                    mb:2
                 }}>{
                    isPending ? "Logging In ....." : "Login"
                 }</Button>
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
