import styled from "styled-components";
import NomeProduto from "../../card-components/nomeProduto";
import InputQuantidade from "../inputQuantidade";
import ImgCardCar from "../imgCardCar";
import PrecoCar from "../precoCar";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 15px;
  gap: 28px;
  background-color: #ffffff;
  align-items: center;
  border-radius: 5px;
  width: 500px;
  height: 100px;
`;

interface CardCarrinhoProps {
  imageURL: string;
  name: string;
  brand: string;
  price: string;
}
function CardCarrinho({ imageURL, name, brand, price }: CardCarrinhoProps) {
  const handleQuantidadeChange = (quantidade: number) => {
    // Faça o que for necessário com a quantidade atualizada
    console.log("Quantidade atualizada:", quantidade);
  }
  return (
    <Container>
      <ImgCardCar imageURL={imageURL} alt={name} />
      <NomeProduto nome={name} marca={brand} />
      <InputQuantidade onQuantidadeChange={handleQuantidadeChange} />
      <PrecoCar preco={price} />
    </Container>
  );
}
export default CardCarrinho;