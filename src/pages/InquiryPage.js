import Navbar from "../components/NavBar";
import styled from "styled-components";

function InquiryPage(){
    const InquiryPageComponent = styled.div`
           background-color: 'black';
        
    `;
    return (
        <InquiryPageComponent>
            <Navbar />
            <h1>InquiryPage</h1>
        </InquiryPageComponent>
    );
}

export default InquiryPage;