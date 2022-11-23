import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { env } from "./config";
import UserContext from "./contect";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Razorpay() {
  let navigate = useNavigate();
  const params = useParams();
  let context = useContext(UserContext);
  const { finalPay } = context;

  const send = async (id, oid) => {
    let values = {};

    values.orderid = oid;
    values.paymentid = id;
    values.email = window.localStorage.getItem("email");
    values.name = window.localStorage.getItem("name");
    let res = await axios.post(`${env.api}/cart/send_mail`, values);

    if (res.data.statusCode === 200) {
      navigate("/layout/order-page");
    } else {
      alert("Order Failled");
    }
  };

  const handleSubmit = async () => {
    let val = await axios.post(`${env.api}/cart/addToCart`, finalPay, {
      headers: {
        authorization: window.localStorage.getItem("Token"),
      },
    });
    if (val.data.statusCode === 401) {
      toast.warn("Token is Expiry");
      return;
    } else {
      var options = {
        key: "rzp_test_kgUEwHuOQmpNz6",
        key_secret: "UFEaoGwrbwHdSxQ0ph2J9TwU",
        amount: params.id * 100,
        currency: "INR",
        name: "Equipment Hiring",
        description: "for testing purpose",
        handler: function (response) {
          send(response.razorpay_payment_id, val.data.data.insertedId);
        },
        prefill: {
          name: "Vigneshwar",
          email: "vigneshmenon2303@gmail.com",
          contact: "8526857001",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div>
        <h1> Total Amount :- {params.id}</h1>

        <button
          onClick={handleSubmit}
          type="button"
          className="btn btn-success me-5"
        >
          Conform To Pay
        </button>
        <button
          onClick={() => {
            navigate("/layout/cart");
          }}
          type="button"
          className="btn btn-danger"
        >
          Go to Back
        </button>

        <div
          style={{
            marginTop: "10px",
            border: "2px solid red",
            padding: "10px",
          }}
        >
          <h2>Card Number : 1234 1234 1234 1234</h2>
          <h2>expiry Date : 09/25</h2>
          <h2>CVV : 196</h2>
          <h2>OTP Number : 1958</h2>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Razorpay;
