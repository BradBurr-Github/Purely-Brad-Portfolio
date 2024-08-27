import Header from "../components/Header";
import myResume from "../../assets/images/bradburrResume.pdf";
import Footer from "../components/Footer";

export default function Resume() {

  return (
    <div>
      <div style={{height:"100vh"}}>
        <Header />
        <h1 className="pageTitle">My Resumé</h1>
        <div className="resume-container">
          <a href={myResume} download="bradburrResume.pdf"><button className="resume-button">Download PDF</button></a>
          <p className="resume-mySkills">My Skills
            <ul className="resume-listItems">
              <li>Strong Work Ethic</li>
              <li>Life-Long Student</li>
              <li>Detail Oriented</li>
              <li>Collaborative</li>
              <li>C++</li>
              <li>C#</li>
              <li>HTML 5</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Git</li>
              <li>GraphQL</li>
              <li>Postgres</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Express Server</li>
              <li>SQL Server</li>
              <li>Node.js</li>
              <li>jQuery</li>
              <li>RESTful APIs</li>
              <li>React JS</li>
              <li>Full Stack MERN</li>
            </ul>
          </p>
        </div>
      </div>
      <Footer />
      </div>
  );
}
