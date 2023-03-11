import { ArrowLeft } from "heroicons-react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../../Style/main.css";
import * as auth from "../../services/auth.services";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .register(name, phone, email, password, "user")
      .then((response) => {
        console.log("🚀 ~ file: Login.js:11 ~ login ~ response:", response);
        if (response.data.code === 200) {
          localStorage.setItem("token", response.data.data.token);
          navigate("/login");
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
      <div className="register">
        <div className="container d-flex justify-content-center align-items-center mt-5">
          <form
            action=""
            onSubmit={handleSubmit}
            className="text-center position-absolute top-50 start-50 translate-middle p-3"
            dir="rtl"
          >
            <a
              href="/login"
              className="position-absolute top-0 end-0 pt-2 pe-3"
            >
              <ArrowLeft className=" main-color" />
            </a>
            <div className="input d-flex pt-5">
              <input
                type="text"
                name="name"
                className="form-control mx-2 my-2 w-100"
                placeholder="اسم المستخدم"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </div>
            <div className="input d-flex">
              <input
                type="email"
                name="email"
                className="form-control mx-2 my-2"
                placeholder="البريد الالكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
              <input
                type="number"
                name="phone"
                className="form-control mx-2 my-2"
                placeholder="رقم الهاتف"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              ></input>
            </div>
            <div className="input d-flex">
              <input
                type="password"
                name="password"
                className="form-control mx-2 my-2"
                placeholder="كلمة السر"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
              <input
                type="password"
                name=""
                className="form-control mx-2 my-2"
                placeholder="تأكيد كلمة السر"
              ></input>
            </div>
            <input
              type="submit"
              value="تسجيل"
              className="btn back-color text-light my-3 fw-bold"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
