import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowItem from './ShowItem';
import EditItem from './EditItem';
import AddItem from './AddItem';
import Home from './Home';
function App() {

  return (
    <div>
      <Router>

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route exact path="/EditItem/:id">
              <Header />
              <EditItem />
            </Route>
            <Route exact path="/AddItem">
              <Header />
              <AddItem />
            </Route>
            <Route exact path="/ShowItem/:id">
              <Header />
              <ShowItem />
            </Route>
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;