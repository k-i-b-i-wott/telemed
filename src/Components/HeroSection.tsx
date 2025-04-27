import { Box,Button,Icon,Typography, } from '@mui/material';
 import Img from "../../src/assets/images/hero-img.jpeg"
 import { FaStethoscope } from "react-icons/fa";

const HeroSection = () => {
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: {
        xs: "column", 
        md: "row", 

      },
      alignItems: "center",
      justifyContent: "space-between",
      gap: "2rem",
      padding: "1rem",
      mt:3,
      position:"relative",
      
    }}
  >
    <Box
      component="div"
      boxShadow={3}
      sx={{
        padding: "1rem",
        flex: 1, 
        display: "flex",
        flexDirection: "column",
        
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "darkseagreen",
          fontSize: "3rem",
        }}
      >
        Healthcare Access <span style={{ color: "skyblue" }}>for Everyone</span>,
        Everywhere
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "lightseagreen",
        }}
      >
        Connecting rural communities with qualified healthcare professionals through
        telemedicine, health education, and emergency services.
      </Typography>
      <Box sx={{ display: "flex", gap:3, marginTop: "1rem" }}>
        <Button variant='contained' sx={{backgroundColor:"darkseagreen"}}>
          Find a Doctor
        </Button>
        <Button variant='outlined' sx={{
          color:"darkseagreen",
          borderColor:"darkseagreen"
        }}>
          Learn More
        </Button>
      </Box>
    </Box>
    <Box sx={{
      
        position: "relative", 
        flex: { xs: 1, md: 0.7 },
        maxWidth: 400,
        display: "inline-block",
      
    }}>
    <Box
      component="img"
      src={Img}
      alt="Healthcare Image"
      sx={{
        flex: { xs: 1, md: 0.7 }, 
        padding: "1rem",
        width: { xs: "100%", md: 600 },
        height: { xs: "auto", md: 400 },
        maxWidth: 400, 
        objectFit: "cover", 
        
        position: "relative",
        display:"inline-block"
      }}
    />
    <Box boxShadow={3} sx={{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      gap:.5,
      p:1,
      position: "absolute", 
      bottom: -40, 
      left: 16, 
      backgroundColor: "white", 
      borderRadius: 1
      
    }}>
      <Box>
        <FaStethoscope size={50} color="darkseagreen" />
      </Box>
      <Box sx={{
        display:"flex",
        flexDirection:"column",
        gap:1,
        alignItems:"flex-start"
      }}>
        <Typography>
          Next Available Appointment
        </Typography>
        <Typography>
          In 15 minutes
        </Typography>
      </Box>
    </Box>
    </Box>
  </Box>
  );
};

export default HeroSection;