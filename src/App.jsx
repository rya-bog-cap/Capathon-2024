import { BrowserRouter as Router} from 'react-router-dom';
import { useInView, InView } from "react-intersection-observer";
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import ImageCaroussell from './components/ImageCaroussell';
import './App.css';
import BgGridVideo from './assets/videos/grid-loop.mp4';

function App() {
  

  return (
    <>
      <Router>
        <NavBar />

        <video id="bg-video">
          <source src={BgGridVideo} type="video/mp4" />
        </video>



        <section id="section-one">
          <Cards id="row0" title="Row 0" />
        </section>

        <section id="section-two">
          <Cards id="row1" title="Row 1"/>
        </section>

        <section id="section-three">
          <Cards />
        </section>

        <ImageCaroussell />

      </Router>
    </>
  );
}

export default App;
