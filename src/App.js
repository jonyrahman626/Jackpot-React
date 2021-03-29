import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Game from './components/Game/Game';

function App() {
  return (
    <div className="App">
      <Header />

      <Banner />

      <Game />
    </div>
  );
}

export default App;
