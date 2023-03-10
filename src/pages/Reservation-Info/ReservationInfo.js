import React from "react";

const ReservationInfo = () => {
    return(
        <>
        <div class="reserv" dir="rtl">
        <div class="head d-flex align-items-center back-color py-3">
            <a href="/home" class="pt-2 pe-3"><i class="fa-solid fa-arrow-left text-white"></i></a>
            <div class="mx-auto text-center text-white fs-4">
                حجوزاتي
            </div>
        </div>
        <div class="container">
            <ul class="list-unstyled d-flex justify-content-center align-items-center pt-3">
                <li><a href="reservation-info.html" class="mx-5 fs-5 active">السابقة</a></li>
                <li><a href="/next" class="mx-5 fs-5">القادمة</a></li>
            </ul>
            <div class="prev text-center black">
                <div class="content">
                    {/* <i class="fa-solid fa-book fs-4 p-3 rounded-pill black-back text-white"></i>
                    <p class="fs-4">ليس لديك حجوزات سابقة</p> */}
                    <div class="container">
                        <ul class="list-group">
                            <li class="list-group-item py-3 fw-bold">الاحد 5/12/2022</li>
                            <li class="list-group-item py-3 fw-bold">الخميس 1/7/2018</li>
                            <li class="list-group-item py-3 fw-bold">الجمعة 2/10/2017</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default ReservationInfo;