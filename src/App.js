import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowItem from './ShowItem';
import AddItem from './AddItem';
import Home from './Home';
function App() {
  return (
   
   <Router>
      
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route exact path="/AddItem/:id">
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
  );
}

export default App;
