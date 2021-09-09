import './App.css';
import NavBar from './components/navbar/NavBar';
import 'semantic-ui-css/semantic.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import MyLocation from './components/myLocation/MyLocation';
import Explore from './components/explore/Explore';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/myLocation">
            <MyLocation />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route exact path="/" render={() => (<Redirect to="/myLocation" />)} />
          <Route exact path="/*" render={() => (<Redirect to="/myLocation" />)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
