import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Specials from './Components/Specials';
import Reviews from './Components/Reviews';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero/>
      <Specials/>
      <Reviews/>
    </div>
  );
}

export default App;
