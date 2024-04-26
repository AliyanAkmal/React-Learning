import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import cardsData from "../../components/card/data";
import WrapperLayout from "../../components/stylrWrapper";
import CardList from "../../components/cardList";
import BuyCards from "../../components/cardList/BuyCards";

const HomePage = () => {
  const [buyCard, setbuyCard] = useState([]);
  const [filterBuy, setbfilterBuy] = useState(buyCard);
  return (
    <>
      <Header />
      <WrapperLayout>
        <CardList data={cardsData} setbuyCard={setbuyCard} />
        <div style={{ padding: "10px" }}>
          <h1 style={{ textAlign: "", padding: "20px, 0px" }}>Buy Cards</h1>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              paddingTop: "3rem",
              flexWrap: "wrap",
            }}
          >
            <BuyCards
              buyCard={buyCard}
              filterBuy={filterBuy}
              setbfilterBuy={setbfilterBuy}
            />
          </div>
        </div>
      </WrapperLayout>
      <Footer />
    </>
  );
};

export default HomePage;
