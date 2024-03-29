import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li id={props.id} className="cards-item">
        <Link className="cards-item-link" to={props.path}>
          {" "}
          {/**  WONT BE NEEDING THE PATH?  */}
          <figure className="cards-item-pic-wrap">
            <img className="cards-item-img" src={props.src} alt={props.alt} />
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
