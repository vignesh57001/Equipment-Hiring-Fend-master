import React from "react";

function Services() {
  return (
    <>
      <div className="container">
        <div className="row mt-2 mb-2">
          <div
            className="col-lg-12"
            style={{
              backgroundImage: `url("https://www.booking-wp-plugin.com/wp-content/uploads/2020/01/Equipment-rental-services-guide.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
            }}
          ></div>
        </div>
      </div>

      <div>
        <h2 className="text-center">Our Rental Services are :-</h2>
        <h4 className="text-center">Laptop Rental Services</h4>
        <h4 className="text-center">Cameras Rental Services</h4>
        <h4 className="text-center">Light settings Rental Services</h4>
        <h4 className="text-center">Equipment and Hardwares</h4>
      </div>
    </>
  );
}

export default Services;
