import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { useTheme } from '@emotion/react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';



function MainPage() {

    const theme = useTheme();

    return (
        <Box height="100vh" bgcolor={theme.palette.primary.dark} pt={20}>
            <Container>
                <Grid container spacing={2}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
                        <Grid item xs={2}>
                            <Card elevation={24} sx={{ maxWidth: 200 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            Book {value}
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Nullam nec purus euismod, tincidunt metus nec, fermentum tortor.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default MainPage;