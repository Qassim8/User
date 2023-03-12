import axios from "axios";

const apiUrl = "http://localhost:8888/";

const token = async () => localStorage.getItem("token");

export const getHalls = token().then(async (token) => {
  return axios.get(apiUrl + "halls/api/get_halls.php", {
    headers: { token: token },
  });
});
