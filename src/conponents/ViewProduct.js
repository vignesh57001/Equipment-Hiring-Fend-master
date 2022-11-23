import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from './contect';

function ViewProduct() {
  let navigate = useNavigate();
  let context = useContext(UserContext);
  const { data, deleteData } = context;


  return (
    <>
      <div className='d'>
        {
          data ? data.map((item, i) => {

            return <div className="card" style={{ width: "18rem", padding: "10px", margin: "10px" }} key={i}>
              <img src={item.productUrl} className="card-img-top" alt={item.productName} style={{ height: "18rem" }} />
              <div className="card-body">
                <h5 className="card-title">{item.productName}</h5>
                <p className="card-text">{`Price : ${item.price}`}</p>
                <p className="card-text">{`Quantity : ${item.quantity}`}</p>
                <p className="card-text">{`type : ${item.type}`}</p>
                <button type="button" className="btn btn-success me-2" onClick={() => { navigate(`/layout/dashboard/edit-product/${item._id}`); }} >Edit</button>
                <button type="button" className="btn btn-danger" onClick={async () => { deleteData(item._id) }}>Delete</button>
              </div>
            </div>

          }) : null
        }
        <ToastContainer />
      </div>

    </>
  )
}

export default ViewProduct