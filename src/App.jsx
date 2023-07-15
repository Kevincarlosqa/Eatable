import { useEffect, useState } from "react";
import MainPage from "./components/main-page";
import DishDetails from "./components/dish-details";
import EditPage from "./components/edit-page";
import CreatePage from "./components/create-page";
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
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await login(credentials);
        const data = await ApiFetch("/products", { method: "GET" });
        setProducts(data);
        localStorage.setItem("dishes", JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
    };

    if (!products) {
      fetchData();
    }
  }, [products]);

  return (
    <Routes>
      {/* <h1>Products Dashhboard</h1> */}
      <Route
        path="/"
        element={
          <div className="contain">
            <MainPage products={products} setProducts={setProducts} />
          </div>
        }
      />
      <Route path="/dish/:dish_id" element={<DishDetails />} />
      <Route path="/edit/:dish_id" element={<EditPage />} />
      <Route
        path="/create"
        element={<CreatePage products={products} setProducts={setProducts} />}
      />
    </Routes>
  );
}

export default App;
