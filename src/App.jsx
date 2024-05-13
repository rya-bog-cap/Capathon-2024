import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import './App.css';
import BgGridVideo from './assets/videos/grid-loop.mp4';
import tomGif from './assets/videos/tomOutro.gif';
import CardHero from './components/CardHero';
import CardCaroussell from './components/CardCaroussell';
import CardText from './components/CardText';
import CardPortrait from './components/CardPortrait';
import Footer from './components/Footer';

import portraitFalco from './assets/images/Falco.jpg';
import portraitMaaike from './assets/images/Maaike.jpg';
import portraitZouhair from './assets/images/Zouhair.jpg';
import portraitRyan from './assets/images/Ryan0.jpg';
import portraitMartin from './assets/images/Martin.jpg';
import portraitNoa from './assets/images/Noa.jpg';
import { Button } from './components/Button';

import pixelCap from './assets/images/pixelCap.png';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <main>
          <video id="bg-video">
            <source src={BgGridVideo} type="video/mp4" />
          </video>

          <section id="section-one" className="flex items-center">
            <CardHero />
          </section>

          <section id="section-two" className="flex flex-col gap-6">
            <h1>Past Events</h1>
            <div className="flex gap-6">
              <div className="w-3/5">
                <CardCaroussell id="card-index0" cardDirectionCSS={'cards-item-left'} />
              </div>
              <CardText cardDirectionCSS={'cards-item-right'} />
            </div>
            <div className="flex gap-2">
              <Button buttonStyle="btn-medium" buttonSize="btn--medium" isActive>
                2023
              </Button>
              <Button buttonStyle="btn-medium" buttonSize="btn--medium">
                2022
              </Button>
              <Button buttonStyle="btn-medium" buttonSize="btn--medium">
                2021
              </Button>
            </div>
          </section>

          <section id="section-three">
            <h1>Organization</h1>
            <div className="portrait-row">
              <CardPortrait
                cardDirectionCSS={'cards-item-left'}
                src={portraitFalco}
                alt={'Falco'}
                text={'Falco de Beer'}
              />
              <CardPortrait
                cardDirectionCSS={'cards-item-right'}
                src={portraitMaaike}
                alt={'Maaike'}
                text={'Maaike Nijhuis'}
              />
            </div>

            <div className="portrait-row">
              <CardPortrait
                cardDirectionCSS={'cards-item-left'}
                src={portraitZouhair}
                alt={'Zouhair'}
                text={'Zouhair El-Mariami'}
              />
              <CardPortrait
                cardDirectionCSS={'cards-item-right'}
                src={portraitRyan}
                alt={'Ryan'}
                text={'Ryan vd Bogaard'}
              />
            </div>

            <div className="portrait-row">
              <CardPortrait
                cardDirectionCSS={'cards-item-left'}
                src={portraitMartin}
                alt={'Martin'}
                text={'Martin Sabaka'}
              />
              <CardPortrait
                cardDirectionCSS={'cards-item-right'}
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
        </main>
      </Router>
    </>
  );
}

export default App;
