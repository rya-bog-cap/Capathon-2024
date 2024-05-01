import './cards.css';

function CardText({ id, src, alt, text, description, cardDirectionCSS }) {
  return (
    <>
      <li id={id} className={`cards-item ${cardDirectionCSS}`}>
        <div className="cards-item-link pink">
          <figure className="cards-item-pic-wrap">
            <img className="cards-item-img" src={src} alt={alt} />
          </figure>

          <div className="card-content-text">
            <h2>Capathon 2022</h2>
            <p>
              I is not fat, i is fluffy spend all night ensuring people don't sleep sleep all day
              run at 3am and chill on the couch table yet hate dog, and reward the chosen human with
              a slow blink. Grass smells good haha you hold me hooman i scratch catty ipsum. Going
              to catch the red dot today going to catch the red dot today lick master's hand at
              first then bite because im moody for i see a bird i stare at it i meow at it i do a
              wiggle come here birdy step on your keyboard while you're gaming and then turn in a
              circle.
            </p>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardText;
