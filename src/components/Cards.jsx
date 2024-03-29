import React, { Children } from 'react'
import CardItem from './CardItem'
import './cards.css'
import image1 from '../assets/images/img-1.jpg';
import image2 from '../assets/images/img-2.jpg';

function Cards(props) {
  return (
    <div id={props.id} className='cards'>
      <h3>
        {props.title}
      </h3>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              id='card-index0'
              src={image1}
              alt='Some buildings'
              text='Some cool text about this awesome image'
              // path={}
            />
            <CardItem
              id='card-index1'
              src={image2}
              alt='Some buildings'
              text='Some cool text about this awesome image'
              // path={}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards