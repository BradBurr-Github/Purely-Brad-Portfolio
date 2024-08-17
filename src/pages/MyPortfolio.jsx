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
            <a href="#" className="hover-link-repo">Git Repo</a>
            <a href="#" className="hover-link-deploy">Deployment</a>
          </article>
        </div>
        <div className="card-container">
          <article className="card-article">
            <img src={employeePayroll} alt="Employee Payroll picture" className="card-image"/>
            <a href="#" className="hover-link-repo">Git Repo</a>
            <a href="#" className="hover-link-deploy">Deployment</a>
          </article>
        </div>
        <div className="card-container">
          <article className="card-article">
            <img src={noteHub} alt="Note Hub picture" className="card-image"/>
            <a href="#" className="hover-link-repo">Git Repo</a>
            <a href="#" className="hover-link-deploy">Deployment</a>
          </article>
        </div>
        <div className="card-container">
          <article className="card-article">
            <img src={personalBlog} alt="Personal Blog picture" className="card-image"/>
            <a href="#" className="hover-link-repo">Git Repo</a>
            <a href="#" className="hover-link-deploy">Deployment</a>
          </article>
        </div>
        <div className="card-container">
          <article className="card-article">
            <img src={taskTracker} alt="Task Tracker picture" className="card-image"/>
            <a href="#" className="hover-link-repo">Git Repo</a>
            <a href="#" className="hover-link-deploy">Deployment</a>
          </article>
        </div>
        <div className="card-container">
          <article className="card-article">
            <img src={profilePage} alt="Profile Page picture" className="card-image"/>
            <a href="#" className="hover-link-repo">Git Repo</a>
            <a href="#" className="hover-link-deploy">Deployment</a>
          </article>
        </div>
      </div>
    </>
  );
}