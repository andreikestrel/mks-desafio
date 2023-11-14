import Card from "../card";
import styled from "styled-components";
import { useFetchProducts, ApiResponse } from "../../hooks/useProducts";

const Container = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 max-width: 100%;
 align-items: center;
 justify-content: space-around;
 margin: 80px 100px;
 gap: 30px;
`;

interface CardProps {
  imageURL: string;
  name: string;
  brand: string;
  description: string;
  price: string;
}

type CardsProps = {
  onAddToCart: (product: {
    imageURL: string;
    name: string;
    brand: string;
    description: string;
    price: string;
  }) => void;
};


const Cards: React.FC<CardsProps> = ({ onAddToCart }) => {
  const { data } = useFetchProducts<ApiResponse>();

  const products = data?.products || [];

  return (
    <Container>
      {products.map((product) => (
        <Card
          key={product.id}
          imageURL={product.photo}
          name={product.name}
          brand={product.brand}
          description={product.description}
          price={`R$ ${product.price}`}
          onAddToCart={onAddToCart}
        />
      ))}
    </Container>
  );
}

export default Cards;