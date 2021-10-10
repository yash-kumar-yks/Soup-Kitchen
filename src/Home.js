import { useState } from "react";
import List from "./List";
import './Home.css';
import { useStateValue } from "./StateProvider";
const Home = () => {
  const [val, setVal] = useState('ShowAll')
const [{data}, dispatch] = useStateValue();
const datas=[];
const s=new Set();
data.map((data)=>{
  if(s.has(data.name)==false){
    s.add(data.name);
    datas.push(data);
  }
})
  const click = (e) => {
    setVal(String(e.target.innerHTML));

  }
  return (
    <div className="home">
      
      <div className="home-buttons" >
      {datas && datas.map(data => (
           
          <button onClick={click} key={data.id} type="submit">{data.name}</button>
        
       
      ))}
      </div>
      <List val={val} />
    </div>
  );
}

export default Home;