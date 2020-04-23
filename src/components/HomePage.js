import React from "react";

import ListingGrid from "./ListingGrid";

import { items } from "../data";

function HomePage(props) {
  return (
    <>
      <h2>
        Fruit emporium sells the finest fruits from this world and beyond.
      </h2>

      <h3>Browse items:</h3>
      <ListingGrid itemList={Object.values(items)} />
    </>
  );
}

export default HomePage;
