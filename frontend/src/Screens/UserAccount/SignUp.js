import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../../features/Auth/AuthSlice";
function SignUp() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (name.length == 0) {
      setInputError("This field is required");
    } else if (name.length < 4) {
      setInputError("min 4 length is required");
    } else setInputError("");
  }, [name]);

  useEffect(() => {
    var re = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (email.length == 0) {
      setEmailError("This field is required");
    } else if (!re.test(email)) {
      setEmailError("Not and valid email");
    } else {
      setEmailError("");
    }
  }, [email]);

  useEffect(() => {
    let special = /[\W]{1,}/;
    if (password.length == 0) {
      setPasswordError("this field is required");
    } else if (password.length < 5) {
      setPasswordError("passowrd should contain min 6 char");
    } else if (password.search(/[A-Z]/) < 0) {
      setPasswordError("password should contain one UpperCase");
    } else if (password.search(/[a-z]/) < 0) {
      setPasswordError("password should contain one LowerCase");
    } else if (password.search(/[0-9]/) < 0) {
      setPasswordError("password should contain one number");
    } else if (!special.test(password)) {
      setPasswordError("password should contain one special char");
    } else {
      setPasswordError("");
    }
  }, [password]);
  const formHandler = async (e) => {
    e.preventDefault();
    const dataTobeSent = {
      name,
      email,
      password,
    };

  dispatch(signUp(dataTobeSent))
  };

  const signupModalContainer = (e) => {
    if (e.target.classList.contains("login-sign-container")) {
      navigate("/landing");
    }
  };

  return (
    <div>
      <div
        className="login-sign-container"
        onClick={(e) => signupModalContainer(e)}
      >
        <div className="logn-container ">
          <div className="login-card-right">
            <h1>Create your account</h1>
            <p>
              Alredy have an account?{" "}
              <Link to="/landing/login">
                <span style={{ color: "black", textDecoration: "underline" }}>
                  Login here
                </span>{" "}
              </Link>{" "}
            </p>
            <span className="mini-info-login">or sign up with an email</span>
            <form onSubmit={(e) => formHandler(e)}>
              <div className="form-top">
                <input
                  type="text"
                  placeholder="name"
                  required
                  minLength="4"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {/* <div className="error-div-input ">
                  {inputError !== "" ? (
                    <p className="error-handler-input error mobile-hide">
                      {inputError}
                      <i className="fas fa-exclamation-circle"></i>
                    </p>
                  ) : (
                    <p className="error-handler-input sucess">
                      Success<i className="fas fa-check-circle"></i>
                    </p>
                  )}
                </div> */}

                <input
                  type="email"
                  required
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
              </div>
              {/* {errors} */}
              <div className="error-div-input ">
                {inputError !== "" ? (
                  <p className="error-handler-input error mobile-hide">
                    {inputError}
                    <i className="fas fa-exclamation-circle"></i>
                  </p>
                ) : (
                  <p className="error-handler-input sucess">
                    Success<i className="fas fa-check-circle"></i>
                  </p>
                )}

                {emailError !== "" ? (
                  <p className="error-handler-input error">
                    {emailError}
                    <i className="fas fa-exclamation-circle"></i>
                  </p>
                ) : (
                  <p className="error-handler-input sucess">
                    Success<i className="fas fa-check-circle"></i>
                  </p>
                )}
              </div>
              {/* {} */}
              <div className="form-mid">
                <input
                  type="password"
                  required
                  placeholder="password"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="error-div-input password-error ">
                {passwordError !== "" ? (
                  <p className="error-handler-input error">
                    {passwordError}
                    <i className="fas fa-exclamation-circle"></i>
                  </p>
                ) : (
                  <p className="error-handler-input sucess">
                    Success<i className="fas fa-check-circle"></i>
                  </p>
                )}
              </div>
              <input type="checkbox" required />
              <label
                htmlFor=""
                style={{ fontFamily: "sans-serif", fontSize: "13px" }}
              >
                I agree with Terms and conditions
              </label>
              <button disabled={loader}>
                {loader ? <i class="fas fa-spinner fa-spin"></i> : "sign up"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
