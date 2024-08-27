import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactMe() {

  return (
    <div>
      <div style={{height:"100vh"}}>
        <Header />
        <h1 className="pageTitle">Contact Me</h1>
        <Contact />
        <div style={{textAlign:"center"}}>
          If you have any questions about this Project or my Repository, I can be reached at <a href="mailto:brad@bradburr.com">brad@bradburr.com</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
