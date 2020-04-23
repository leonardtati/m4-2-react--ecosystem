import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { sellers, items } from "../data";

const ItemDetails = () => {
  let { itemId } = useParams();
  console.log("You know nothing John Snow", itemId);
  console.log(items);
  const currentFruit = items[itemId];
  console.log("You know nothing John Snow", currentFruit);
  const fruitInStock = currentFruit.quantity > 0;
  const seller = sellers[currentFruit.sellerId];
  console.log("You know nothing John Snow", seller);

  return (
    <Wrapper>
      <StyledFruit src={currentFruit.imageSrc} alt="this is a fruit" />
      <div>
        <h2>{currentFruit.name}</h2>
        <h3>{currentFruit.latinName}</h3>
        <p>{currentFruit.description}</p>
        <h5>Product of {currentFruit.countryOfOrigin}</h5>

        {fruitInStock ? (
          <StyledButton>Get it for {currentFruit.price} $</StyledButton>
        ) : (
          <div>Out of stock</div>
        )}

        <SellerInfo>
          <StyledSeller src={seller.avatarSrc} alt="this is a face" />
          <div>Sold by: {seller.storeName} </div>
        </SellerInfo>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const StyledFruit = styled.img`
  display: block;
  width: 360px;
  height: 360px;
  border-radius: 16px;
`;

const StyledButton = styled.button`
  padding: 18px 64px;
  color: white;
  background-color: greenyellow;
  border: none;
  display: block;
  text-align: center;
  border-radius: 12px;
  font-size: 21px;
`;
const SellerInfo = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 12px;
`;
const StyledSeller = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transform: scale(1.25);
  margin-right: 16px;
`;

export default ItemDetails;
