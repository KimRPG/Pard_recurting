// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import styled from "styled-components";

function HomePage(){
    const HomePageComponent = styled.div`
           background-color: 'black';
        
    `;
    return (
        <HomePageComponent>
            <Navbar />
            <h1>HomePage</h1>
        </HomePageComponent>
    );
}

export default HomePage;