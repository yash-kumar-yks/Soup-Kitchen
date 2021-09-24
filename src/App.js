import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowItem from './ShowItem';
function App() {
  return (
   
   <Router>
      
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Header />
            </Route>
            <Route exact path="/create">
            <Header />
            </Route>
            <Route path="/ShowItem/:id">
              <ShowItem />
            </Route>
          </Switch>
        </div>
    
    </Router>
  );
}

export default App;
