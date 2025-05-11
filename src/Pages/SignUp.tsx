import { Avatar, Box, Button, FormControlLabel,Checkbox, Paper, TextField, Grid, Typography, Alert } from '@mui/material'
import { Link,useNavigate } from 'react-router-dom'
import {useMutation} from '@tanstack/react-query'
import  { useState,  } from 'react'
import axios from 'axios'
import apiUrl from '../utils/apiUrl'

const SignUp = () => {
    const [emailAddress, setEmailAddress] =useState<string>("")
    const [password, setPassword] =useState<string>("")
    const [firstName, setFirstName] =useState<string>("")
    const [lastName, setLastName] =useState<string>("")
    const [userName, setUserName] =useState<string>("")
    const [address, setAddress] =useState<string>("")
    const [phoneNumber, setPhoneNumber] =useState<string>("")
    const [confirmPassword, setConfirmPassword] =useState<string>("")
    const [error, setError] =useState<string>("") 
    const navigate = useNavigate()
    
    
   const {mutate,isPending}= useMutation({
        mutationKey: ["signUp"],
        mutationFn: async () => {
                const response = await axios.post(`${apiUrl}/auth/register`, {
                    emailAddress,
                    password,
                    firstName,
                    lastName,
                    userName,
                    address,
                    phoneNumber
                })
                console.log(response.data)   
                return response.data
         },
         
         onSuccess: () => {
             <Box mt={12}><Alert severity="success">User created successfully</Alert></Box>
             navigate('/login')
         },
         onError: (error) => {
             if(axios.isAxiosError(error)){
                 setError(error.response?.data.message)
                 
             }else{
                 setError("An error occurred")
             }
         }
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        } 
        if (password.length < 8) {
            setError("Password must be at least 8 characters")
            return
        } 
        const hashLetter =/[a-z,A-Z]/.test(password)  
        const hashSymbol = /[0-9!@#$%^&*(),.?":{}|<>]/.test(password)
        if (!hashLetter || !hashSymbol) {
            setError("Password must contain at least one letter and one symbol")
            return
        }
         if(!firstName || !lastName || !emailAddress || !userName || !password || !confirmPassword){
              setError("All fields are required")
              return
         }

        mutate()

        
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
            <h1>Sign Up</h1> 
            </Box>   
            <Box
            component={"form"}
            sx={{
                maxWidth:500
            }}
            onSubmit={handleSubmit}
            >
                {
                    error &&
                    <Alert severity="error">{error}</Alert>
                }
                <TextField label="First Name" type='text' variant="outlined" 
                 fullWidth
                 value={firstName}
                 onChange={(e) => setFirstName(e.target.value)}
                 sx={{
                    mb:2
                 }} />
                 <TextField label="Last Name" type='text' variant="outlined" 
                 value={lastName}
                 onChange={(e) => setLastName(e.target.value)}
                 fullWidth
                 sx={{
                    mb:2
                 }} />
                <TextField label="Email" type='email' variant="outlined" 
                 value={emailAddress}
                 onChange={(e) => setEmailAddress(e.target.value)}
                 fullWidth
                 sx={{
                    mb:2
                 }}
                />
                <TextField label="Username" type='text' variant="outlined" 
                 value={userName}
                 onChange={(e) => setUserName(e.target.value)}
                 fullWidth
                 sx={{
                    mb:2
                 }}
                />

                <TextField label="Enter Your Address" type='text' variant="outlined" 
                 fullWidth
                 value={address}
                 onChange={(e) => setAddress(e.target.value)}
                 sx={{
                    mb:2
                 }} />
                 <TextField label="Phone Number" type='phone' variant="outlined" 
                 fullWidth
                 value={phoneNumber}
                 onChange={(e) => setPhoneNumber(e.target.value)}
                 sx={{
                    mb:2
                 }} />
                <TextField label="Password" type='password' variant="outlined" 
                 fullWidth
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 sx={{
                    mb:2
                 }}
                />
                <TextField label="Confirm Password" type='password' variant="outlined" 
                 fullWidth
                 value={confirmPassword}
                 onChange={(e) => setConfirmPassword(e.target.value)}
                 sx={{
                    mb:2
                 }}
                />
               <FormControlLabel
                  control={<Checkbox value="agree" color="primary" />}
                 label="I agree to terms and conditions" 
                 required
                 sx={{
                    mv:2
                 }}
                    />
                <Button variant="contained" type='submit' size="large" fullWidth disabled={isPending}  sx={{
                    mb:2
                 }}>
                    {isPending ? "Loading..." : "Register"}
                 </Button>
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
