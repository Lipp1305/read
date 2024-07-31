import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


function MainPage() {
  return (
    <Container>
        <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Read.
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
            Read is a simple book tracking app that allows you to add books to your collection and mark them as read or unread.
        </Typography>
    </Container> 
  );
}

export default MainPage;