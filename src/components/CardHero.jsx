import './cards.css';
import { Button } from './Button';
import React from 'react';
import { useState } from 'react';

function CardHero({ id, src, alt, text, description, cardDirectionCSS, link }) {
  
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [canEnter, setCanEnter] = React.useState(true)

  // Set the date we're counting down to
  //let countDownDate = new Date(1729846800000  - new Date(1729846800000).getTimezoneOffset() * 60 * 1000).getTime();
  let countDownDate = new Date(1725992160000  - new Date(1725992160000).getTimezoneOffset() * 60 * 1000).getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    //document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    setTimeLeft({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    })

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      setCanEnter(false);
    }
  }, 1000);


  return (
    <>
      <li id={id} className={`cards-item cards-background-blue ${cardDirectionCSS}`}>
        <div className="cards-item-link card-hero-spacing">
          <table className="capthon-details-table">
            <tr>
              <td><h2>Theme</h2></td>
              <td><p>To be revealed</p></td>
            </tr>
            <tr>
              <td><h2>Date</h2></td>
              <td><p>25-26 October 2024</p></td>
            </tr>
            <tr>
              <td><h2>Location</h2></td>
              <td><p>Van der Valk hotel Blijdorp (Rotterdam)</p></td>
            </tr>
          </table>

          {
            canEnter?
              <div>
                <div className="timer">
                  Event starts in
                  <span className="timer-column">
                    <span>{timeLeft.days}</span>
                    <span>days</span>
                  </span>
                  <span className="timer-column">
                    <span>{timeLeft.hours}</span>
                    <span>hours</span>
                  </span>
                  <span className="timer-column">
                    <span>{timeLeft.minutes}</span>
                    <span>minutes</span>
                  </span>
                  <span className="timer-column">
                    <span>{timeLeft.seconds}</span>
                    <span>seconds</span>
                  </span>
                </div>
                <Button
                  // onClick={handleClick}
                  to={link}
                  buttonStyle="btn--primary"
                  buttonSize="btn--large"
                  elemStyle={{ 'font-size': '2.5rem' }}
                >
                  Sign Up
                </Button>
              </div>
            :
              <div>The event has started already, see you next year!</div>
          }
          {/* <figure className="cards-item-pic-wrap">
            <img className="cards-item-img" src={src} alt={alt} />
          </figure> */}
          
          {/* <ul className="card-titles">
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
              <p>25-26 October 2024</p>
            </li>
            <li>
              <p>Van der Valk hotel Blijdorp (Rotterdam)</p>
            </li>
          </ul> */}
        </div>
      </li>
    </>
  );
}

export default CardHero;
