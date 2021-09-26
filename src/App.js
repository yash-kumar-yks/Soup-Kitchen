import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowItem from './ShowItem';
import EditItem from './EditItem';
import AddItem from './AddItem';
import Home from './Home';
import useFetch from './useFetch';

function App() {
  const { data, error, isPending } = useFetch('http://localhost:8000/items/');
 return (
   <div>
   {data && (
    <> 
    <Router>
      
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Header />
              <Home data={data}/>
            </Route>
            <Route exact path="/EditItem/:id">
            <Header />
            <EditItem data={data} />
            </Route>
            <Route exact path="/AddItem">
            <Header  />
            <AddItem />
            </Route>
            <Route exact path="/ShowItem/:id">
            <Header />
              <ShowItem data={data}/>
            </Route>
          </Switch>
        </div>
    
      </Router>
      </>)
    
    }
      </div>
  );
}

export default App;
