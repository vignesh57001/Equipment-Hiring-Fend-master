import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { env } from "./config";
import load from "../loading1.svg";

function ForgetPassword() {
  let navigate = useNavigate();
  let [valid, setvalid] = useState("");
  let [loading, setloading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      const errors = {};

      if (values.email.length === 0) {
        errors.email = "Required";
      }

      return errors;
    },

    onSubmit: async (values) => {
      try {
        setloading(true);
        let user = await axios.post(`${env.api}/reset-sendmail`, values);

        if (user.data.statusCode === 200) {
          setvalid(user.data.message);
          setloading(false);
        }

        if (user.data.statusCode === 401) {
          setvalid(user.data.message);
          setloading(false);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh", backgroundColor: "#DEDEDE" }}
      >
        <form
          style={{
            minWidth: "25%",
            margin: "0 auto",
          }}
          onSubmit={(values) => {
            formik.handleSubmit(values);
          }}
        >
          <h4 className="text-center mb-4">Forgot Password</h4>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control shadow-none"
              id="exampleInputEmail1"
              placeholder="Your Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
            />
            <div style={{ color: "red", textAlign: "end" }}>
              {" "}
              {formik.errors.email}
            </div>
          </div>

          <div style={{ color: "red", textAlign: "center" }} class="mb-3">
            {" "}
            {valid}
          </div>
          <div class="mb-3 d-flex justify-content-center">
            <button
              type="submit"
              class="btn btn-primary"
              disabled={!formik.isValid}
            >
              Reset Password
            </button>{" "}
            {loading ? (
              <img
                src={load}
                alt="load"
                style={{ width: "3rem", paddingLeft: "10px" }}
              />
            ) : null}
          </div>
          <div
            class="mt-3 "
            style={{
              color: "blue",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <span onClick={() => navigate("/")}>Back to login</span>
          </div>
        </form>
      </div>
    </>
  );
}

export default ForgetPassword;
