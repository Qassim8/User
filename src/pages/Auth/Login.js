import React from "react";
import {useNavigate} from "react-router-dom";
import '../../Style/main.css';

const Login = () => {
    const navigate= useNavigate()
    return(
        <>
        <div className="login">
                <div className="container position-absolute top-50 start-50 translate-middle">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div className="img position-relative">
                                <img src="../../Images/hall-3.jpg" alt="login" className="img-fluid "></img>
                            </div>
                        </div>
                        <div className="col-md-6 bg-white position-relative d-flex justify-content-center align-items-center">
                            <form action="" className="text-center " dir="rtl">
                                <a href="../../index.html" className="position-absolute top-0 end-0 pt-2 pe-3"><i className="fa-solid fa-arrow-left main-color"></i></a>
                                <div className="input position-relative">
                                    <input type="email" name="email" id="" className="form-control bg-transparent mt-5" placeholder="البريد الالكتروني"></input>
                                    <i className="fa-solid fa-user main-color position-absolute top-0 start-0 mt-2 ms-2"></i>
                                </div>
                                <div className="input position-relative">
                                    <input type="password" name="password" id="" className="form-control bg-transparent mt-3" placeholder="كلمة السر"></input>
                                    <i className="fa-solid fa-lock main-color position-absolute top-0 start-0 mt-2 ms-2"></i>
                                </div>
                                <input type="submit" value="دخول" onClick={()=> navigate("/home")} className="btn back-color text-white fw-bold mt-3 w-100"></input>
                                <p className="lead my-2">او</p>
                                <a href="/Register" className="main-color d-block fs-5 mb-3">سجل</a>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
};

export default Login;