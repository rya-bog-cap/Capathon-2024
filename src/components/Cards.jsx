import CardItem from './CardPortrait';
import './cards.css';
import image1 from '../assets/images/img-1.jpg';
import image2 from '../assets/images/img-2.jpg';

function Cards({ id, title }) {
  return (
    <div id={id} className="cards">
      <h1>{title}</h1>

      <ul className="cards-items">
        <CardItem
          id="card-index0"
          src={image1}
          alt="Some buildings"
          text="Some cool text about this awesome image"
          // description={}
          cardDirectionCSS={'cards-item-left'}
        />
        <CardItem
          id="card-index1"
          src={image2}
          alt="Some buildings"
          text="Some cool text about this awesome image"
          cardDirectionCSS={'cards-item-right'}
        />
      </ul>
    </div>
  );
}

export default Cards;
