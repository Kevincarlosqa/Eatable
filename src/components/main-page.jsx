import React, { useState, useEffect } from "react";
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

const DeleteModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(51, 51, 51, 0.6);
  z-index: 10;
`;

const DeleteCard = styled.div`
  height: 218px;
  width: 301px;
  background-color: white;
  opacity: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  z-index: 20;
  & h3 {
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  & button:nth-of-type(1) {
    border: none;
    width: 262px;
    padding: 12px 16px;
    border-radius: 30px;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: white;
    background-color: var(--orange);
  }
  & button:nth-of-type(2) {
    border: none;
    width: 262px;
    padding: 12px 16px;
    border-radius: 30px;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: white;
    background-color: #efb60e;
  }
`;
const MainPage = () => {
  const dishes = JSON.parse(localStorage.getItem("dishes")) || [];
  const [del, setDel] = useState(false);
  useEffect(() => {
    console.log(del);
  }, [del]);

  return (
    <>
      <h1 className="h1">Products Dashboard</h1>
      {del ? (
        <DeleteModal>
          <DeleteCard>
            <h3>Are you sure?</h3>
            <button>Yes, delete it!</button>
            <button onClick={() => setDel(false)}>No, cancel!</button>
          </DeleteCard>
        </DeleteModal>
      ) : (
        ""
      )}
      <Container>
        <DishesContainer>
          {dishes.map((dish, index) => (
            <DishCard key={index} dish={dish} setDel={setDel} />
          ))}
        </DishesContainer>
      </Container>
      <Button>Create Product</Button>
    </>
  );
};

export default MainPage;
