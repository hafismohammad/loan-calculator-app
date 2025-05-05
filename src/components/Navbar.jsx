import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyLoanApp
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">EMI Calculator</Button>
          <Button color="inherit">Contact</Button>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
