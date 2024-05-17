import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
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

import pixelCap from './assets/images/pixelCap.png';

const pastEvents = {
  2023: {
    images: [
      {
        original: './DSC00138.JPG',
        thumbnail: './DSC00138.JPG',
      },
      {
        original: './DSC00172.JPG',
        thumbnail: './DSC00172.JPG',
      },
      {
        original: './DSC01442.JPG',
        thumbnail: './DSC01442.JPG',
      },
    ],
    year: '2023',
    text: "The 2023 content: I is not fat, i is fluffy spend all night ensuring people don't sleep sleep all day run at 3am and chill on the couch table yet hate dog, and reward the chosen human with a slow blink. Grass smells good haha you hold me hooman i scratch catty ipsum. Going to catch the red dot today going to catch the red dot today lick       meow at it i do a wiggle come here birdy step on your keyboard while you're gaming and then turn in a circle.",
  },
  2022: {
    images: [
      {
        original: './DSC00138.JPG',
        thumbnail: './DSC00138.JPG',
      },
      {
        original: './DSC00172.JPG',
        thumbnail: './DSC00172.JPG',
      },
      {
        original: './DSC01442.JPG',
        thumbnail: './DSC01442.JPG',
      },
    ],
    year: '2022',
    text: "The 2022 content: I is not fat, i is fluffy spend all night ensuring people don't sleep sleep all day run at 3am and chill on the couch table yet hate dog, and reward the chosen human with a slow blink. Grass smells good haha you hold me hooman i scratch catty ipsum. Going to catch the red dot today going to catch the red dot today lick       meow at it i do a wiggle come here birdy step on your keyboard while you're gaming and then turn in a circle.",
  },
  2021: {
    images: [
      {
        original: './DSC00138.JPG',
        thumbnail: './DSC00138.JPG',
      },
      {
        original: './DSC00172.JPG',
        thumbnail: './DSC00172.JPG',
      },
      {
        original: './DSC01442.JPG',
        thumbnail: './DSC01442.JPG',
      },
    ],
    year: '2021',
    text: "The 2021 content: I is not fat, i is fluffy spend all night ensuring people don't sleep sleep all day run at 3am and chill on the couch table yet hate dog, and reward the chosen human with a slow blink. Grass smells good haha you hold me hooman i scratch catty ipsum. Going to catch the red dot today going to catch the red dot today lick       meow at it i do a wiggle come here birdy step on your keyboard while you're gaming and then turn in a circle.",
  },
};

function App() {
  const [selectedYear, setSelectedYear] = useState(pastEvents['2023']);

  function selectYear(num) {
    switch (num) {
      case 2023: {
        setSelectedYear(pastEvents['2023']);
        break;
      }
      case 2022: {
        setSelectedYear(pastEvents['2022']);
        break;
      }
      default: {
        setSelectedYear(pastEvents['2021']);
      }
    }
  }
  return (
    <>
      <Router>
        <NavBar />

        <video id="bg-video">
          <source src={BgGridVideo} type="video/mp4" />
        </video>

        <section id="section-one" className="flex items-center">
          <CardHero />
        </section>

        <section id="section-two" className="flex flex-col gap-6">
          <h1 className="">Past Events</h1>
          <div className="flex gap-6">
            <div className="w-3/5">
              <CardCaroussell
                id="card-index0"
                cardDirectionCSS={'cards-item-left'}
                images={selectedYear.images}
              />
            </div>
            <CardText
              cardDirectionCSS={'cards-item-right'}
              year={selectedYear.year}
              text={selectedYear.text}
            />
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => selectYear(2023)}
              buttonStyle="btn-medium"
              buttonSize="btn--medium"
              isActive={selectedYear.year === '2023'}
            >
              2023
            </Button>
            <Button
              onClick={() => selectYear(2022)}
              buttonStyle="btn-medium"
              buttonSize="btn--medium"
              isActive={selectedYear.year === '2022'}
            >
              2022
            </Button>
            <Button
              onClick={() => selectYear(2021)}
              buttonStyle="btn-medium"
              buttonSize="btn--medium"
              isActive={selectedYear.year === '2021'}
            >
              2021
            </Button>
          </div>
        </section>

        <section id="section-three">
          {/* <h1>Organization</h1> */}
          <div className="portrait-row">
            <CardPortrait
              cardDirectionCSS={'cards-portrait-ani-row0L'}
              src={portraitFalco}
              alt={'Falco'}
              text={'Falco de Beer'}
            />

            <CardPortrait
              cardDirectionCSS={'cards-portrait-ani-row0R'}
              src={portraitMaaike}
              alt={'Maaike'}
              text={'Maaike Nijhuis'}
            />
          </div>

          <div className="portrait-row">
            <CardPortrait
              cardDirectionCSS={'cards-portrait-ani-row1L'}
              src={portraitZouhair}
              alt={'Zouhair'}
              text={'Zouhair El-Mariami'}
            />
            <CardPortrait
              cardDirectionCSS={'cards-portrait-ani-row1R'}
              src={portraitRyan}
              alt={'Ryan'}
              text={'Ryan vd Bogaard'}
            />
          </div>

          <div className="portrait-row">
            <CardPortrait
              cardDirectionCSS={'cards-portrait-ani-row2L'}
              src={portraitMartin}
              alt={'Martin'}
              text={'Martin Sabaka'}
            />
            <CardPortrait
              cardDirectionCSS={'cards-portrait-ani-row2R'}
              src={portraitNoa}
              alt={'Noa'}
              text={'Noa van Bentem'}
            />
          </div>
        </section>

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
