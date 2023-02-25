import React from "react";
import '../../Style/main.css';

const Register = () => {
return(
    <>
    <div className="register">
        <div className="container d-flex justify-content-center align-items-center mt-5">
            <form action="" className="text-center position-absolute top-50 start-50 translate-middle p-3" dir="rtl">
                <a href="/login" className="position-absolute top-0 end-0 pt-2 pe-3"><i className="fa-solid fa-arrow-left main-color"></i></a>
                <div className="input d-flex pt-5">
                    <input type="text" name="user-name" className="form-control mx-2 my-2 w-100" placeholder="اسم المستخدم"></input>
                </div>
                <div className="input d-flex">
                    <input type="email" name="email" className="form-control mx-2 my-2" placeholder="البريد الالكتروني"></input>
                    <input type="number" name="phone" className="form-control mx-2 my-2" placeholder="رقم الهاتف"></input>
                </div>
                <div className="input d-flex">
                    <input type="password" name="password" className="form-control mx-2 my-2" placeholder="كلمة السر"></input>
                    <input type="password" name="" className="form-control mx-2 my-2" placeholder="تأكيد كلمة السر"></input>
                </div>
                <input type="submit" value="تسجيل" className="btn back-color text-light my-3 fw-bold"></input>
            </form>
        </div>
    </div>
    </>
)
};
export default Register;