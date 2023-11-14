// src/components/card/index.tsx
import styled from "styled-components";
import ImgCard from "../card-components/imgCard";
import CardButton from "../card-components/cardButton";
import CardDesc from "../card-components/cardDesc";
import NomeProduto from "../card-components/nomeProduto";
import Preco from "../card-components/preco";

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #ffffff;
  width: 218px;
  height: 360px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
`;

const TextoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-height: 100px;
  max-height: 120px;
  box-sizing: border-box;
  align-items: flex-start;
  width: 100%;
  padding: 0px 10px;
  margin-bottom: 18px;
`;

const NomeEPreco = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
  width: 100%;
`;

interface CardProps {
  imageURL: string;
  name: string;
  brand: string;
  description: string;
  price: string;
  onAddToCart: (product: { imageURL: string; name: string; brand: string; price: string }) => void;
}

const Card: React.FC<CardProps> = ({ imageURL, name, brand, description, price, onAddToCart }) => {
  return (
    <ContainerCard>
      <ImgCard imageURL={imageURL} />
      <TextoContainer>
        <NomeEPreco>
          <NomeProduto nome={name} marca={brand} />
          <Preco preco={price} />
        </NomeEPreco>
        <CardDesc descricao={description} />
      </TextoContainer>
      <CardButton onClick={() => onAddToCart({ imageURL, name, brand, price })} />
    </ContainerCard>
  );
};

export default Card;


