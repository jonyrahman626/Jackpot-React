import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Game from './components/Game/Game';
import Spiner from './components/Spiner/Spiner';
import Pricing from './components/Pricing/Pricing';
import Tounament from './components/Tounament/Tounament';
import Payment from './components/Payment/Payment';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />

      <Banner />

      <Game />

      <Spiner />

      <Pricing />

      <Tounament />

      <Payment />

      <Footer />
    </div>
  );
}

export default App;
