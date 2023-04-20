import Navbar from "../components/NavBar";
import styled from "styled-components";

function ProjectPage(){
    const ProjectPageComponent = styled.div`
           background-color: 'black';
        
    `;
    return (
        <ProjectPageComponent>
            <Navbar />
            <h1>ProjectPage</h1>
        </ProjectPageComponent>
    );
}

export default ProjectPage;