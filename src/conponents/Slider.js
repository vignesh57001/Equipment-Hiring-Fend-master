import React from "react";

function Slider() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://thumbs.dreamstime.com/b/wooden-blocks-word-rent-house-up-arrow-concept-high-cost-apartment-home-interest-rates-rising-real-154792646.jpg"
              className="d-block w-100"
              style={{ height: "500px" }}
              alt="rent1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUD6qQvLMXz-jA1Ano1vUx1tP_X_Ij338gjw&usqp=CAU"
              className="d-block w-100"
              style={{ height: "500px" }}
              alt="rent2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://omghcontent.affino.com/AcuCustom/Sitename/DAM/142/rent-little-houses-getty-min_MainSH.jpg"
              className="d-block w-100"
              style={{ height: "500px" }}
              alt="rent3 "
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
