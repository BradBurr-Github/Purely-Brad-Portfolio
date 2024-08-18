import Header from "../components/Header";
import imageSkyCast from "../../assets/images/skyCast.png";
import noteHub from "../../assets/images/noteHub.png";
import employeePayroll from "../../assets/images/employeePayroll.png";
import personalBlog from "../../assets/images/personalBlog.png";
import taskTracker from "../../assets/images/taskTracker.png";
import profilePage from "../../assets/images/profilePage.png";

export default function MyPortfolio() {

  return (
    <>
      <Header />
      <h1 className="pageTitle">My Portfolio</h1>
      <div className="container">
        <div className="card-container">
          <article className="card-article">
            <img src={imageSkyCast} alt="SkyCast picture" className="card-image"/>
            <h2 className="hover-link-name">SkyCast project</h2>
            <a href="https://github.com/BradBurr-Github/Sky-Cast" target="_blank" className="hover-link-repo">Git Repo</a>
            <a href="https://bradburr-github.github.io/Sky-Cast/" target="_blank" className="hover-link-deploy">Deployment</a>
          </article>
        </div>
        <div className="card-container">
          <article className="card-article">
            <img src={employeePayroll} alt="Employee Payroll picture" className="card-image"/>
            <h2 className="hover-link-name">Employee project</h2>
            <a href="https://github.com/BradBurr-Github/Employee-Payroll-Tracker" target="_blank" className="hover-link-repo">Git Repo</a>
            <a href="https://bradburr-github.github.io/Employee-Payroll-Tracker/index.html" target="_blank" className="hover-link-deploy">Deployment</a>
          </article>
        </div>
        <div className="card-container">
          <article className="card-article">
            <img src={noteHub} alt="Note Hub picture" className="card-image"/>
            <h2 className="hover-link-name">NoteHub project</h2>
            <a href="https://github.com/BradBurr-Github/Note-Hub" target="_blank" className="hover-link-repo">Git Repo</a>
            <a href="https://note-hub-er36.onrender.com/" target="_blank" className="hover-link-deploy">Deployment</a>
          </article>
        </div>
        <div className="card-container">
          <article className="card-article">
            <img src={personalBlog} alt="Personal Blog picture" className="card-image"/>
            <h2 className="hover-link-name">Blog project</h2>
            <a href="https://github.com/BradBurr-Github/Brad-Personal-Blog" target="_blank" className="hover-link-repo">Git Repo</a>
            <a href="https://bradburr-github.github.io/Brad-Personal-Blog/" target="_blank" className="hover-link-deploy">Deployment</a>
          </article>
        </div>
        <div className="card-container">
          <article className="card-article">
            <img src={taskTracker} alt="Task Tracker picture" className="card-image"/>
            <h2 className="hover-link-name">Task project</h2>
            <a href="https://github.com/BradBurr-Github/Task-Board" target="_blank" className="hover-link-repo">Git Repo</a>
            <a href="https://bradburr-github.github.io/Task-Board/" target="_blank" className="hover-link-deploy">Deployment</a>
          </article>
        </div>
        <div className="card-container">
          <article className="card-article">
            <img src={profilePage} alt="Profile Page picture" className="card-image"/>
            <h2 className="hover-link-name">Profile project</h2>
            <a href="https://github.com/BradBurr-Github/BradBurr-Profile" target="_blank" className="hover-link-repo">Git Repo</a>
            <a href="https://bradburr-github.github.io/BradBurr-Profile/" target="_blank" className="hover-link-deploy">Deployment</a>
          </article>
        </div>
      </div>
    </>
  );
}