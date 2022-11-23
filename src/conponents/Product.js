import React, { useContext, useState } from "react";
import Slider from "./Slider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "./contect";

function Product() {
  let context = useContext(UserContext);
  const { cart, setCart, data, setTotal, total } = context;
  let [fil, setFil] = useState([...data]);
  let [query, setQuery] = useState("");

  if (!data) {
    toast.warn("your Token is Expried, Plz Login again");
  }

  const handleSubmit = (item) => {
    let carts = [...cart];
    carts.push(item);
    setCart(carts);
    setTotal(Number(total) + Number(item.price));
  };

  let val = ["camera", "speaker", "light", "other"];

  const handlesubmit = (v) => {
    let value = data.filter((item) => item.type === v);

    setFil(value);
  };
  const search = () => {
    let value = data.filter((item) => item.type.toLowerCase().includes(query));
    setFil(value);
  };
  return (
    <>
      <Slider />

      <div className=" d-flex justify-content-center">
        <div className=" mt-3">
          <div class="d-flex">
            <input
              class="form-control me-2 shadow-none"
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              class="btn btn-outline-success shadow-none"
              type="button"
              onClick={search}
            >
              Search
            </button>
          </div>
          <label htmlFor="validationCustom04" className="form-label">
            Filter products
          </label>
          <select
            className="form-select"
            id="validationCustom04"
            onChange={(e) => handlesubmit(e.target.value)}
          >
            {/* <option selected value="all" onClick={
                ()=> setFil([...data])
              }>All</option> */}
            {val.map((item, i) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="d">
        {fil
          ? fil.map((item, i) => {
              return (
                <div
                  className="card"
                  style={{ width: "18rem", padding: "10px", margin: "10px" }}
                  key={i}
                >
                  <img
                    src={item.productUrl}
                    className="card-img-top"
                    alt={item.productName}
                    style={{ height: "18rem" }}
                  />
                  <div className="card-body ">
                    <h5 className="card-title">{item.productName}</h5>

                    <div className="d-flex justify-content-center align-items-center">
                      <div>
                        <p className="card-text">{`Price : ${item.price}`}</p>
                        <p className="card-text">{`Quantity : ${item.quantity}`}</p>

                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => handleSubmit(item)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
        <ToastContainer />
      </div>
    </>
  );
}

export default Product;
