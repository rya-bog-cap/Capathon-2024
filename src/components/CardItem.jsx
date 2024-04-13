import { Link } from 'react-router-dom';
import './cardItems.css';

function CardItem({ id, path, src, alt, text, description, cardDirectionCSS }) {
  return (
    <>
      <li id={id} className={`cards-item ${cardDirectionCSS}`}>
        <Link className="cards-item-link" to={path}>
          <figure className="cards-item-pic-wrap">
            <img className="cards-item-img" src={src} alt={alt} />
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{text}</h5>
            <p>{description}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
