import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import styled from "@emotion/styled";
import ApiFetch from "../services/apiFetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormEdit = styled.form`
  padding-top: 2rem;
  width: 350px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CreatePage = ({ setProducts }) => {
  const [error, setError] = useState(false);
  const [int, setInt] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

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
    if (Number.isInteger(+e.target[1].value)) {
      setInt(true);
      return;
    } else {
      setInt(false);
    }

    console.log(newDish);

    await ApiFetch("/products", { method: "POST", body: newDish })
      .then((data) => {
        setInt(false);
        setError(false);
      })
      .catch(console.error());

    const data = await ApiFetch(`/products`, { method: "GET" }).then((data) =>
      localStorage.setItem("dishes", JSON.stringify(data))
    );
    setProducts(data);
    navigate("/");
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
        <p>{error ? "Complete todos los campos" : ""}</p>
        <p>{int ? "Ingrese un precio con dos decimales 00.00" : ""}</p>
        <Button>Create</Button>
      </FormEdit>
    </div>
  );
};

export default CreatePage;
