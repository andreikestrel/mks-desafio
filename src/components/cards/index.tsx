
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

function Cards() {
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
          onAddToCart={() => console.log('Adicionar ao carrinho')}
        />
      ))}
    </Container>
 );
}

export default Cards;
