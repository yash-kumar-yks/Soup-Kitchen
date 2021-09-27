import useFetch from "./useFetch";
import { useState } from "react";
import List from "./List";
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
      {datas && datas.map(data => (
        <div className="blog-preview" key={data.id} >
          <button onClick={click} type="submit">{data.name}</button>
        
        </div>
      ))}
      <List val={val} data={datas} />
    </div>
  );
}

export default Home;