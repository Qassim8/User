import React from 'react';
import '../../Style/main.css';

const Landing = () => {
    return(
        <>
            <section className="first">
                <div id="first-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#first-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#first-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#first-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active position-relative" data-bs-interval="10000">
                            <img src="../../Images/hall-1.jpg" className="d-block w-100 h-100" alt="hall-1"></img>
                            <div className="carousel-caption">
                                <h5 className="fs-1 fw-bold text-white pb-3">فرح</h5>
                                <p className="text-white fs-5">الدليل الاكبر لخدمات الصالات في الخرطوم</p>
                                <div className="link py-2">
                                    <a href="/home" className="btn text-white fw-bold mx-2 px-3 py-2 back-color">دخول</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item position-relative" data-bs-interval="5000">
                            <img src="/hall-2.jpg" className="d-block w-100 h-100" alt="hall-2"></img>
                            <div className="carousel-caption">
                                <h5 className="fs-1 fw-bold text-white pb-3">فرح</h5>
                                <p className="text-white fs-5">اختر صالتك المناسبة من بين العديد من الصالات </p>
                                <div className="link py-2">
                                    <a href="/home" className="btn text-white fw-bold mx-2 px-3 py-2 back-color">دخول</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item position-relative">
                            <img src="../../Images/hall-3.jpg" className="d-block w-100 h-100" alt="hall-3"></img>
                            <div className="carousel-caption">
                                <h5 className="fs-1 fw-bold text-white pb-3">فرح</h5>
                                <p className="text-white fs-5">قم بعملية الحجز بطريقة سهلة من منزلك</p>
                                <div className="link py-2">
                                    <a href="/home" classNameName="btn text-white fw-bold mx-2 px-3 py-2 back-color">دخول</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Landing;