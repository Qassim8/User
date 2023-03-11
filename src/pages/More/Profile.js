import React, { useEffect, useState } from "react";
import * as profileService from "../../services/profile.services";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const getProfile = () => {
    profileService
      .getProfile()
      .then((response) => {
        console.log(
          "🚀 ~ file: Booking.js:76 ~ booking.getBooking ~ response:",
          response
        );
        setProfile(response.data.data);
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: Booking.js:79 ~ booking.getBooking ~ error:",
          error
        );
      });
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <>
      <div class="profile" dir="rtl">
        <div class="head d-flex align-items-center back-color py-3">
          <a href="/home" class="pt-2 pe-3">
            <i class="fa-solid fa-arrow-left text-white"></i>
          </a>
          <div class="mx-auto text-center text-white fs-4">الملف الشخصي</div>
        </div>
        {profile ? (
          <div class="container">
            <div class="profile-box position-relative p-4 rounded">
              <div class="img position-absolute">
                <i class="fa-solid fa-user fa-3x rounded-circle p-4 back-light gray"></i>
              </div>
              <div class="main-info pt-5">
                <div class="line d-flex align-items-center py-3">
                  <i class="fa-solid fa-user rounded-circle p-2 red mx-2"></i>
                  <div class="line-info">
                    <label class="pb-2">الاسم</label>
                    <input
                      type="text"
                      name="name"
                      id=""
                      class="form-control"
                      placeholder={profile.name}
                      readOnly
                    ></input>
                  </div>
                </div>
                <div class="line d-flex align-items-center py-3">
                  <i class="fa-solid fa-envelope rounded-circle p-2 yellow mx-2"></i>
                  <div class="line-info">
                    <label class="pb-2">البريد الالكتروني</label>
                    <input
                      type="email"
                      name="name"
                      id=""
                      class="form-control"
                      placeholder={profile.email}
                      readOnly
                    ></input>
                  </div>
                </div>
                <div class="line d-flex align-items-center py-3">
                  <i class="fa-solid fa-phone rounded-circle p-2 green mx-2"></i>
                  <div class="line-info">
                    <label class="pb-2">رقم الهاتف</label>
                    <input
                      type="number"
                      name="name"
                      id=""
                      class="form-control"
                      placeholder={profile.phone}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default Profile;
