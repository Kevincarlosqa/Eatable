import { useState } from "react";
import MainPage from "./components/main-page";
import DishDetails from "./components/dish-details";
import { login } from "./services/authService";
import ApiFetch from "./services/apiFetch";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
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
    <Routes>
      {/* <h1>Products Dashhboard</h1> */}
      <Route
        path="/"
        element={
          <div className="contain">
            <MainPage />
          </div>
        }
      />
      <Route path="/dish/:dish_id" element={<DishDetails />} />
    </Routes>
  );
}

export default App;
