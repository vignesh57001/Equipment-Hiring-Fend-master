import React, { useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { env } from './config';
import loads from '../load.svg'

function Register() {

  let navigate = useNavigate();
  let [loading,setloading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      conformPassword: "",

    },
    validate: (values) => {
      const errors = {};

      if (values.name.length === 0) {
        errors.name = "Required"
      }
      if (values.email.length === 0) {
        errors.email = "Required"
      }
      if (values.mobile.length === 0) {
        errors.mobile = "Required"
      }
      if (values.password.length === 0) {
        errors.password = "Required"
      }
      if (values.conformPassword.length === 0) {
        errors.conformPassword = "Required"
      }
      if (values.conformPassword !== values.password) {
        errors.conformPassword = "Conform password does not match"
      }


      return errors;
    },

    onSubmit: async (values) => {
      try {
        setloading(true)
        delete values.conformPassword;
        values.roll = "user";
        let user = await axios.post(`${env.api}/register`, values);
        
        if (user.data.statusCode === 201) {
          setloading(false)
          toast.success(user.data.message)
          setTimeout(() => {
            navigate("/");
          }, 2000)

        }


      } catch (error) {
        console.log(error);
      }

    }
  });

  return (
    <>
      <div className='d-flex align-items-center justify-content-center' style={{ width: "100%", height: "100vh", backgroundColor: "#DEDEDE" }} >
        <form style={{
          minWidth: "25%",
          margin: "0 auto"
        }} onSubmit={(values) => {
          formik.handleSubmit(values)
        }}>
          <h4 className='text-center mb-4'>Register Form</h4>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control shadow-none" placeholder='Enter your name' value={formik.values.name}
              onChange={formik.handleChange}
              name="name" />
            <div style={{ color: "red", textAlign: "end" }}> {formik.errors.name}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control shadow-none" placeholder='Enter your Email Id' value={formik.values.email}
              onChange={formik.handleChange}
              name="email" />
            <div style={{ color: "red", textAlign: "end" }}> {formik.errors.email}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input type="text" className="form-control shadow-none" placeholder='Enter your mobile number' value={formik.values.mobile}
              onChange={formik.handleChange}
              name="mobile" />
            <div style={{ color: "red", textAlign: "end" }}> {formik.errors.mobile}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control shadow-none" placeholder='Enter you Password ' value={formik.values.password}
              onChange={formik.handleChange}
              name="password" />
            <div style={{ color: "red", textAlign: "end" }}> {formik.errors.password}</div>
          </div>
          <div className="mb-3">

            <label className="form-label ">Conform Password</label>
            <input type="password" className="form-control shadow-none" placeholder='Enter you Conform Password' value={formik.values.conformPassword}
              onChange={formik.handleChange}
              name="conformPassword" />
            <div style={{ color: "red", textAlign: "end" }}> {formik.errors.conformPassword}</div>
          </div>

          <div className="mb-3 d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary" disabled={!formik.isValid}>SignUp</button>  {loading ? <img src={loads} alt="load" style={{width:"3rem",paddingLeft:"10px"}} />: null}
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  )
}

export default Register