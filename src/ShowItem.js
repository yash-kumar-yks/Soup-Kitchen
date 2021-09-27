import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditItem from "./EditItem";
const ShowItem = ({data}) => {
  const { id } = useParams();
  const history = useHistory();
  let item=null;
  data.map((data) => {
    
    if(data.id == id)
    item=data;
    
  });
  data=item;
  const handleClick = () => {
    fetch('http://localhost:8000/items/' + id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }
  return (
    <div className="blog-details">
    
      <article>
        <h2>{ data.name }</h2>
       <img src={data.src} alt =""/>
       
      </article>
    
    <Link to={`/EditItem/${id}`}>
    <button > Update Item</button>
  </Link>
    <button  type="submit"> Delete Item</button>
  </div>

   
  );
}
 
export default ShowItem;