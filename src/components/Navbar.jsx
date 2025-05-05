import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { toggleTheme, mode } = useContext(ThemeContext);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyLoanApp
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
