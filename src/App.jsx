import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import { useState } from 'react';
import BgGridVideo from './assets/videos/grid-loop.mp4';
import tomGif from './assets/videos/tomOutro.gif';
import CardHero from './components/CardHero';
import CardCaroussell from './components/CardCaroussell';
import CardText from './components/CardText';
import CardPortrait from './components/CardPortrait';
import Footer from './components/Footer';

import portraitFalco from './assets/images/Falco.jpg';
import portraitMaaike from './assets/images/Maaike.jpeg';
import portraitZouhair from './assets/images/Zouhair.jpg';
import portraitRyan from './assets/images/Ryan0.jpg';
import portraitMartin from './assets/images/Martin.jpg';
import portraitNoa from './assets/images/Noa.jpg';
import { Button } from './components/Button';

const pastEvents = {
  2024: {
    images: [
      {
        original: '2024/01-min.jpg',
      },
      {
        original: '2024/02.jpg',
      },
      {
        original: '2024/03.jpg',
      },
      {
        original: '2024/04.jpg',
      },
      {
        original: '2024/05.JPG',
      },
      {
        original: '2024/06.jpg',
      },
      {
        original: '2024/07.jpg',
      },
      {
        original: '2024/08.jpg',
      },
      {
        original: '2024/09.jpg',
      },
      {
        original: '2024/10.jpg',
      },
      {
        original: '2024/11.jpg',
      },
      {
        original: '2024/12.jpg',
      },
      {
        original: '2024/13.jpg',
      },
      {
        original: '2024/14.jpg',
      },
      {
        original: '2024/15.jpg',
      },
      {
        original: '2024/16.jpg',
      },
      {
        original: '2024/17.jpg',
      },
      {
        original: '2024/18.jpg',
      },
    ],
    year: '2024',
    text: 'This Capathon took place on the 25th and 26th of October this year at Hotel Blijdorp-Rotterdam. The theme for this year was Space. Six teams competed against eachother. We had two fun energizers, one being a physically demanding obstacle run and the other a calming, but more inclusive game of cornhole. Team Orbit Overload Overlords: Orchestrating Orbital Operations won the audience vote with their idea of replacing the self-assessment everyone takes before joining Capgemini with a more fun and practical puzzlebox. Team Star Tech won the judges vote with an idea for an app that would gain Capgemini employees more exposure and this would help you during appraisals.',
  },
  2023: {
    images: [
      {
        original: '2023/01-min.jpg',
      },
      {
        original: '2023/02-min.jpg',
      },
      {
        original: '2023/03-min.jpg',
      },
      {
        original: '2023/04-min.jpg',
      },
      {
        original: '2023/05-min.jpg',
      },
      {
        original: '2023/06-min.jpg',
      },
      {
        original: '2023/07-min.jpg',
      },
      {
        original: '2023/08-min.jpg',
      },
      {
        original: '2023/09-min.jpg',
      },
      {
        original: '2023/10-min.jpg',
      },
      {
        original: '2023/11-min.jpg',
      },
      {
        original: '2023/12-min.jpg',
      },
    ],
    year: '2023',
    text: 'This Capathon Summer Edition took place on the 16th and 17th of June last year at the Postillon Hotel in Putten (Gelderland). The theme for this year was Health. 60 people of 8 different teams competed against one another, in the mids of the summer heat, building their winning idea. All the while enjoying fun energizers such as tug of war and classic nerf gun battles! Team NoNameYet and Team Esther won the Jury and Judges prizes respectively with their winning pitches, that being; the "Itchiguana App", which checks for potential food allergies. And the "Mirror of Doom", which analyzes your health and current mood.',
  },
  2022: {
    images: [
      {
        original: '2022/01-min.jpg',
      },
      {
        original: '2022/02-min.jpg',
      },
      {
        original: '2022/03-min.jpg',
      },
      {
        original: '2022/04-min.jpg',
      },
      {
        original: '2022/05-min.jpg',
      },
      {
        original: '2022/06-min.jpg',
      },
      {
        original: '2022/07-min.jpg',
      },
      {
        original: '2022/08-min.jpg',
      },
      {
        original: '2022/09-min.jpg',
      },
      {
        original: '2022/10-min.jpg',
      },
      {
        original: '2022/11-min.jpg',
      },
      {
        original: '2022/12-min.jpg',
      },
      {
        original: '2022/13-min.jpg',
      },
    ],
    year: '2022',
    text: 'This Capathon edition was held on 20th - 22nd of October 2022, at Hotel Zuiderduin in LOLEgmond aan Zee (Noord-Holland). This theme was all about sustainability. 80 people competed against eachother in teams of 5-8. We had fun energizers such as doing yoga, you could play bowling with your team, have nerf gun battles (although this was pretty much throughout the event) or enjoy walks on the beach with a nice autumn breeze. We had two winners! Each won the Jury and Audience votes respectively. Team Esther built a concept utilising a drone, to check upon local population levels of bees in certain fields and plots. To aid in pollination of plants and visualising healing growth in number of bees...',
  },
};

