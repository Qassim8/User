import React from "react";

const Support = () => {
    return(
        <>
        <div class="support text-center" dir="rtl">
            <div class="head d-flex align-items-center back-color py-3">
                <a href="/home" class="pt-2 pe-3"><i class="fa-solid fa-arrow-left text-white"></i></a>
                <div class="mx-auto text-center text-white fs-4">
                    تجربتي
                </div>
            </div>
        <div class="container">
            <p class="fs-4 fw-bold black pt-5 pb-3">تحدث عن تجربتك مع موقعنا</p>
            <form action="" class="supp-form">
                <textarea class="form-control"></textarea>
                <input type="submit" value="ارسال" class="btn my-3 px-4 py-2 fw-bold text-white back-color"></input>
            </form>
        </div>
    </div>
        </>
    );
};

export default Support;