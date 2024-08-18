
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from './pages/AboutMe';
import MyPortfolio from "./pages/MyPortfolio";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import NoPage from "./pages/NoPage";
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<AboutMe />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/myportfolio" element={<MyPortfolio />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
