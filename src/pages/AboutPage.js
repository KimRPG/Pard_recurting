// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import styled from "styled-components";

function AboutPage(){
    const AboutPageComponent = styled.div`
           background-color: 'black';
        
    `;
    return (
        <AboutPageComponent>
            <Navbar />
            <h1>AboutPage</h1>
        </AboutPageComponent>
    );
}

export default AboutPage;