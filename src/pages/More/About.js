import React from "react";

const About = () => {
    return(
        <>
        <div class="more" dir="rtl">
        <div class="head d-flex align-items-center back-color py-3">
            <a href="/home" class="pt-2 pe-3"><i class="fa-solid fa-arrow-left text-white"></i></a>
            <div class="mx-auto text-center text-white fs-4">
                المزيد
            </div>
        </div>
        <div class="container">
            <ul class="list-unstyled d-flex justify-content-center align-items-center py-3">
                <li><a href="/about" class="mx-5 fs-5 active">عن الموقع</a></li>
                <li><a href="/profile" class="mx-5 fs-5">الملف الشخصي</a></li>
            </ul>
            <div class="main-text fs-5 black my-5">
                فرح هو موقع سوداني لحجز الصالات بالتحديد في الخرطوم. يوفر الموقع خدمة للعميل الحجز الالكتروني للصالات مما يجنبه عناء الذهاب للصالة واكمال عملية الحجز بطريقة تقليدية
            </div>
        </div>
    </div>
        </>
    );
};

export default About;