import useFetch from "./useFetch";
import { useState } from "react";
import List from "./List";
import './Home.css';
const Home = () => {
  const [val, setVal] = useState('ShowAll')
  const { error, isPending, data: datas } = useFetch('http://localhost:8000/items');
  const click = (e) => {
    setVal(String(e.target.innerHTML));

  }
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <h1 >Loading...</h1>}
      <div className="home-buttons" >
      {datas && datas.map(data => (
           
          <button onClick={click} key={data.id} type="submit">{data.name}</button>
        
       
      ))}
      </div>
      <List val={val} data={datas} />
    </div>
  );
}

export default Home;