import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import EditItem from "./EditItem";
import './ShowItem.css';
const ShowItem = ({data}) => {
  const { id } = useParams();
  const history = useHistory();
  let item=null;
  data.map((data)=>{
    if(data.id==id)
    item=data;
  })
  data=item;
  console.log(item);
  const handleDelete = () => {
    fetch('http://localhost:8000/items/' + id, {
      method: 'DELETE'
    }).then(() => {
      //dispatch method=='DELETE'
      history.push('/');
    }) 
  }
  return (
    <div className="item-details">
    {data && (
      
    
    <>
      <div className="item-property">
        <h4><span> {data.quantity}</span> Kg { data.name }</h4>
       <img src={data.src} alt =""/>
       
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