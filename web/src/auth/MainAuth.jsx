import React, { useState } from "react";
import { Container, Typography, Grid, Paper, TextField, Button, Link } from "@mui/material";
import { useTheme } from "@emotion/react";

function MainAuth() {

    const theme = useTheme();

    const [firstTime, setFirstTime] = useState(false);



    return (
        <Grid
        container
        style={{ minHeight: '100vh' }}
        alignItems="center"
        justifyContent="center"
        direction={'column'}
        sx={{ backgroundColor: theme.palette.primary.main }}
        >
            <Grid item xs={12}>
                <Typography variant="h1" pb={10} sx={{ color: "white"}}>
                    Read.
                </Typography>
            </Grid>
            <Grid item xs={10} sm={8} md={6} lg={4}>

                {firstTime ? (
                    <>
                    <Paper elevation={3} style={{ padding: '2rem' }}>
                        <Typography variant="h4" gutterBottom>Sign Up</Typography>
                        <form>
                            <TextField label="Username" fullWidth margin="normal" variant="outlined" />
                            <TextField label="Password" type="password" fullWidth margin="normal" variant="outlined" />
                            <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '1rem' }}>Sign Up</Button>
                        </form>
                    </Paper>
                    <Grid item xs={12} sx={{ marginTop: '1rem' }}>
                        {/* 
                        <Typography variant="body" sx={{ color: "white" }}>
                        Forgot your password?{" "}
                        </Typography>
                        */}


                        <Typography variant="body" sx={{ color: "white" }}>
                        Have an account already?{" "}
                        <Link
                        component={Button}
                        variant="body1"
                        href="#"
                        style={{ color: "white" }}
                        onClick={() => setFirstTime(false)}
                        >Log In</Link>
                        </Typography>
                    </Grid>
                    </>
                ) : (
                <>
                <Paper elevation={3} style={{ padding: '2rem' }}>
                    <Typography variant="h4" gutterBottom>
                    Login
                    </Typography>
                    <form>
                    <TextField
                        label="Username"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '1rem' }}
                    >
                        Login
                    </Button>
                    </form>
                </Paper>
                <Grid item xs={12} sx={{ marginTop: '1rem' }}>
                    {/* 
                    <Typography variant="body" sx={{ color: "white" }}>
                    Forgot your password?{" "}
                    </Typography>
                    */}


                    <Typography variant="body" sx={{ color: "white" }}>
                    Don't have an account?{" "}
                    <Link
                    component={Button}
                    variant="body1"
                    href="#"
                    style={{ color: "white" }}
                    onClick={() => setFirstTime(true)}
                    >Get Started</Link>
                    </Typography>
                </Grid>
                </>

                )
                }



            </Grid>
        </Grid>
    )

}

export default MainAuth;