import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import ImageCaroussell from './components/ImageCaroussell';
import './App.css';
import BgGridVideo from './assets/videos/grid-loop.mp4';
import tomGif from './assets/videos/tomOutro.gif';
import { Button } from './components/Button';
import Footer from './components/Footer';


function App() {
  

  return (
    <>
      <Router>
        <NavBar />

        <video id="bg-video">
          <source src={BgGridVideo} type="video/mp4" />
        </video>

        

        <section id="section-one">
          
        </section>

        <section id="section-two">
          <Cards id="row0" title="Row 0" />
        </section>

        <section id="section-three">
        <Cards id="row1" title="Row 1"/>
        </section>

        <ImageCaroussell />

        <section id="section-four">
          <Footer />
          
        </section>

        

      </Router>
    </>
  );
}

export default App;
