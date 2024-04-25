import React from "react";
import Card from "../card";

function BuyCards({ buyCard }) {
  return (
    <>
      {buyCard?.length > 0 &&
        buyCard?.map((item, index) => {
          return <Card data={item} key={index} />;
        })}
    </>
  );
}

export default BuyCards;
