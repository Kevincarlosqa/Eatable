import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import styled from "@emotion/styled";

const FormEdit = styled.form`
  width: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EditPage = () => {
  const { dish_id } = useParams();
  const dish = JSON.parse(localStorage.getItem("dishes"));
  console.log(dish);
  const navigate = useNavigate();
  function handleBack() {
    navigate("/");
  }
  return (
    <div>
      <h1>Edit Product</h1>
      <FormEdit>
        <Input label="Name" />
        <Input label="Price" />
        <Input label="Description" />
        <Input label="Category" />
        <Input label="Picture URL" />
      </FormEdit>
      <Button>Save</Button>
    </div>
  );
};

export default EditPage;
