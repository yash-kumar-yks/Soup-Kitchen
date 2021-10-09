import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditItem from "./EditItem";
import './ShowItem.css';
import { useStateValue } from './StateProvider';

const ShowItem = () => {
  const { id } = useParams();
  const history = useHistory();
  const [{data}, dispatch] = useStateValue();
 
  let item=null;
  data.map((data)=>{
    if(data.id==id)
    item=data;
  })
  
    const handleDelete = () => {
    dispatch({
      type: "DELETE",
      id: id,

  })
  history.push('/');
}
  return (

  
    <div className="item-details">
    {item && (
      
    
      <>
      <div className="item-property">
        <h4><span> {item.quantity}</span> Kg { item.name }</h4>
       <img src={item.src} alt =""/>
       
      </div>
    <div className="text">
    <Link to={`/EditItem/${id}`}>
    <button > Update Item</button>
  </Link>
    <button onClick={handleDelete} type="submit"> Delete Item</button>
    </div>
    </>
    )}
    </div>
   
  );
}
 
export default ShowItem;