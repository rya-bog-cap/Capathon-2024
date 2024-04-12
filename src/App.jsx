import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import ImageCaroussell from './components/ImageCaroussell';
import './App.css';
import BgGridVideo from './assets/videos/grid-loop.mp4';
import tomGif from './assets/videos/tomOutro.gif';
// import { Button } from './components/Button';
import Footer from './components/Footer';
import CardItem from './components/CardItem';

import image1 from './assets/images/img-1.jpg';
import image2 from './assets/images/img-2.jpg';
import pixelCap from './assets/images/pixelCap.png';

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <video id="bg-video">
          <source src={BgGridVideo} type="video/mp4" />
        </video>

        <section id="section-one">
          <CardItem
            id="card-hero"
            src={pixelCap}
            alt="Capathon pixel logo"
            text="Capathon 2024"
            description=""
          />
        </section>

        <section id="section-two">
          <CardItem
            id="card-index0"
            src={image1}
            alt="Some buildings"
            text="Some cool text about this awesome image"
            cardDirectionCSS={'cards-item-left'}
          />
          <CardItem
            id="card-index1"
            src={image2}
            alt="Some buildings"
            text="Some cool text about this awesome image"
            cardDirectionCSS={'cards-item-right'}
          />
        </section>

        <section id="section-three">
          <Cards id="row1" title="Row 1" />
        </section>

        <ImageCaroussell />

        <section id="section-four">
          <Footer
            title="Getting excited?"
            description="Sign up and join the adventure of building the unknown!"
          />
        </section>
      </Router>
    </>
  );
}

export default App;
