import { Link } from "react-router-dom";

function CardItem({id, path, src, alt, text}) {
  return (
    <>
      <li id={id} className="cards-item">
        <Link className="cards-item-link" to={path}>
          <figure className="cards-item-pic-wrap">
            <img className="cards-item-img" src={src} alt={alt} />
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
