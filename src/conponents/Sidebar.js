import React from 'react'
import { Link} from "react-router-dom";
function Sidebar() {
  return (
    <>
    <nav style={{backgroundColor:"#2F43E2",width : "15rem",minHeight:"92vh",padding:"10px"}}>
           
    <div>

           <div className=' text-center mb-3'>
          <Link className=" text-decoration-none" to='/layout/dashboard/add-product'><span className='over'> Add Product</span></Link>

           </div>
           
           <div className=' text-center'>
           <Link className=" text-decoration-none" to='/layout/dashboard/view-product'><span className='over'> View Product</span></Link>


           </div>
    </div>       
    

    </nav>
    </>
  )
}

export default Sidebar