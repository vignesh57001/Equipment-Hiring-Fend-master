import React from 'react'

function Slider() {
  return (
    <>
    
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.propertyreporter.co.uk/images/660x350/rent_up_551-13717.jpg" className="d-block w-100" style={{height:"500px"}} alt="rent1"/>
    </div>
    <div className="carousel-item">
      <img src="https://3dapartment.com/blog/wp-content/uploads/2021/03/high-rent-boston.jpeg" className="d-block w-100" style={{height:"500px"}} alt="rent2"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.livemint.com/img/2022/04/19/1600x900/Tenancy_1563283191321_1650352689091.jpg" className="d-block w-100" style={{height:"500px"}} alt="rent3 "/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></>
  )
}

export default Slider