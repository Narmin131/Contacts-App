import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" sx={{ bgcolor: '#000051' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Contacts
            </Typography>
            <Link to="/add" className='btn btn-outline-light'><PersonAddAltIcon></PersonAddAltIcon></Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header