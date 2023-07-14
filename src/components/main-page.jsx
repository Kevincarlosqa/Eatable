import React from "react";
import { tokenKey, BASE_AUTH_URL } from "../config";
import DishCard from "./dish-card";
import styled from "@emotion/styled";
import Button from "../ui/Button/Button";

const DishesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 332px;
  gap: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem auto;
`;
const MainPage = () => {
  const dishes = JSON.parse(localStorage.getItem("dishes")) || [];
  return (
    <>
      <h1 className="h1">Products Dashboard</h1>
      <Container>
        <DishesContainer>
          {dishes.map((dish, index) => (
            <DishCard key={index} dish={dish} />
          ))}
        </DishesContainer>
      </Container>
      <Button>Create Product</Button>
    </>
  );
};

export default MainPage;
