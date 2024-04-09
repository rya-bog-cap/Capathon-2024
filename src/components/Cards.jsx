import CardItem from "./CardItem";
import "./cards.css";
import image1 from "../assets/images/img-1.jpg";
import image2 from "../assets/images/img-2.jpg";

function Cards({id, title}) {
  return (
    <div id={id} className="cards">
      <h3>{title}</h3>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              id="card-index0"
              src={image1}
              alt="Some buildings"
              text="Some cool text about this awesome image"
            />
            <CardItem
              id="card-index1"
              src={image2}
              alt="Some buildings"
              text="Some cool text about this awesome image"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
