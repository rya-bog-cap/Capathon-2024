import './cards.css';

// const STYLES = ['card--hero', 'card--caroussell', 'card--portrait'];

function CardPortrait({ id, src, alt, text, description, cardDirectionCSS }) {
  // const checkCardStyle = STYLES.includes(cardStyle) ? cardStyle : STYLES[0];

  return (
    <>
      <li id={id} className={`cards-item cards-background cards-portrait-size ${cardDirectionCSS}`}>
        <div className="cards-portrait-content-wrapper">
          <figure className="cards-portrait-pic-wrap">
            <img className="cards-portrait-img" src={src} alt={alt} />
          </figure>
          <div className="cards-portrait-text">
            <h2>{text}</h2>
            <p>{description}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardPortrait;
