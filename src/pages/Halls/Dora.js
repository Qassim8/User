import React, { useState } from "react";
import * as Icons from "heroicons-react";

const Dora = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(new Date());
  const [success, setSuccess] = useState(false);

  //    const handleSubmit = (e) => {
  //      e.preventDefault();
  //      hall
  //        .addHall(
  //        )
  //        .then((response) => {
  //          console.log("🚀 ~ file: Login.js:11 ~ login ~ response:", response);
  //          if (response.status === 200) {
  //            setSuccess(true);
  //          } else {
  //            // handle Error
  //          }
  //        })
  //        .catch((error) => {
  //          console.log("🚀 ~ file: Login.js:13 ~ login ~ error:", error);
  //        });
  //    };
  return (
    <>
      <div className="halls-content" dir="rtl">
        <div className="head d-flex align-items-center back-color py-3">
          <a href="/home" className="pt-2 pe-3">
            <Icons.ArrowLeft className=" text-white" />
          </a>
          <div className="mx-auto text-center text-white fs-5">درة بحري</div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <ul className="list-unstyled d-flex justify-content-between py-3 sticky-top bg-white">
                <li>
                  <a href="#hall-icons" className="ms-3 fw-bold main-color">
                    المعرض
                  </a>
                </li>
                <li>
                  <a href="#services" className="mx-3 fw-bold main-color">
                    الخدمات
                  </a>
                </li>
                <li>
                  <a href="#contact" className="mx-3 fw-bold main-color">
                    معلومات التواصل
                  </a>
                </li>
              </ul>
              <div
                id="hall-icons"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="../../Images/hall-1.jpg"
                      className="d-block w-100"
                      alt="..."
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../../Images/hall-2.jpg"
                      className="d-block w-100"
                      alt="..."
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="../../Images/hall-3.jpg"
                      className="d-block w-100"
                      alt="..."
                    ></img>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#hall-icons"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#hall-icons"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div id="services" className="hall-info py-5" dir="rtl">
                <div className="">
                  <div className="notes pt-3">
                    <p className="fs-4 fw-bold main-color ms-5">
                      تفاصيل الخدمة
                    </p>
                    <div className="row py-3 g-5">
                      <div className="col-lg-6">
                        <div className="">
                          <p className="fw-bold mb-1">
                            دفع كاش او بتطبيقات بنكية
                          </p>
                          <p>
                            يمكنك الدفع عبر التطبيقات البنكية او الدفع نقداً بعد
                            الحجز عبر الموقع
                          </p>
                        </div>
                        <div className="">
                          <p className="fw-bold mb-1">موقف سيارات</p>
                          <p>يتوفر موقف للسيارات يسع 30 سيارة</p>
                        </div>
                        <div className="">
                          <p className="fw-bold mb-1">تقسيم الصالة</p>
                          <p>يمكنك فصل الرجال عن النساء</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="">
                          <p className="fw-bold mb-1">خدمةالطعام</p>
                          <p>
                            يمكنك شراء الطعام واستئجار الموزعين منا او الحجز دون
                            الطعام وخدماته
                          </p>
                        </div>
                        <div className="">
                          <p className="fw-bold mb-1">مواعيد الحجز</p>
                          <p className="">يتوفر الحجز صباحاً وعصراً وليلاً</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="info mb-0">
                    <p className="fs-5 fw-bold main-color pt-3">
                      معلومات الصالة
                    </p>
                    <p className="">
                      درة بحري هي صالة تقع في الخرطوم بحري تطل على .... تتيح
                      الصالة خدمات رائعة للزبائن مع وجود تخفيضات في حالة الحجز
                      لاكثر من دورة تحتوي الصالة على مساحة تسع لاكثر من 700 شخص
                      ومع خدمة توزيع طعام مثالية تكون من افضل الصالات في الخرطوم
                      بحري
                    </p>
                  </div>
                </div>
              </div>
              <div id="contact" className="contact">
                <p className="fs-5 fw-bold main-color pb-1">تواصل معنا</p>
                <div className="d-flex align-items-center pb-1">
                  <div className="element d-flex align-items-center ms-5">
                    <p className="fs-5 ms-3">0995683472</p>
                    <Icons.Phone className="main-color" />
                  </div>
                  <a href="#" className="element d-flex align-items-center">
                    <p className="fs-5 ms-3">تواصل عبر البريد</p>
                    <Icons.Mail className="main-color" />
                  </a>
                </div>
                <p className="fw-bold mb-0">العنوان</p>
                <p>الخرطوم بحري</p>
              </div>
            </div>
            <div className="col-lg-5">
              <form action="payment.html" className="m-5 py-5 sticky-top">
                <label for="name" className="black my-2">
                  الاسم
                </label>
                <input
                  type="text"
                  name=""
                  className="form-control"
                  required
                ></input>
                <label for="" className="black my-2">
                  رقم الهاتف
                </label>
                <input
                  type="number"
                  name=""
                  className="form-control"
                  required
                ></input>
                <label for="" className="black my-2">
                  تاريخ الزفاف
                </label>
                <input
                  type="date"
                  name=""
                  className="form-control"
                  required
                ></input>
                <label for="" className="black my-2">
                  الساعة
                </label>
                <select name="" className="form-control" required>
                  <option value="10">9:00 - 12:00 ص</option>
                  <option value="1">1:30 - 4:30 م</option>
                  <option value="8">8:00 - 11:00 م</option>
                </select>
                <input
                  type="submit"
                  value="احجز"
                  className="btn my-4 py-2 w-100 fw-bold back-color text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#booking"
                ></input>
              </form>
            </div>
          </div>
        </div>
        {/* <!-- Start Modal Popup -->
    <!-- Modal -->
    <!-- Start Empty Reserv Popup --> */}
        <div className="empty">
          <div
            className="modal fade"
            id="booking"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p className="black fs-5">
                    هذا الموعد شاغر انتقل للدفع لاكمال الحجز
                  </p>
                </div>
                <div className="modal-footer">
                  <a href="payment.html" className="btn back-color text-white">
                    الدفع
                  </a>
                  <button
                    type="button"
                    className="btn text-white back-red"
                    data-bs-dismiss="modal"
                  >
                    الغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Empty Reserv Popup -->
        Start Unavilable Reserv Popup 
        <!-- <div className="fully">
            <div className="modal fade" id="booking" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="black fs-5">عذراً هذا الموعد محجوز مسبقاً</p>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn text-white back-color" data-bs-dismiss="modal">حسناً</button>
                    </div>
                </div>
                </div>
            </div>
        </div> -->
        <!-- End Unavilable Reserv Popup -->
    <!-- End Modal Popup -->  */}
      </div>
    </>
  );
};

export default Dora;
