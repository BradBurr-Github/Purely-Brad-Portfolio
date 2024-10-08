import Footer from "../components/Footer";
import Header from "../components/Header";
import { biographyOne } from "../components/utils/helpers";
import { biographyTwo } from "../components/utils/helpers";
import myPicture from "../../assets/images/Me.png";

export default function AboutMe() {

  return (
    <div>
      <div style={{height:"100vh"}}>
        <Header />
        <h1 className="pageTitle">About Me</h1>
        <div className="container">
          <div className="container-bio">
            <p className="bio-text">
              {biographyOne}
            </p>
            <img src={myPicture} alt="Picture of <Me" className="bio-image"/>
          </div>
          <p className="bio-text">{biographyTwo}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
  