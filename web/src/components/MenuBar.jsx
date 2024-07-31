import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';


function MenuBar() {
  return (
    <AppBar position="static">
      <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Read.
          </Typography>
          <Button color='inherit'>
            Add Book
          </Button>
      </Toolbar>
    </AppBar>
  );
}

export default MenuBar;