import Header from "../components/Header";
//import image from "../../assets/images"

export default function MyPortfolio() {

  return (
    <>
      <Header />
      <div class="container">
        <div class="cardContainer">
          <article class="cardArticle">
            <img src='' alt="card" className="cardImage"/>
            <div class="cardData">
              <span class="cardDesc"></span>
              <h2 href="#" class="cardButton">Github Repository</h2>

            </div>


          </article>

        </div>

        
      </div>
    </>
  );
}