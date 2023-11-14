import styled from "styled-components";
import CardCarrinho from "../carrinhoComponents/cardCarrinho";

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 80%;
    `;
function CardsCarrinho() {
  return (
    <Container>
      <CardCarrinho />
    </Container>
  );
}
export default CardsCarrinho;