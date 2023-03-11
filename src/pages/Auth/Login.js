import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Style/main.css";
import * as Icons from "heroicons-react";
import * as auth from "../../services/auth.services";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .login(email, password, "user")
      .then((response) => {
        console.log("🚀 ~ file: Login.js:11 ~ login ~ response:", response);
        if (response.data.code === 200) {
          localStorage.setItem("token", response.data.data[0].token);
          navigate("/home");
        } else {
          // handle Error
        }
      })
      .catch((error) => {
        console.log("🚀 ~ file: Login.js:13 ~ login ~ error:", error);
      });
  };
  return (
    <>
      <div className="login">
        <div className="container position-absolute top-50 start-50 translate-middle">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="img position-relative">
                <img
                  src="../../Images/hall-2.jpg"
                  alt="login"
                  className="img-fluid "
                />
              </div>
            </div>
            <div className="col-md-6 bg-white position-relative d-flex justify-content-center align-items-center">
              <form
                action=""
                onSubmit={handleSubmit}
                className="text-center "
                dir="rtl"
              >
                <a
                  href="../../index.html"
                  className="position-absolute top-0 end-0 pt-2 pe-3"
                >
                  <i className="fa-solid fa-arrow-left main-color"></i>
                </a>
                <div className="input position-relative">
                  <input
                    type="email"
                    name="email"
                    id=""
                    className="form-control bg-transparent mt-5"
                    placeholder="البريد الالكتروني"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  ></input>
                  <Icons.User className="main-color position-absolute top-0 start-0 mt-2 ms-2" />
                </div>
                <div className="input position-relative">
                  <input
                    type="password"
                    name="password"
                    id=""
                    className="form-control bg-transparent mt-3"
                    placeholder="كلمة السر"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  ></input>
                  <Icons.LockClosed className=" main-color position-absolute top-0 start-0 mt-2 ms-2" />
                </div>
                <input
                  type="submit"
                  value="دخول"
                  className="btn back-color text-white fw-bold mt-3 w-100"
                ></input>
                <p className="lead my-2">او</p>
                <a href="/Register" className="main-color d-block fs-5 mb-3">
                  سجل
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
