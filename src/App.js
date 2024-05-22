import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Specials from './Components/Specials/Specials';
import Reviews from './Components/Reviews/Reviews';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Reserve from './Components/Reserve/Reserve';
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {


  return (
    <div className='App'>
      <Header />
      <Hero/>
      <Specials/>
      <Reviews/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
