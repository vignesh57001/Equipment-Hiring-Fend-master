import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import { env } from "./config";

function Password() {
  const params = useParams();

  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
      conformPassword: "",
    },
    validate: (values) => {
      const errors = {};

      if (values.password.length === 0) {
        errors.password = "Required";
      }
      if (values.conformPassword.length === 0) {
        errors.conformPassword = "Required";
      }
      if (values.conformPassword !== values.password) {
        errors.conformPassword = "Conform password does not match";
      }

      return errors;
    },

    onSubmit: async (values) => {
      try {
        delete values.conformPassword;
        values.id = params.id;
        values.token = params.token;

        let user = await axios.post(`${env.api}/password-reset`, values);

        if (user.data.statusCode === 201) {
          toast.success(user.data.message);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
        if (user.data.statusCode === 401) {
          toast.warn(user.data.message);
          setTimeout(() => {
            navigate("/forgot-password");
          }, 4000);
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
        style={{ width: "100%", height: "100vh", backgroundColor: "#DEDEDE" }}
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
          <h4 className="text-center mb-4">Password Reset Form</h4>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control shadow-none"
              placeholder="Enter you Password "
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
            />
            <div style={{ color: "red", textAlign: "end" }}>
              {" "}
              {formik.errors.password}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label ">Conform Password</label>
            <input
              type="password"
              className="form-control shadow-none"
              placeholder="Enter you Conform Password"
              value={formik.values.conformPassword}
              onChange={formik.handleChange}
              name="conformPassword"
            />
            <div style={{ color: "red", textAlign: "end" }}>
              {" "}
              {formik.errors.conformPassword}
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-center mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!formik.isValid}
            >
              Change Password
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default Password;
