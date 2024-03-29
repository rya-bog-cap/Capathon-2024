import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BackgroundParallex from './components/BackgroundParallex';
import CardItem from './components/CardItem';
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

        {/* <BackgroundParallex /> */}

        <section id="section-one">
          <Cards id="row0" title="Row 0" />
        </section>

        <section id="section-two">
          <Cards id="row1" title="Row 1" />
        </section>

        <section id="section-three">
          <Cards />
        </section>

        <Cards />
        <ImageCaroussell />

        {/* This doesn't work and is unnecessary for this site because its one page, I think? Not sure
    <Routes>
      <Route path='/' exact element={<Home />} />
    </Routes> 
    */}
      </Router>
    </>
  );
}

export default App;
