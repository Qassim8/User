import axios from "axios";

const apiUrl = "http://localhost:80/";

export const login = (email, password, role) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  formData.append("role", role);
  console.log("formData:", formData, "email:", email, "password:", password);

  return axios.post(apiUrl + "halls/api/login.php", formData, {
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
};

export const register = (name, phone, email, password, role) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("phone", phone);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("role", role);
  return axios.post(apiUrl + "halls/api/signup.php", formData);
};
