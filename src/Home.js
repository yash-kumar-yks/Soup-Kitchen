import { useState } from "react";
import List from "./List";
import './Home.css';
import { useStateValue } from "./StateProvider";
const Home = () => {
  const [val, setVal] = useState('ShowAll')
const [{data}, dispatch] = useStateValue();

  const click = (e) => {
    setVal(String(e.target.innerHTML));

  }
  return (
    <div className="home">
      
      <div className="home-buttons" >
      {data && data.map(data => (
           
          <button onClick={click} key={data.id} type="submit">{data.name}</button>
        
       
      ))}
      </div>
      <List val={val} data={data} />
    </div>
  );
}

export default Home;