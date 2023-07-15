import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import styled from "@emotion/styled";
import ApiFetch from "../services/apiFetch";

const FormEdit = styled.form`
  padding-top: 2rem;
  width: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & p {
    margin: auto;
    color: red;
    font-weight: 600;
  }
`;

const EditPage = ({ setProducts }) => {
  const { dish_id } = useParams();
  const dishes = JSON.parse(localStorage.getItem("dishes"));
  const dish = dishes.filter((filt) => filt.id === +dish_id);
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [int, setInt] = useState(false);
  const [formData, setFormData] = useState({
    name: dish[0].name,
    price: (dish[0].price / 100).toFixed(2),
    description: dish[0].description,
    category: dish[0].category,
    pictureURL: dish[0].picture_url,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(+e.target[1].value);
    function validateNumberFormat(number) {
      const regex = /^\d+\.\d{2}$/;
      return regex.test(number);
    }

    const priceValue = e.target[1].value;
    const newDish = {
      name: e.target[0].value || null,
      price: +e.target[1].value * 100 || null,
      description: e.target[2].value || null,
      category: e.target[3].value || null,
      picture_url: e.target[4].value || null,
    };
    if (
      newDish.name == undefined ||
      newDish.price == undefined ||
      newDish.category == undefined ||
      newDish.description == undefined ||
      newDish.picture_url == undefined
    ) {
      setError(true);
      return console.log("ennar todo");
    } else {
      setError(false);
    }
    if (!validateNumberFormat(priceValue) || parseFloat(priceValue) === 0) {
      setInt(true);
      return;
    } else {
      setInt(false);
    }
    console.log(newDish);
    const id = localStorage.getItem("Id");
    await ApiFetch(`/products/${id}`, { method: "PATCH", body: newDish })
      .then((data) => {})
      .catch(console.error());
    const data = await ApiFetch(`/products`, { method: "GET" }).then((data) =>
      localStorage.setItem("dishes", JSON.stringify(data))
    );
    setProducts(data);
    navigate("/");
  };
  return (
    <div>
      <h1>Edit Product</h1>
      <FormEdit onSubmit={(event) => handleSubmit(event)}>
        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          label="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <Input
          label="Description"
          name="description"
          type="textarea"
          value={formData.description}
          onChange={handleChange}
        />
        <Input
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <Input
          label="Picture URL"
          name="pictureURL"
          value={formData.pictureURL}
          onChange={handleChange}
        />
        <p>{error ? "Complete todos los campos" : ""}</p>
        <p>{int ? "Ingrese un precio con dos decimales 00.00" : ""}</p>
        <Button type="submit">Save</Button>
      </FormEdit>
    </div>
  );
};

export default EditPage;
