import React from 'react'

function Home() {
  return (
  <>
    <div style={{ 
        backgroundImage: `url("https://www.99acres.com/microsite/articles/files/2019/07/shutterstock_1121455280.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:"630px"
      }}>
  
  </div>
  <div>
    <h3 className='text-center'>Why Us ?</h3>
<h5>"Siva Rental" is the number one online equipment renting platform which provides best quality brand new products for rent at low price with 100% customer satisifaction. We are the 1st Equipment rental website providing brand new electronic eqipments at low price. Our moto is to make people life eaiser by providing them their needs at their door steps.</h5>
  </div>
  <div>
    <hr />
 <h3  className='text-center mb-3'> Our Services</h3>
<div className=' d-flex justify-content-center'>
<div>
<h6>Equipment Rental Services</h6>
<h6>Camera rental services</h6>
<h6>Laptop rental services</h6>
<h6>Speaker rental services</h6>
<h6>Generator rental services</h6>
<h6>Fast delivery</h6>
<h6>Customer support</h6>
</div>
</div>
  </div>
  </>

  )
}

export default Home