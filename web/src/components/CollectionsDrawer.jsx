import React from "react";
import { Button, Drawer } from "@mui/material";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import theme from "../themes";

export default function CollectionsDrawer() {

    const [open, setOpen] = React.useState(true);

    const toggleDrawer = (open) => (event) => {
        setOpen(!open);
    }

    const list = () => (

    <Box
        role="presentation"
        sx={{ width: 250, bgcolor: theme.palette.primary.main }}
    >
        <List theme={theme}>
            {['All Books', 'Collections', 'New Collection', 'Idk'].map((text) => (
            <ListItem key={text} disablePadding color="inherit">
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
    </Box>
  );

    


    return (
        <Drawer 
        open={open}
        onClose={() => toggleDrawer(false)}
        >
            {list()}
        </Drawer>
    )
}