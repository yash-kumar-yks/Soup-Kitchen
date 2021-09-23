import useFetch from "./useFetch";
import { useState } from "react";
const Home = () => {
const  [val, setval] = useState('ShowAll')
 const { error, isPending, data:datas } = useFetch('http://localhost:8000/items');
  const click=(e)=>{
    setval(e.target.innerHTML);
   
  }
  return (
    <div className="home">
    { error && <div>{ error }</div> }
    {isPending && <h1 >Loading...</h1>}
      {datas && datas.map(data => (
        <div className="blog-preview" key={data.id} >
          <button onClick={click} type="submit">{ data.name }</button>
          
        </div>
      ))}
      
    </div>
  );
}
 
export default Home;