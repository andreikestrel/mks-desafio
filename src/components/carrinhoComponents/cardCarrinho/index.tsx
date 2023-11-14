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

function CardCarrinho() {
  const handleQuantidadeChange = (quantidade: number) => {
    // Faça o que for necessário com a quantidade atualizada
    console.log("Quantidade atualizada:", quantidade);
  }
  return (
    <Container>
      <ImgCardCar imageURL="/icons/default-image.png" />
      <NomeProduto nome="Nome do Produto" marca="Marca" />
      <InputQuantidade onQuantidadeChange={handleQuantidadeChange} />
      <PrecoCar preco="R$ 00,00" />
    </Container>
  );
}
export default CardCarrinho;