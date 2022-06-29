import './About.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
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
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Tooltip from '@mui/material/Tooltip';

import {
  HashRouter, Route, Routes, Link, Switch,
} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';


import Statement from '../statement/Statement';


class About extends React.Component {

 
render() {
  
  return (
  <div className="Body">
    <Box sx={{maxWidth:900}} alignItems="center" justifyContent="center" m='auto'>
      <p> 
        <div className = "Description">
          <Typography variant="h4" align="center"> 
             About Me
          </Typography>
        </div>
      </p>
    <Divider />
      <p> 
        <div >
          <Typography variant="body"> 
            Taylor Sullivan began her bow repair journey under the instruction of master bow maker Rodney Mohr at his Learning Trade Secrets workshops in Ashland, Ohio. She first became interested in the trade while working on rental instruments and bows at J Brown Violin Maker in Claremont, California. She then made it a goal to start spending time with people in the field whenever she got the chance. From Claremont to Ashland to Nashville and back to the Los Angeles area, she has been influenced by many fine repair women and men and has refined her interests and skills from there. Taylor has studied closely with Rodney and Kate Mohr, Sarah Bystrom, and, most recently, Brianna Goldberg, who has passed on her bass bow rehair and repair expertise.
          </Typography>
        </div>
      </p>
      <Box sx={{ flexGrow: 1 }} display="flex" alignItems="center" justifyContent="center" m="auto">
        <Card sx={{ minWidth: 300, maxWidth: 800}}>
          <CardMedia
            component="img"
            image="../../IMG_0448.jpeg"
            alt="Picture Working In Shop"
          />
        </Card>
      </Box>
      <p> 
        <div >
          <Typography variant="body"> 
            Taylor is an accomplished fiddle player, having grown up in the Missouri old-time fiddle contest scene. She holds a Bachelor of Music degree in violin performance as well as teacher training certificates from the Los Angeles Suzuki Institute. She has enjoyed teaching violin at the Claremont Community School of Music for over six years.
          </Typography>
        </div>
      </p>
    </Box>
      
    
  </div>
  );
  
}
}
export default About;
