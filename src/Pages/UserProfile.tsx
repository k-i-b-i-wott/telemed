import { Box, Typography, Avatar, Button } from '@mui/material';
import {TabContext, TabPanel,TabList} from "@mui/lab"

const UserProfile = () => {
  return (
    <Box
      sx={{
        mt: 17,
        display: 'flex',
        flexDirection: {
          xs: 'column', 
          md: 'row'
        }
      }}
    >
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', 
          justifyContent: 'space-between',
          margin: 2,
          p: 3,
          alignItems: 'center', 
          boxShadow: 3,
          width: '200px'
        }}
      >
        <Avatar />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            fontSize: 10
          }}
        >
          <Typography variant='h5'>Name</Typography>
          <Typography variant='body1'>Email</Typography>
        </Box>
        <Typography>Member since date</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'flex-start',
            mt:2,
          }}
        >
          <Button variant="outlined" fullWidth sx={{ fontSize: 12 }}>
            Personal Information
          </Button>
          <Button variant="outlined" fullWidth sx={{ fontSize: 12 }}>
            Appointments
          </Button>
          <Button variant="outlined" fullWidth sx={{ fontSize: 12 }}>
            Medical Records
          </Button>
          <Button variant="outlined" fullWidth sx={{ fontSize: 12 }}>
            Settings
          </Button>
        </Box>
      </Box>
          <Box>

          </Box>

    </Box>
  );
};

export default UserProfile;
