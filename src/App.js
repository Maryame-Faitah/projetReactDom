import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Exo1 from './exo1.jsx';
import './exo1.css';
import Exo2 from './exo2.jsx';
import Exo3 from './exo3.jsx';
import Exo4 from './exo4.jsx';
import './exo4.css';
import Exo5 from './exo5.jsx';
import Exo6 from './exo6.jsx';
import Exo7 from './exo7.jsx';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div className="bg-light">
            <p className="titre p-2 text-center">Javascript DOM</p>
          </div>
          <nav>
            <ul className="nav nav-pills justify-content-center">
              <div className="li">
              <li><Link to="/Exo1" className="text-light text-decoration-none">Exercice 1</Link></li>
              </div>
              <div className="li">
              <li><Link to="/Exo2" className="text-light text-decoration-none">Exercice 2</Link></li>
              </div>
              <div className="li">
              <li><Link to="/Exo3" className="text-light text-decoration-none">Exercice 3</Link></li>
              </div>
              <div className="li">
              <li><Link to="/Exo4" className="text-light text-decoration-none">Exercice 4</Link></li>
              </div>
              <div className="li">
              <li><Link to="/Exo5" className="text-light text-decoration-none">Exercice 5</Link></li>
              </div>
              <div className="li">
              <li><Link to="/Exo6" className="text-light text-decoration-none">Exercice 6</Link></li>
              </div>
              <div className="li">
              <li><Link to="/Exo7" className="text-light text-decoration-none">Exercice 7</Link></li>
              </div>
            </ul>
          </nav>
          <Switch>
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
