import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NoPage() {

  return (
    <div>
      <div style={{height:"100vh"}}>
      <Header />
        <h1 className="pageTitle">No Page was Found!</h1>
      </div>
      <Footer />
    </div>
  );
}