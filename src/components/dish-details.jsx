import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Button from "../ui/Button/Button";

const ImgDish = styled.div`
  width: 241px;
  margin: auto;
  margin-top: 94px;
  height: 241px;
  border-radius: 241px;
  background-image: ${(props) => `url(${props.props})`};
  background-size: cover;
  background-position: center;
  box-shadow: 0px 15px 30px 0px rgba(57, 57, 57, 0.5);
`;

const DishDetail = styled.div`
  width: 297px;
  margin: auto;
  margin-top: 91px;
  text-align: left;
  & h3 {
    font-size: 28px;
    font-weight: 600;
    line-height: normal;
    text-align: center;
  }
  & h4 {
    padding: 10px 0;
    color: var(--orange);
    font-size: 28px;
    font-weight: 600;
    line-height: normal;
    text-align: center;
  }
  & p:nth-of-type(1) {
    padding-top: 27px;
    display: flex;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #333;
  }
  & p:nth-of-type(2) {
    padding-top: 4px;
    color: #333;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const DishDetails = () => {
  const { dish_id } = useParams();
  const navigate = useNavigate();
  function handleBack() {
    navigate("/");
  }

  const dishes = JSON.parse(localStorage.getItem("dishes"));

  const dish = dishes.filter((filterDish) => filterDish.id === +dish_id);
  return (
    <div>
      <ImgDish props={dish[0].picture_url} />
      <DishDetail>
        <h3>{dish[0].name}</h3>
        <h4>${dish[0].price / 100}</h4>
        <p>Description</p>
        <p>{dish[0].description}</p>
      </DishDetail>
      <Button onBack={handleBack}>Go Back</Button>
    </div>
  );
};

export default DishDetails;
