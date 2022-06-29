import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';


const pages = ['About', 'Services', 'Availability'];



function ElevationScroll(props) {
  
  
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default function ElevateAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <React.Fragment>
      <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar sx={{backdropFilter:"blur(10px)"}} style={{ background: 'transparent'}}>
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <a href="#/" style= {{color: '#444242'}}>
                <Typography style={{color:"#444242"}} variant="h6" component="div">
                 Taylor Sullivan Bows 
                </Typography>
                </a>
                
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} display="flex" alignItems="right" justifyContent="right" >
                  {pages.map((page) => (

                  <a href={"#/"+page} style= {{color: '#444242'}}>
                    <Button
                      key={page}
                      sx={{ my: 2, color: "#444242", display: 'block' }}
                    >
                      {page}
                    </Button>
                    </a>
                  ))}
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} display="flex" alignItems="right" justifyContent="right" >
              
                  
                  <IconButton  onClick={handleOpenNavMenu}>
                    <MenuIcon />
                  </IconButton>
                    
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    {pages.map((page) => (
                    
                    <a href={"#/"+page} style= {{color: '#444242'}}>
                      <MenuItem key={page} >
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </a>
                    ))}
                  </Menu>
                  
                </Box>
              </Toolbar>  
            </Container>     
          </AppBar>
        </ElevationScroll>
      <Toolbar />
      <Box sx={{maxWidth:900, width:'100%'}} display="flex" lignItems="center" justifyContent="center" m='auto' component="img"
        src="../../bowPic2.jpeg">
      </Box>
        
         
    </React.Fragment>
  );
}