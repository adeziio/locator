import './App.css';
import NavBar from './components/navbar/NavBar';
import 'semantic-ui-css/semantic.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import MyLocation from './components/myLocation/GoogleMap';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/myLocation">
            <MyLocation />
          </Route>
          <Route exact path="/" render={() => (<Redirect to="/myLocation" />)} />
          <Route exact path="/*" render={() => (<Redirect to="/myLocation" />)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
