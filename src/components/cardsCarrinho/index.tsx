
import styled from "styled-components";
import CardCarrinho from "../carrinhoComponents/cardCarrinho";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80%;
`;

function CardsCarrinho() {
  const [cartItems, setCartItems] = useState<Array<{
    imageURL: string;
    name: string;
    brand: string;
    price: string;
  }>>([]);

  const handleAddToCart = (product: {
    imageURL: string;
    name: string;
    brand: string;
    price: string;
  }) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <Container>
      {cartItems.map((item, index) => (
        <CardCarrinho
          key={index}
          imageURL={item.imageURL}
          name={item.name}
          brand={item.brand}
          price={item.price}
        />
      ))}
    </Container>
  );
}


export default CardsCarrinho;
