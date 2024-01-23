import * as React from 'react';
import HomePageImg from "./HomePageImg";
import PortalGoalsSection from "./PortalGoalsSection";
import FacultyTipsSection from "./FacultyTipsSection";
import StudentTermsSection from "./StudentTermsSection";
import FacultiesPage from "./FacultiesPage";


function HomePage() {

    return (
        <div>
            <HomePageImg/>
            <PortalGoalsSection/>
            <FacultyTipsSection/>
            <StudentTermsSection/>
            {/*<FacultiesPage/>*/}
        </div>
    )
        ;
}

export default HomePage;