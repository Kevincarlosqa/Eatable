import React from "react";
import styled from "@emotion/styled";
import { RiEditBoxFill, RiDeleteBinFill } from "react-icons/ri";

const CardContainer = styled.div`
  min-width: 156px;
  min-height: 250px;
  background-color: transparent;
`;

const BgCard = styled.div`
  width: 156px;
  height: 212px;
  background-color: white;
  border-radius: 30px;
  text-align: center;
  position: relative;
  & h3 {
    padding-top: 106px;
    font-size: 22px;
    font-weight: 600;
    line-height: normal;
  }
  & p {
    padding: 8px 0;
    color: var(--orange);
    font-size: 22px;
    font-weight: 600;
    line-height: normal;
  }
  & div {
    display: flex;
    justify-content: space-around;
    color: var(--orange);
  }
  box-shadow: 0px 30px 60px 0px rgba(57, 57, 57, 0.1);
`;

const ImgDish = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 130px;
  background-image: ${(props) => `url(${props.props})`};
  position: absolute;
  background-size: cover;
  background-position: center;
  top: -38px;
  right: 13px;
  box-shadow: 0px 15px 30px 0px rgba(57, 57, 57, 0.5);
`;

const DishCard = ({ dish }) => {
  console.log(dish);
  return (
    <CardContainer>
      <BgCard>
        <ImgDish props={dish.picture_url} />
        <h3>{dish.name}</h3>
        <p>${dish.price}</p>
        <div>
          <RiEditBoxFill />
          <RiDeleteBinFill />
        </div>
      </BgCard>
    </CardContainer>
  );
};

export default DishCard;
