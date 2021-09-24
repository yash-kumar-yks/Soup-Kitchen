import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ShowItem = () => {
  const { id } = useParams();
  const { data: data, error, isPending } = useFetch('http://localhost:8000/items/' + id);
  return (
    <div className="blog-details">
    { isPending && <div>Loading...</div> }
    { error && <div>{ error }</div> }
    { data && (
      <article>
        <h2>{ data.name }</h2>
       <img src={data.src} alt =""/>
        <div>{ data.body }</div>
      </article>
    )}
    <button type="submit"> Update Item</button>
    <button type="submit"> Delete Item</button>
  </div>

   
  );
}
 
export default ShowItem;