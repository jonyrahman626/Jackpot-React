import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './Pages/Index';
import About from './Pages/About';
import Promotion from './Pages/Promotion';
import Game from './Pages/Game';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/promotion" component={Promotion}/>
          <Route exact path="/games" component={Game}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
