import * as React from 'react';
import {ThemeProvider} from "@mui/styles";
import {createTheme} from "@mui/material/styles";
import RootRoutes from "./routes/RootRoutes";
import {BrowserRouter} from "react-router-dom";
import "./index.css";

function App() {
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <RootRoutes/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;