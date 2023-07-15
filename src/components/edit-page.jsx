import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import styled from "@emotion/styled";

const FormEdit = styled.form`
  padding-top: 2rem;
  width: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EditPage = () => {
  const { dish_id } = useParams();
  const dishes = JSON.parse(localStorage.getItem("dishes"));
  const dish = dishes.filter((filt) => filt.id === +dish_id);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: dish[0].name,
    price: dish[0].price,
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer algo con los valores del formulario
  };
  return (
    <div>
      <h1>Edit Product</h1>
      <FormEdit onSubmit={() => console.log("submit change")}>
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
        <Button>Save</Button>
      </FormEdit>
    </div>
  );
};

export default EditPage;
