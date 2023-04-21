import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import InquiryPage from './pages/InquiryPage';
import ProjectPage from './pages/ProjectPage';
import RecruitingPage from './pages/RecruitingPage';

function App() {
    return <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Inquiry" element={<InquiryPage />} />
            <Route path="/Recruting" element={<RecruitingPage />} />
            <Route path='/Project' element={<ProjectPage />} />
        </Routes>
};

export default App;

