import Navbar from "../components/NavBar";
import styled from "styled-components";
import HomeVideo from "../components/HomePage/HomeVideo";
import HomePart from "../components/HomePage/HomePart";
import HomeProgram from "../components/HomePage/HomeProgram";
import HomePartner from "../components/HomePage/HomePartner";
import HomeLast from "../components/HomePage/HomeLast";
import HomeMentor from "../components/HomePage/HomeMentor";


function HomePage(){
    const HomePageComponent = styled.div`
           background-color: 'black';
    `;
    
    return (
        <HomePageComponent>
            <Navbar />
            <HomeVideo/>
            <HomePart />  
            <HomeProgram/>
            <HomeMentor/>
            <HomePartner/>
            <HomeLast/>
        </HomePageComponent>
    );
}

export default HomePage;