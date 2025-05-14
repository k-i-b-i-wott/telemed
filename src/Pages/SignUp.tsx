import { Avatar, Box, Button, FormControlLabel, Checkbox, Paper, TextField, Grid, Typography, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'axios';
import apiUrl from '../utils/apiUrl';

const SignUp = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();
  interface SignUpPayload {
  emailAddress: string;
  password: string;
  firstName: string;
  lastName: string;
  userName: string;
  address: string;
  phoneNumber: string;
  profileImage: string;
}


  const { mutate, isPending } = useMutation({
    mutationKey: ['signUp'],
    mutationFn: async (payload:SignUpPayload) => {    

      const response = await axios.post(`${apiUrl}/auth/register`, payload);
      console.log(response.data);
      return response.data;
    },
    onSuccess: () => {
      navigate('/login');
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
      } else {
        setError('An error occurred');
      }
    },
  });

  const handleImageUpload = async () => {
   
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    const hashLetter = /[a-z,A-Z]/.test(password);
    const hashSymbol = /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);
    if (!hashLetter || !hashSymbol) {
      setError('Password must contain at least one letter and one symbol');
      return;
    }
    if (!firstName || !lastName || !emailAddress || !userName || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
      
    let uploadedImageUrl = imageUrl;
    if (profileImage && !imageUrl) {
        const formData = new FormData();
        formData.append('file', profileImage);
        formData.append('upload_preset', 'villageHub'); 
       try {
        const res = await axios.post('https://api.cloudinary.com/v1_1/dx6cjtwnp/image/upload', formData);
        setImageUrl(res.data.secure_url);
    } catch (err) {
        console.error('Image upload failed:', err);
        setError('Failed to upload image');
    }
    }
 const payload: SignUpPayload = {
    emailAddress,
    password,
    firstName,
    lastName,
    userName,
    address,
    phoneNumber,
    profileImage: uploadedImageUrl || '', // fallback to empty string
  };
    mutate(payload);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', mt: 20 }}>
      <Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Avatar src={imageUrl} sx={{ width: 70, height: 70 }} />
          <h1>Sign Up</h1>
        </Box>

        <Box component="form" sx={{ maxWidth: 500 }} onSubmit={handleSubmit}>
          {error && <Alert severity="error">{error}</Alert>}

          
          <input
            accept="image/*"
            type="file"
            id="profile-image-upload"
            style={{ display: 'none' }}
            onChange={(e) => setProfileImage(e.target.files?.[0] || null)}
          />
          <label htmlFor="profile-image-upload">
            <TextField
              label="Upload Profile Image"
              fullWidth
              variant="outlined"
              value={profileImage?.name || ''}
              onClick={() => document.getElementById('profile-image-upload')?.click()}
              InputProps={{ readOnly: true }}
              sx={{ mb: 2 }}
            />
          </label>

          <TextField label="First Name" fullWidth variant="outlined" value={firstName} onChange={(e) => setFirstName(e.target.value)} sx={{ mb: 2 }} />
          <TextField label="Last Name" fullWidth variant="outlined" value={lastName} onChange={(e) => setLastName(e.target.value)} sx={{ mb: 2 }} />
          <TextField label="Email" type="email" fullWidth variant="outlined" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} sx={{ mb: 2 }} />
          <TextField label="Username" fullWidth variant="outlined" value={userName} onChange={(e) => setUserName(e.target.value)} sx={{ mb: 2 }} />
          <TextField label="Address" fullWidth variant="outlined" value={address} onChange={(e) => setAddress(e.target.value)} sx={{ mb: 2 }} />
          <TextField label="Phone Number" fullWidth variant="outlined" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} sx={{ mb: 2 }} />
          <TextField label="Password" type="password" fullWidth variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} sx={{ mb: 2 }} />
          <TextField label="Confirm Password" type="password" fullWidth variant="outlined" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} sx={{ mb: 2 }} />

          <FormControlLabel control={<Checkbox value="agree" color="primary" />} label="I agree to terms and conditions" required sx={{ mv: 2 }} />

          <Button type="submit" fullWidth variant="contained" size="large" disabled={isPending} sx={{ mb: 2 }}>
            {isPending ? 'Loading...' : 'Register'}
          </Button>
        </Box>

        <Grid container sx={{ gap: 1 }}>
          <Grid>
            <Typography>Already have an account?</Typography>
          </Grid>
          <Grid>
            <Typography component={Link} to="/login">Login</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SignUp;
