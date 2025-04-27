import { AppBar, Avatar, Button, IconButton,Typography, Toolbar, useMediaQuery,useTheme,ListItem,List, Drawer, Box, Divider } from '@mui/material'
import { Link } from 'react-router-dom';
import { FaHospitalSymbol } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";


export const NavBar = () => {
    const theme =useTheme();
    const [drawerOpen, setDrawerOpen]= useState(false)
    const isMobile= useMediaQuery(theme.breakpoints.down("md"))

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen)
      }
    
    const drawerContent = (
       <Box sx={{ width: 250  }}>
        
        <List>
            <ListItem>
            <Button color="inherit">
                Home             
            </Button>               
            </ListItem>
            <ListItem>
            <Button color="inherit">
                Find Doctors          
            </Button>               
            </ListItem>
            <ListItem>
            <Button color="inherit">
                HealthCare Resources             
            </Button>               
            </ListItem>
            <ListItem>
            <Button color="inherit" endIcon={<IoIosLogOut />} sx={{bgcolor:"darkseagreen"}}>
                Login        
            </Button>               
            </ListItem>
            <ListItem>
            <Button color="inherit" endIcon={<IoIosLogOut />} sx={{bgcolor:"lightseagreen"}}>
                Register       
            </Button>               
            </ListItem>
            <Divider />
            <ListItem>
            <Button color="inherit" endIcon={<IoIosLogOut />} sx={{bgcolor:"red"}}>
                Logout            
            </Button>               
            </ListItem>
        </List>
       </Box> 
    )

  return (
    <AppBar>
        
         <Toolbar  sx={{
        bgcolor:"lightseagreen"
    }}>
              
        <Avatar sx={{ m: 1, bgcolor: 'darkseagreen', width:100, height:100, fontSize:40 }} >
          VH
        </Avatar>
        <Typography  component={Link} to={"/"} sx={{
            color:'inherit',              
              flexGrow:1,
              textWrap:'wrap',
              fontSize:20
            }}>
                Village Wellness Hub
            </Typography>
            {
                !isMobile &&(
                    <>
                    
                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Find Doctors</Button>
              <Button color="inherit">HealthCare Resources</Button>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              color="inherit"
              endIcon={<IoIosLogOut />}
              sx={{ bgcolor: 'darkseagreen', mr: 2 }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              endIcon={<IoIosLogOut />}
              sx={{ bgcolor: 'lightseagreen', mr: 2 }}
            >
              SignUp
            </Button>
            <Divider orientation="vertical" flexItem sx={{ bgcolor: 'white', mr: 2 }} />
            <Button color="inherit" endIcon={<IoIosLogOut />} sx={{ bgcolor: 'red' }}>
              Logout
            </Button>
          </Box>
                    </>                    
                )
            } 
               {
                isMobile && (
                    <IconButton

                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                    >
                        <GiHamburgerMenu />
                    </IconButton>
                )
            }                 
          
        </Toolbar>  
        <Drawer open={drawerOpen} anchor='right' onClose={() => setDrawerOpen(false)} 
            sx={{
                '& .MuiDrawer-paper': {
                  maxHeight: '60vh', 
                  width: 250,
                  boxSizing: 'border-box',
                  bgcolor:"lightseagreen"               

                },
              }}
        >
            {drawerContent}
        </Drawer>      
    </AppBar>
  )
}
