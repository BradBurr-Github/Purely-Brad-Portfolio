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
      </div>
      <Footer />
    </div>
  );
}
