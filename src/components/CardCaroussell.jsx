import ImageCaroussell from './ImageCaroussell';
import './cards.css';

function CardCaroussell({ id, src, alt, text, description, cardDirectionCSS, images }) {
  return (
    <>
      <li id={id} className={`cards-item cards-background ${cardDirectionCSS}`}>
        <div className="cards-item-link">
          {/* <figure className="cards-item-pic-wrap">
            <img className="cards-item-img" src={src} alt={alt} />
          </figure> */}

          <div className="card-caroussell cards-background-pink">
            <ImageCaroussell images={images} />
          </div>
        </div>
      </li>
    </>
  );
}

export default CardCaroussell;
