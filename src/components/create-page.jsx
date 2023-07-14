import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import styled from "@emotion/styled";
import ApiFetch from "../services/apiFetch";
import { useState } from "react";

const FormEdit = styled.form`
  padding-top: 2rem;
  width: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CreatePage = () => {
  const [error, setError] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const newDish = {
      name: e.target[0].value,
      price: +e.target[1].value,
      description: e.target[2].value,
      category: e.target[3].value || null,
      picture_url: e.target[4].value,
    };
    if (
      newDish.name == undefined ||
      newDish.price == undefined ||
      newDish.category == undefined ||
      newDish.description == undefined ||
      newDish.picture_url == undefined
    ) {
      console.log(newDish);
      setError(true);
      return console.log("ennar todo");
    }
    // e.target.map((inp) => {
    //   console.log(inp.value);
    //   console.log(inp.name);
    // });
    setError(false);
    ApiFetch("/products", { method: "POST", body: newDish })
      .then(console.log)
      .catch((error) => console.log(error));
    console.log(newDish);
    // const {} = e.target
  }

  return (
    <div>
      <h1>Create Product</h1>
      <FormEdit onSubmit={handleSubmit}>
        <Input label="Name" name="name" />
        <Input label="Price" name="price" />
        <Input label="Description" name="description" type="textarea" />
        <Input label="Category" name="category" />
        <Input label="Picture URL" name="picture_url" />
        <p>{error ? "Llenar todos los espacios" : ""}</p>
        <Button>Create</Button>
      </FormEdit>
    </div>
  );
};

export default CreatePage;
