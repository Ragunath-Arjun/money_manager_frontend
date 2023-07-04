import { message } from "antd";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const Navigate = useNavigate();
  const [Login, setLogin] = useState([]);
  const [Loading, setLoading] = useState(false);
  const myFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.email == "") {
        errors.email = "email cannot be blank";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      } else if (values.email.length <= 3) {
        errors.email = "Enter Valid email";
      }
      if (values.password == "") {
        errors.password = "Password cannot be blank";
      } else if (values.password.length <= 5) {
        errors.password = "Password length should be more than 5 characters";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const login = await axios.post(
          "https://money-manager-backend-9yjg.onrender.com/login",
          values
        );
        if (login.data.token) {
          window.localStorage.setItem("token", login.data.token);
          message.success("Logged in Successfully");
          Navigate("/Homepage");
        } else {
          message.error("Email/password is incorrect");
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        message.failed("Email/password is incorrect");
        console.log("Error", error);
      }
    },
  });
  return (
    <>
      <div className="wrapper">
        <div className="logo">
          <img
            src="https://cdn6.aptoide.com/imgs/b/7/b/b7ba2f5b36cc07ff942162816177d93c_icon.png"
            alt="Money Manager icon"
          />
        </div>
        <div className="text-center mt-4 name">Money Manager</div>
        <form className="p-3 mt-3" onSubmit={myFormik.handleSubmit}>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="email"
              name="email"
              id="userName"
              placeholder="email"
              onChange={myFormik.handleChange}
              value={myFormik.values.email}
            />
          </div>
          <span style={{ color: "red" }}>
            {myFormik.errors.email}
            {Login}
          </span>

          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              onChange={myFormik.handleChange}
              value={myFormik.values.password}
            />
          </div>
          <span style={{ color: "red" }}>{myFormik.errors.password}</span>

          <input
            disabled={Loading ? true : false}
            className="btn mt-3"
            type="Submit"
            value={Loading ? "Logging in" : "Login"}
          />
        </form>
        <div className="text-center fs-6">
          <a href="#">Forget password?</a> or{" "}
          <Link to={"/Register"}>Sign up</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
