import React from "react";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import styled from "@emotion/styled";

const FormEdit = styled.form`
  padding-top: 2rem;
  width: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CreatePage = () => {
  return (
    <div>
      <h1>Create Product</h1>
      <FormEdit>
        <Input label="Name" />
        <Input label="Price" />
        <Input label="Description" />
        <Input label="Category" />
        <Input label="Picture URL" />
      </FormEdit>
      <Button>Create</Button>
    </div>
  );
};

export default CreatePage;
