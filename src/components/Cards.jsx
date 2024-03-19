import React from 'react'
import CardItem from './CardItem'
import './cards.css'
import image1 from '../assets/images/img-1.jpg';
import image2 from '../assets/images/img-2.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h3>
        Section title? BLEH
      </h3>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem 
            src={image1}
            alt='Some buildings'
            text='Some cool text about this awesome image'
            // path={}
            />
            <CardItem 
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