import {
  BookOpen,
  CalendarOutline,
  ChatAlt2,
  DotsCircleHorizontal,
} from "heroicons-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Style/main.css";
import { getHalls } from "../../services/userActions.services";

const Home = () => {
  const [halls, setHalls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getHalls
      .then((response) => {
        console.log("🚀 ~ file: Login.js:11 ~ login ~ response:", response);
        if (response.data.code === 200) {
          setHalls(response.data.data);
        } else {
          // handle Error
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log("🚀 ~ file: Login.js:13 ~ login ~ error:", error);
        navigate("/login");
      });
  }, []);

  // This function to represent hall information, Create new page for hall info
  const hallInfo = (id) => {
    navigate(`/hall-info/id=${id}`);
  };

  return (
    <>
      {/* here is hall list  */}
      <ui>
        {halls.map((hall, index) => (
          <li key={index} onClick={() => hallInfo(hall.hall_id)}>
            {`${hall.hall_id} : ${hall.hall_name}`}
          </li>
        ))}
      </ui>
      {/* End of hall list  */}

      <div className="home" dir="rtl">
        <div className="halls">
          <form className="filter py-2 text-center back-color" dir="rtl">
            <div className="dropdown ms-3">
              <button
                className="btn filt dropdown-toggle"
                id="bd-versions"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-display="static"
              >
                <span className="fw-bold p-3">فلتر حسب الموقع الجغرافي</span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end text-center"
                aria-labelledby="bd-versions"
              >
                <li>
                  <h6 className="dropdown-header">المدن</h6>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    امدرمان
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    الخرطوم
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item current"
                    aria-current="true"
                    href=""
                  >
                    بحري
                  </a>
                </li>
              </ul>
            </div>
          </form>
          <div className="container">
            <div className="row py-5 mb-5 text-center">
              <div className="col-lg-4 col-md-6">
                <div className="box position-relative">
                  <div className="img position-relative">
                    <img
                      src="../../images/hall-1.jpg"
                      alt=""
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="text d-flex align-items-center justify-content-between p-3">
                    <h3 className="black fs-5">برستيج</h3>
                    <a
                      href="/prestige"
                      className="text-white back-color fw-bold py-2 px-3"
                    >
                      عرض
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="box position-relative">
                  <div className="img position-relative">
                    <img
                      src="../../images/hall-2.jpg"
                      alt=""
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="text d-flex align-items-center justify-content-between p-3">
                    <h3 className="black fs-5">السندباد</h3>
                    <a
                      href="sendepad"
                      className="text-white back-color fw-bold py-2 px-3"
                    >
                      عرض
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="box position-relative">
                  <div className="img position-relative">
                    <img
                      src="../../images/hall-3.jpg"
                      alt=""
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="text d-flex align-items-center justify-content-between p-3">
                    <h3 className="black fs-5">درة بحري</h3>
                    <a
                      href="/dora"
                      className="text-white back-color fw-bold py-2 px-3"
                    >
                      عرض
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="box position-relative">
                  <div className="img position-relative">
                    <img
                      src="../../images/hall-2.jpg"
                      alt=""
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="text d-flex align-items-center justify-content-between p-3">
                    <h3 className="black fs-5">تاجوج</h3>
                    <a
                      href="/tajoj"
                      className="text-white back-color fw-bold py-2 px-3"
                    >
                      عرض
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="box position-relative">
                  <div className="img position-relative">
                    <img
                      src="../../images/hall-3.jpg"
                      alt=""
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="text d-flex align-items-center justify-content-between p-3">
                    <h3 className="black fs-5">مارينا</h3>
                    <a
                      href="/marina"
                      className="text-white back-color fw-bold py-2 px-3"
                    >
                      عرض
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="box position-relative">
                  <div className="img position-relative">
                    <img
                      src="../../images/hall-1.jpg"
                      alt=""
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="text d-flex align-items-center justify-content-between p-3">
                    <h3 className="black fs-5">فرحتي</h3>
                    <a
                      href="/farhaty"
                      className="text-white back-color fw-bold py-2 px-3"
                    >
                      عرض
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="link text-center align-items-center position-fixed bottom-0 w-100">
          <div className="container d-flex justify-content-between align-items-center">
            <a
              href="/reserv"
              className="d-flex flex-column justify-content-center w-100 pt-3"
            >
              <BookOpen className="" />
              <p className="fs-5">الحجوزات</p>
            </a>
            <a
              href="/support"
              className="d-flex flex-column justify-content-center w-100 pt-3"
            >
              <ChatAlt2 className="fs-4" />
              <p className="fs-5">الدعم</p>
            </a>
            <a
              href="/about"
              className="d-flex flex-column justify-content-center w-100 pt-3"
            >
              <DotsCircleHorizontal className="fs-4" />
              <p className="fs-5">المزيد</p>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Home;
