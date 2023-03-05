import axios from "axios";

const apiUrl = "http://localhost:8080/";

export const login = (email, password) => {
const formData = new FormData();
formData.append("email", email);
formData.append("password", password);
console.log("formData:", formData, "email:", email, "password:", password);

return axios.post(apiUrl + "halls/api/login.php", formData, {
    headers: { "content-type": "application/x-www-form-urlencoded" },
});
};

export const register = (name, phone, email, password) => {
const formData = new FormData();
formData.append("name", name);
formData.append("phone", phone);
formData.append("email", email);
formData.append("password", password);
return axios.post(apiUrl + "halls/api/signup.php", formData);
};