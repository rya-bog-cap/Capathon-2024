import './cards.css';

function CardText({ id, src, alt, text, year, description, cardDirectionCSS }) {
  return (
    <>
      <li id={id} className={`cards-item ${cardDirectionCSS}`}>
        <div className="cards-item-link pink">
          <figure className="cards-item-pic-wrap">
            <img className="cards-item-img" src={src} alt={alt} />
          </figure>

          <div className="card-content-text">
            <h2>Capathon {year}</h2>
            <p>{text}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardText;