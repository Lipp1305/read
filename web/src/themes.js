import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: grey[800]
        },
        secondary: {
            main: grey[700]
        }
    }
})

export default theme;