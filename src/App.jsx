import { useState } from "react";
import MainPage from "./components/main-page";
import { login } from "./services/authService";
import ApiFetch from "./services/apiFetch";
// import "./App.css";

const credentials = {
  email: "testino@mail.com",
  password: "letmein",
};

function App() {
  login(credentials)
    .then(
      ApiFetch("/products", { method: "GET" }).then((data) =>
        localStorage.setItem("dishes", JSON.stringify(data))
      )
    )
    .catch((error) => console.log(error));
  return (
    <div className="">
      {/* <h1>Products Dashhboard</h1> */}
      <MainPage />
    </div>
  );
}

export default App;
