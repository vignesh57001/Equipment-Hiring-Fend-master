import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  let navigate = useNavigate();
  return (
    <>
      <div className="content">
        <div className="wrapper-1">
          <div className="wrapper-2">
            <h1>Thank you !</h1>
            <p>Thanks for subscribing to our news letter. </p>
            <p>you will receive a confirmation email soon </p>
            <button
              className="go-home"
              type="button"
              onClick={() => {
                navigate("/layout/product");
              }}
            >
              go home
            </button>
          </div>
          <div className="footer-like">
            <p>
              Email not received?
              <a href="#!">Click here to send again</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderSuccess;
