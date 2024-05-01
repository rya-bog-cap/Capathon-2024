import ImageCaroussell from './ImageCaroussell';
import './cards.css';

function CardCaroussell({ id, src, alt, text, description, cardDirectionCSS }) {
  return (
    <>
      <li id={id} className={`cards-item cards-background ${cardDirectionCSS}`}>
        <div className="cards-item-link">
          {/* <figure className="cards-item-pic-wrap">
            <img className="cards-item-img" src={src} alt={alt} />
          </figure> */}

          <div className="card-caroussell">
            <ImageCaroussell />
          </div>
        </div>
      </li>
    </>
  );
}

export default CardCaroussell;
