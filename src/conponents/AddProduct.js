import { useFormik } from "formik";
import React, { useContext } from "react";
import UserContext from "./contect";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loads from "../loads.svg";
function AddProduct() {
  let context = useContext(UserContext);
  const { addData, data, loading } = context;

  const formik = useFormik({
    initialValues: {
      productUrl: "",
      productName: "",
      price: "",
      quantity: "",
      type: "",
    },
    validate: (values) => {
      const errors = {};

      if (values.productUrl.length === 0) {
        errors.productUrl = "Product image URL is required";
      }
      if (values.productName.length === 0) {
        errors.productName = "Product name is required";
      }
      if (values.price.length === 0) {
        errors.price = "Price is Required";
      }
      if (values.quantity.length === 0) {
        errors.quantity = "quantity is Required";
      }
      if (values.type.length === 0) {
        errors.type = "type is Required";
      }

      return errors;
    },

    onSubmit: async (values) => {
      addData(values);
    },
  });
  return (
    <>
      <div className="container w-75 mx-auto ">
        <h1 className="text-center mt-2">Product Details</h1>
        <img
          src="https://www.shutterstock.com/image-photo/house-rent-label-260nw-511372381.jpg"
          className=" mx-auto d-block w-25"
          alt="bookimage"
          style={{ borderRadius: "15px" }}
        />
        <form
          className=" w-100"
          onSubmit={(values) => {
            formik.handleSubmit(values);
          }}
        >
          <div className="row">
            <div className="col-md-12 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Add Product Image URL
              </label>
              <input
                type="url"
                className="form-control"
                id="exampleInputEmail1"
                value={formik.values.productUrl}
                onChange={formik.handleChange}
                name="productUrl"
                placeholder="Enter the Product image URL"
              />
              <div style={{ color: "red", textAlign: "end" }}>
                {" "}
                {formik.errors.productUrl}
              </div>
            </div>

            <div className="col-md-6 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={formik.values.productName}
                onChange={formik.handleChange}
                name="productName"
                placeholder="Enter the Product Name"
              />
              <div style={{ color: "red", textAlign: "end" }}>
                {" "}
                {formik.errors.productName}
              </div>
            </div>

            <div className="col-md-6 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={formik.values.price}
                onChange={formik.handleChange}
                name="price"
                placeholder="Enter Price detail"
              />
              <div style={{ color: "red", textAlign: "end" }}>
                {" "}
                {formik.errors.price}
              </div>
            </div>

            <div className="col-md-6 mt-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Quantity
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={formik.values.quantity}
                onChange={formik.handleChange}
                name="quantity"
                placeholder="No of Quantity"
              />
              <div style={{ color: "red", textAlign: "end" }}>
                {" "}
                {formik.errors.quantity}
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <label htmlFor="validationCustom04" className="form-label">
                Type
              </label>
              <select
                className="form-select"
                id="validationCustom04"
                value={formik.values.type}
                onChange={formik.handleChange}
                name="type"
              >
                <option selected disabled value="">
                  Enter the type
                </option>

                <option value="camera">camera</option>
                <option value="speaker">speaker</option>
                <option value="light">light</option>
                <option value="other">other</option>
              </select>
              <div style={{ color: "red", textAlign: "end" }}>
                {" "}
                {formik.errors.type}
              </div>
            </div>
          </div>

          <div className=" d-flex justify-content-center mt-5 mb-5">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!formik.isValid}
            >
              Add Product
            </button>{" "}
            {loading ? (
              <img
                src={loads}
                alt="load"
                style={{ width: "3rem", paddingLeft: "10px" }}
              />
            ) : null}
          </div>
        </form>

        <ToastContainer />
      </div>
    </>
  );
}

export default AddProduct;
