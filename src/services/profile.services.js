import axios from "axios";

const apiUrl = "http://localhost:80/";

const token = localStorage.getItem("token");

export const getProfile = () => {
  return axios.get(apiUrl + "halls/api/get_profile.php", {
    headers: { token: token },
  });
};
