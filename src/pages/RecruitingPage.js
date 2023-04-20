import Navbar from "../components/NavBar";
import styled from "styled-components";

function RecruitingPage(){
    const RecruitingPageComponent = styled.div`
           background-color: 'black';
        
    `;
    return (
        <RecruitingPageComponent>
            <Navbar />
            <h1>RecruitingPage</h1>
        </RecruitingPageComponent>
    );
}

export default RecruitingPage;