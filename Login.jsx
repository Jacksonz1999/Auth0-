import React from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../../context/LoginContext";

import useFetchApi from "./../../../API/useFetchApi";
import "./Login.css";
const Login = () => {
  const { login } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { users } = useFetchApi();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const userExist = users.map((user) => {
      if (user.email === data.email && user.password === data.password) {
        localStorage.setItem("email", JSON.stringify(user.email));
        localStorage.setItem("name", JSON.stringify(user.first_name));
        login();
        return true;
      } else {
        return false;
      }
    });
    if (userExist.includes(true)) {
      console.log(" You Are Successfully Logged In");
      navigate("/Homepage");
    } else {
      navigate("/");
      console.log("Email or Password is not matching with our record");
    }
  };

  return (
    <>
      <a href="#modal-opened" className="link-1" id="modal-closed">
        LOGIN
      </a>

      <div className="modal-container" id="modal-opened">
        <div className="modal">
          <div classNameName="login-card">
            <div className="login-form">
              <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <div className="textbox">
                
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="enter your email"
                />
                {errors.email && (
                  <span style={{ color: "red" }}>*Email* is obligatory </span>
                )}
                </div>
                    <br />
               
                <div className="textbox">
                <input
                  type="password"
                  {...register("password")}
                  placeholder="enter your password"
                />
                </div>
              <br />
                <input type={"submit"} value="LOGIN" className="modal__btn" />
              </form>
            </div>
          </div>

          <a href="#modal-closed" className="link-2"></a>
        </div>
      </div>
    </>
  );
};

export default Login;
