import React from "react";
import { tokenKey, BASE_AUTH_URL } from "../config";
import { login } from "../services/authService";

const credentials = {
  email: "testino@mail.com",
  password: "letmein",
};

const MainPage = () => {
  login(credentials).then((data) => console.log(data));
  return <h1>MainPage</h1>;
};

export default MainPage;
