import styled from "styled-components";
import Card from "../card";


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
  return (
    <Container>
      <Card />
    </Container>
  );
}
export default Cards;