import React from 'react';
import { Link } from 'react-router-dom';
import ShowItem from './ShowItem';
import './List.css';
import { useStateValue } from './StateProvider';
function List({ val }) {
    const [{ data }, dispatch] = useStateValue();
    if (val == "ShowAll") {
        return (
            <div className="list" >

                {data && data.map((datas) => (


                    <div key={datas.id}>

                        <img src={datas.src} alt="" />
                        <div className="text-info">
                            <p> <span> {datas.quantity}</span> kg {datas.name} </p>
                            <Link className='text-link' to={`/ShowItem/${datas.id}`}>
                                <button type="submit">More...</button>
                            </Link>
                        </div>
                    </div>
                )

                )
                }


            </div>
        );
    }
    else {
        return (
            <div className="list" >

                {data && data.map((datas) => {

                    if (datas.name == val) {
                        return (

                            <div key={datas.id}>

                                <img src={datas.src} alt="" />
                                <div className="text-info">
                                    <p> <span> {datas.quantity}</span> kg {datas.name} </p>
                                    <Link className='text-link' to={`/ShowItem/${datas.id}`}>
                                        <button type="submit">More...</button>
                                    </Link>
                                </div>

                            </div>)
                    }
                }

                )
                }


            </div>
        );
    }
}

export default List