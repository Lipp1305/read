import { Drawer } from "@mui/material";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import theme from "../themes";

export default function CollectionsDrawer() {

    let state = true;

    const list = () => (

    <Box
        role="presentation"
        sx={{ width: 250 }}
        theme={theme}
    >
        <List>
            {['All Books', 'Collections', 'New Collection', 'Idk'].map((text) => (
            <ListItem key={text} disablePadding>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
    </Box>
  );

    


    return (
        <Drawer open={state}>
            {list()}
        </Drawer>
    )
}