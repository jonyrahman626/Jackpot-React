import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './Pages/Index';
import About from './Pages/About';
import Promotion from './Pages/Promotion';
import Game from './Pages/Game';
import Membership from './Pages/Membership';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Singup from './Pages/Signup';
import Login from './Pages/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/promotion" component={Promotion}/>
          <Route exact path="/games" component={Game}/>
          <Route exact path="/membership" component={Membership}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/error" component={Error}/>
          <Route exact path="/singup" component={Singup}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
