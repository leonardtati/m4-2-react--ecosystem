import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemSelection = ({ item }) => {
  return (
    <Link to={`/items/${item.id}`}>
      <ItemBox>
        <FruitImage src={item.imageSrc}></FruitImage>

        <FruitTitle>{item.name}</FruitTitle>
        <LatinDescription>{item.latinName}</LatinDescription>
      </ItemBox>
    </Link>
  );
};

const ItemBox = styled.div`
  padding: 36px;
  border-radius: 16px;
  border-style: solid;
  text-align: center;
`;

const FruitImage = styled.img`
  border-radius: 12px;
  width: 80%;
`;

const FruitTitle = styled.h3`
  font-size: 24px;
  color: black;
  margin-top: 12px;
`;
const LatinDescription = styled.h6`
  color: grey;
  font-style: italic;
  font-size: 16px;
`;

export default ItemSelection;
