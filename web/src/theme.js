import { createTheme } from "@mui/material";
import { grey, lightBlue } from "@mui/material/colors";


const theme = createTheme({
    palette: {
        primary: {
            light: grey[300],
            main: grey[800],
            dark: grey[900]
        },
        secondary: {
            light: lightBlue[300],
            main: lightBlue[600],
            dark: lightBlue[800]
        }
    },
})

export default theme;