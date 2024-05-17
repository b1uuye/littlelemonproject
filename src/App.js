import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Specials from './Components/Specials';
import Reviews from './Components/Reviews';
import About from './Components/About';
import Footer from './Components/Footer';

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
