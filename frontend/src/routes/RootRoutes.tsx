import * as React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {paths} from "../constants/urlConstants";
import HomePage from "../components/HomePage";
import FacultiesPage from "../components/FacultiesPage";
import {Box, CssBaseline} from "@mui/material";
import TopBar from "../TopBar";
import FacultyDetails from "../components/FacultyDetails";

function RootRoutes() {

    return (
        <Box>
            <CssBaseline/>
            <TopBar/>
            <Routes>
                <Route path={'/'} element={<Navigate to={paths.HOME}/>}/>
                <Route path={paths.HOME} element={<HomePage/>}/>
                <Route path={paths.FACULTIES} element={<FacultiesPage/>}/>
                <Route path={paths.DETAILS} element={<FacultyDetails/>}/>
            </Routes>
        </Box>
    );
}

export default RootRoutes;