const optionalTextWhyColorOptions = ['textWhyBlue', 'textWhyPurple', 'textWhyPink'];
optionalTextWhyColorOptions.sort(() => 0.5 - Math.random());

function App() {
  const [selectedYear, setSelectedYear] = useState(pastEvents['2024']);

  function selectYear(num) {
    switch (num) {
      case 2024: {
        setSelectedYear(pastEvents['2024']);
        break;
      }
      case 2023: {
        setSelectedYear(pastEvents['2023']);
        break;
      }
      case 2022: {
        setSelectedYear(pastEvents['2022']);
        break;
      }
      default: {
        setSelectedYear(pastEvents['2024']);
      }
    }
  }
  return (
    <>
      <Router>
        <NavBar />
        <main>
          <video id="bg-video">
            <source src={BgGridVideo} type="video/mp4" />
          </video>

          <section id="section-zero" className="flex items-center">
            <CardHero />
          </section>

          <section id="section-one" className="flex flex-col">
            <h1>Why Join?</h1>
            <h2 className={optionalTextWhyColorOptions[0]}>Learning new things</h2>

            <h2 className={optionalTextWhyColorOptions[1]}>Fun</h2>

            <h2 className={optionalTextWhyColorOptions[2]}>Connecting to like-minded people</h2>
          </section>

          <section id="section-two" className="flex flex-col gap-6">
            <h1 className="">Past Events</h1>
            <div className="flex gap-6 flex-mobile-vert">
              <div className="w-3/5 mobile-w-full">
                <CardCaroussell
                  id="card-index0"
                  cardDirectionCSS={'cards-item-left'}
                  images={selectedYear.images}
                />
                <Button
                  onClick={() => selectYear(2022)}
                  buttonStyle="btn-medium"
                  buttonSize="btn--large"
                  isActive={selectedYear.year === '2022'}
                >
                  2022
                </Button>
                <Button
                  onClick={() => selectYear(2023)}
                  buttonStyle="btn-medium"
                  buttonSize="btn--large"
                  isActive={selectedYear.year === '2023'}
                >
                  2023
                </Button>
                <Button
                  onClick={() => selectYear(2024)}
                  buttonStyle="btn-medium"
                  buttonSize="btn--large"
                  isActive={selectedYear.year === '2024'}
                >
                  2024
                </Button>
              </div>
              <CardText
                cardDirectionCSS={'cards-item-right'}
                year={selectedYear.year}
                text={selectedYear.text}
              />
            </div>
          </section>

          <section id="section-three">
            <h1>Organization</h1>
            {/* max-width: 60vw; margin: auto; */}
            <article style={{ 'max-width': '60vw', margin: 'auto' }}>
              If you have any questions about the upcoming event feel free to contact anyone from
              this years organisation!
            </article>
            <div className="portrait-row">
              <CardPortrait
                cardBackground={'cards-background-pink'}
                cardDirectionCSS={'cards-portrait-ani-row0L'}
                src={portraitFalco}
                alt={'Falco'}
                text={'Falco de Beer'}
              />

              <CardPortrait
                cardBackground={'cards-background-pink'}
                cardDirectionCSS={'cards-portrait-ani-row0R'}
                src={portraitMaaike}
                alt={'Maaike'}
                text={'Maaike Nijhuis'}
              />
            </div>

            <div className="portrait-row">
              <CardPortrait
                cardBackground={'cards-background-purple'}
                cardDirectionCSS={'cards-portrait-ani-row1L'}
                src={portraitZouhair}
                alt={'Zouhair'}
                text={'Zouhair El-Mariami'}
              />
              <CardPortrait
                cardBackground={'cards-background-purple'}
                cardDirectionCSS={'cards-portrait-ani-row1R'}
                src={portraitRyan}
                alt={'Ryan'}
                text={'Ryan vd Bogaard'}
              />
            </div>

            <div className="portrait-row">
              <CardPortrait
                cardBackground={'cards-background-blue'}
                cardDirectionCSS={'cards-portrait-ani-row2L'}
                src={portraitMartin}
                alt={'Martin'}
                text={'Martin Sabaka'}
              />
              <CardPortrait
                cardBackground={'cards-background-blue'}
                cardDirectionCSS={'cards-portrait-ani-row2R'}
                src={portraitNoa}
                alt={'Noa'}
                text={'Noa van Bentem'}
              />
            </div>
          </section>
        </main>
        <section id="section-four">
          <Footer
            title="Getting excited?"
            description="Sign up and join the adventure of building the unknown!"
            link={
              'https://docs.google.com/forms/d/e/1FAIpQLSeCpjksUmyXMKOFK9TZo3Sq4y_LxkAV5XzUKFrY_USzyTXLbg/viewform?usp=sf_link'
            }
          />
        </section>
      </Router>
    </>
  );
}

export default App;
