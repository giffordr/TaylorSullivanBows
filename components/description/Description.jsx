import './Description.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Grid';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';


class Description extends React.Component {

    // Create state
  state = {

    // Get audio file in a variable
    open: false,
    audio: new Audio('./components/description/binaural_SoundBowlDemo.mp3'),
    buttonType: "contained",
    // Set initial state of song
    isPlaying: false,
    buttonLabel: "Binaural Demo",
    
  };
  handleButtonClick = () => {
    this.setState({open: true});
    this.playPause();
  };
  
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({open: false});
  };
  
  message = (
    <React.Fragment> 
      <Stack direction="row" justifyContent="space-between">
        <Typography >Playing: Spatialized Sound Demo</Typography>
  
        <IconButton
          size="small"
          align="right"
          aria-label="close"
          color="inherit"
          onClick={this.handleClose}
          >
            <CloseIcon fontSize="small" />
        </IconButton>
      </Stack>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What am I hearing?</Typography>
        </AccordionSummary>
      
        <AccordionDetails>
          <Typography>
            This is an example of synthesized singing bowl sounds that will be used in this project. In this sample, the same spatialization technique (referred to as ambisonics) is rendered as binaural audio, using a transform function that accounts for the shape of your head. As such, it gives a decent example of what these spatialized singing bowls might sound like in the real installation. It's best to use heaphones. <HeadphonesIcon fontSize="small"/>
          </Typography>
        </AccordionDetails>
      </Accordion>
        
    </React.Fragment>);

  // Main function to handle both play and pause operations
  playPause = () => {

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
      this.setState({ isPlaying: false });
      this.setState({open: false});
      this.setState({buttonType: "contained"});
      this.setState({buttonLabel: "Paused"});
      
    } else {

      // Play the song if it is paused
      this.state.audio.play();
      this.setState({ isPlaying: true });
      this.setState({open: true});
      this.setState({buttonType: "outlined"});
      this.setState({buttonLabel: "Playing"});
    }

    // Change the state of song
    
    //this.setState({ isPlaying: false });
  };
 
render() {
  
  return (
    <div className="Body">
    <Box sx={{maxWidth:900}} alignItems="center" justifyContent="center" m='auto'>    
      <p> 
        <div className = "Description">
          <Typography variant="h4" align="center"> 
             Welcome to Taylor Sullivan Bows
          </Typography>
        </div>
      </p>
    <Divider />
      <p> 
        <div >
          <Typography variant="body"> 
            This webpage is still being built. Check back soon to learn more about our services, and for easy appointment bookings. Thanks for your patience.
          </Typography>
        </div>
      </p>
      <Box sx={{ flexGrow: 1 }} display="flex" alignItems="center" justifyContent="center" m="auto">      
        <Grid container spacing={2} display="flex" alignItems="center" justifyContent="center">
         <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{maxWidth: 370, minWidth: 210}}>
              <CardMedia
                component="img"
                image="EEDAA25B-220C-4103-B764-44427E4CB54D_1_105_c.jpg"
                alt="Working in shop1"
              />
                
            </Card>
         </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{maxWidth: 370, minWidth: 210}}>
              <CardMedia
                component="img"
                image="IMG_0448.jpeg"
                alt="Working in shop2"
              />
            </Card>
          </Grid>
          <Grid item xs display="flex" alignItems="center" justifyContent="center" m="auto">
            <Card sx={{maxWidth: 370, minWidth: 210, maxHeight: 290}}>
              <CardMedia
                component="img"
                image="IMG_0407.jpeg"
                alt="Working in shop3"
              />
            </Card>
          </Grid>
          
        </Grid>
      </Box>
      <p> 
        <div >
          <Typography variant="body"> 
            
          </Typography>
        </div>
      </p>
      
      
    </Box>
    </div>
    );
  }
}
export default Description;
