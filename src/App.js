import React from 'react';
import {
  BrowserRouter  as  Router,
  Switch,
  Route,
  Link,
} from  'react-router-dom';
import Header from './header.jsx';
import './header.css';
import Exo1 from './exo1.jsx';
import Exo2 from './exo2.jsx';
import Exo3 from './exo3.jsx';
import Exo4 from './exo4.jsx';
import Exo5 from './exo5.jsx';
import Exo6 from './exo6.jsx';
import Exo7 from './exo7.jsx';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App App-header">
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/Header">Header</Link></li>
              <li><Link to="/Exo1">Exo1</Link></li>
              <li><Link to="/Exo2">Exo2</Link></li>
              <li><Link to="/Exo3">Exo3</Link></li>
              <li><Link to="/Exo4">Exo4</Link></li>
              <li><Link to="/Exo5">Exo5</Link></li>
              <li><Link to="/Exo6">Exo6</Link></li>
              <li><Link to="/Exo7">Exo7</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/Header">
              <Header></Header>
            </Route>
            <Route path="/Exo1">
              <Exo1></Exo1>
            </Route>
            <Route path="/Exo2">
              <Exo2></Exo2>
            </Route>
            <Route path="/Exo3">
              <Exo3></Exo3>
            </Route>
            <Route path="/Exo4">
              <Exo4></Exo4>
            </Route>
            <Route path="/Exo5">
              <Exo5></Exo5>
            </Route>
            <Route path="/Exo6">
              <Exo6></Exo6>
            </Route>
            <Route path="/Exo7">
              <Exo7></Exo7>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
