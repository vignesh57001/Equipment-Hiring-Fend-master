import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { env } from "./config";
import UserContext from "./contect";
import loads from "../load.svg";

function Login() {
  let navigate = useNavigate();
  let [loading, setloading] = useState(false);
  let context = useContext(UserContext);
  const { getUserdata, getData } = context;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      if (values.email.length === 0) {
        errors.email = "Required";
      }
      if (values.password.length === 0) {
        errors.password = "Required";
      }
      return errors;
    },

    onSubmit: async (values) => {
      try {
        setloading(true);
        let user = await axios.post(`${env.api}/login`, values);
        console.log(user);
        if (user.data.statusCode === 201) {
          window.localStorage.setItem("Token", user.data.token);
          setloading(false);
          toast.success(user.data.message);
          getData();
          getUserdata(
            user.data.user.name,
            user.data.user.email,
            user.data.user.roll
          );
          setTimeout(() => {
            navigate("/layout");
          }, 1000);
        }

        if (user.data.statusCode === 401) {
          toast.warn(user.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "100vh", backgroundColor: "#a46cac" }}
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
                <h3 className="text-center mb-4">Login</h3>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Username
                  </label>
                  <input
                    type="email"
                    className="form-control shadow-none"
                    id="exampleInputEmail1"
                    placeholder="Enter Email Id"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                  />
                  <div style={{ color: "red", textAlign: "end" }}>
                    {" "}
                    {formik.errors.email}
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label ">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control shadow-none"
                    id="exampleInputPassword1"
                    placeholder="Enter you Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    name="password"
                  />
                  <div style={{ color: "red", textAlign: "end" }}>
                    {" "}
                    {formik.errors.password}
                  </div>
                </div>
                <div
                  className="mb-3 "
                  style={{
                    color: "blue",
                    textAlign: "end",
                    cursor: "pointer",
                  }}
                >
                  <span
                    className="underline"
                    onClick={() => navigate("forgot-password")}
                  >
                    Forgot Password
                  </span>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!formik.isValid}
                >
                  User Login
                </button>{" "}
                {loading ? (
                  <img
                    src={loads}
                    alt="load"
                    style={{ width: "3rem", paddingLeft: "10px" }}
                  />
                ) : null}
                <div
                  className="mt-3 "
                  style={{
                    color: "blue",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <span
                    className="underline"
                    onClick={() => navigate("/register")}
                  >
                    {" "}
                    Create NewUser
                  </span>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
          <div
            className="col-lg-6"
            style={{
              backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENfpDZaHp7j5MdZ0G4IuTWihlAmgSXeRFFQ&usqp=CAU")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "250px",
              margin: "250px 0px 100px 0px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Login;
