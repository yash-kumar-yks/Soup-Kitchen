import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowItem from './ShowItem';
import EditItem from './EditItem';
import AddItem from './AddItem';
import Home from './Home';
import useFetch from './useFetch';

function App() {
  const data={
    "items": [
      {
        "name": "mango",
        "src": "https://cdn.pixabay.com/photo/2016/04/10/15/13/mangoes-1320111__340.jpg",
        "id": 1,
        "quantity": 2
      },
      {
        "name": "salt",
        "src": "https://static.toiimg.com/photo/68483689.cms",
        "quantity": "2",
        "id": 4
      },
      {
        "name": "banana",
        "src": "https://cdn.pixabay.com/photo/2016/09/03/20/48/bananas-1642706__340.jpg",
        "quantity": 2,
        "id": 7
      },
      {
        "name": "apple",
        "src": "https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=",
        "quantity": 3,
        "id": 8
      }
    ]
  }
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