import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
import BackgrounParallex from './components/BackgrounParallex';

function App() {
  return (
    <>
    <Router>
    <NavBar />

    <BackgrounParallex />

    <Cards />
    <Cards />
    <Cards />
    <Cards />
    

    {/* This doesn't work and is unnecessary for this site because its one page, I think
    <Routes>
      <Route path='/' exact element={<Home />} />
    </Routes> 
    */}
    </Router>
    </>
  );
}

export default App
