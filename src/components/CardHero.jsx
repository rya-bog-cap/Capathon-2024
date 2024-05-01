import './cards.css';

function CardHero({ id, src, alt, text, description, cardDirectionCSS }) {
  return (
    <>
      <li id={id} className={`cards-item cards-background ${cardDirectionCSS}`}>
        <div className="cards-item-link">
          {/* <figure className="cards-item-pic-wrap">
            <img className="cards-item-img" src={src} alt={alt} />
          </figure> */}

          <ul className="card-titles">
            <li>
              <h2>Theme</h2>
            </li>
            <li>
              <h2>Date</h2>
            </li>
            <li>
              <h2>Location</h2>
            </li>
          </ul>

          <div className="card-line"></div>
          <ul className="card-description">
            <li>
              <p>To be revealed</p>
            </li>
            <li>
              <p>25-26 09.2024</p>
            </li>
            <li>
              <p>Van der Valk hotel Blijdorp</p>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
}

export default CardHero;
