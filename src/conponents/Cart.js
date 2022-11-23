import { useFormik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./contect";

function Cart() {
  let navigate = useNavigate();
  let context = useContext(UserContext);
  const { cart, setCart, total, setTotal, setFinalpay } = context;

  const formik = useFormik({
    initialValues: {
      startDate: "",
      endDate: "",
      CompanyName: "",
      customerName: "",
      mobileNumber: "",
      Address: "",
      city: "",
      State: "",
    },
    validate: (values) => {
      const errors = {};

      if (values.startDate.length === 0) {
        errors.startDate = "starting date is required";
      }
      if (values.endDate.length === 0) {
        errors.endDate = "Ending date is required";
      }
      if (values.CompanyName.length === 0) {
        errors.CompanyName = "Company Name Required";
      }
      if (values.customerName.length === 0) {
        errors.customerName = "Customer is Required";
      }
      if (values.mobileNumber.length === 0) {
        errors.mobileNumber = "Mobile Number is Required";
      }
      if (values.Address.length === 0) {
        errors.Address = "Address is Required";
      }
      if (values.city.length === 0) {
        errors.city = " City is Required";
      }
      if (values.State.length === 0) {
        errors.State = "State is Required";
      }
      if (total === 0) {
        errors.total = "Add minimum one Quantity";
      }

      return errors;
    },

    onSubmit: async (values) => {
      values.cartItems = cart;
      values.totalAmount = total;
      setFinalpay(values);
      navigate(`/layout/razorpay/${total}`);
    },
  });

  const deletes = (item) => {
    let index = cart.findIndex((item) => item._id === item._id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(Number(total) - Number(item.price));
  };
  return (
    <div className="container-fluid">
      <form
        onSubmit={(values) => {
          formik.handleSubmit(values);
        }}
      >
        <div className="row">
          <div className=" col-lg-7">
            <div className="row">
              <h2>Rental Date</h2>
              <div className="col-md-6 mt-1">
                <h5>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Start Date
                  </label>
                </h5>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={formik.values.startDate}
                  onChange={formik.handleChange}
                  name="startDate"
                />
                <div style={{ color: "red", textAlign: "end" }}>
                  {" "}
                  {formik.errors.startDate}
                </div>
              </div>
              <div className="col-md-6 mt-3 mb-5">
                <h5>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    End Date
                  </label>{" "}
                </h5>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={formik.values.endDate}
                  onChange={formik.handleChange}
                  name="endDate"
                />
                <div style={{ color: "red", textAlign: "end" }}>
                  {" "}
                  {formik.errors.endDate}
                </div>
              </div>

              <h2>Customer details</h2>
              <div className="col-md-12 mt-1">
                <h5>
                  {" "}
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Company Name
                  </label>{" "}
                </h5>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter your company name"
                  value={formik.values.CompanyName}
                  onChange={formik.handleChange}
                  name="CompanyName"
                />
                <div style={{ color: "red", textAlign: "end" }}>
                  {" "}
                  {formik.errors.CompanyName}
                </div>
              </div>

              <div className="col-md-6 mt-3">
                <h5>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Customer Name
                  </label>{" "}
                </h5>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Name"
                  value={formik.values.customerName}
                  onChange={formik.handleChange}
                  name="customerName"
                />
                <div style={{ color: "red", textAlign: "end" }}>
                  {" "}
                  {formik.errors.customerName}
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <h5>
                  {" "}
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Mobile Number
                  </label>{" "}
                </h5>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Mobile Number"
                  value={formik.values.mobileNumber}
                  onChange={formik.handleChange}
                  name="mobileNumber"
                />
                <div style={{ color: "red", textAlign: "end" }}>
                  {" "}
                  {formik.errors.mobileNumber}
                </div>
              </div>
              <div className="col-md-6 w-100 mt-3">
                <h5>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Address
                  </label>{" "}
                </h5>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  cols="30"
                  placeholder="Enter Your Address"
                  value={formik.values.Address}
                  onChange={formik.handleChange}
                  name="Address"
                ></textarea>
                <div style={{ color: "red", textAlign: "end" }}>
                  {" "}
                  {formik.errors.Address}
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <h5>
                  {" "}
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    City
                  </label>{" "}
                </h5>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your City"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  name="city"
                />
                <div style={{ color: "red", textAlign: "end" }}>
                  {" "}
                  {formik.errors.city}
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <h5>
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    State
                  </label>{" "}
                </h5>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your State"
                  value={formik.values.State}
                  onChange={formik.handleChange}
                  name="State"
                />
                <div style={{ color: "red", textAlign: "end" }}>
                  {" "}
                  {formik.errors.State}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card mb-3 p-2">
              {cart.map((item) => {
                return (
                  <div className=" d-flex align-items-center">
                    <img
                      style={{ width: "5rem" }}
                      src={item.productUrl}
                      alt={item.productName}
                    />
                    <p className=" ms-2">{item.productName}</p>
                    <p className=" ms-5">{`Price : ${item.price}`}</p>
                    <button
                      type="button"
                      className="btn btn-danger ms-5"
                      onClick={() => deletes(item)}
                    >
                      Cancel
                    </button>
                  </div>
                );
              })}
              <h4 className="mt-3">Total Amount : {total || 0} </h4>
              <div style={{ color: "red", textAlign: "end" }}>
                {" "}
                {formik.errors.total}
              </div>
              <button
                type="submit"
                className="btn btn-warning mt-3 mb-2 shadow-none"
              >
                Place Your Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Cart;
