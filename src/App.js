import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Payment from './components/Payment/Payment';
import Footer from './components/Footer/Footer';
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
        <Header />
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/promotion" component={Promotion}/>
          <Route exact path="/games" component={Game}/>
          <Route exact path="/membership" component={Membership}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/singup" component={Singup}/>
          <Route exact path="/login" component={Login}/>
          <Route component={Error}/>
        </Switch>
        <Payment />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
