import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditItem from "./EditItem";
import useFetch from "./useFetch";
const ShowItem = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, error, isPending } = useFetch('http://localhost:8000/items/'+id);
  const handleClick = () => {
    fetch('http://localhost:8000/items/' + id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }
  return (
    <div className="blog-details">
    {data && (
      
    
    <>
      <article>
        <h2>{ data.name }</h2>
       <img src={data.src} alt =""/>
       
      </article>
    
    <Link to={`/EditItem/${id}`}>
    <button > Update Item</button>
  </Link>
    <button onClick={handleClick} type="submit"> Delete Item</button>
  </>
    )}
    </div>
  );
}
 
export default ShowItem;