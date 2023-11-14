import styled from "styled-components";

const Price = styled.span`
  color: #000000;
  border-radius: 5px;
  padding: 5px;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  white-space: nowrap;
`;
function PrecoCar({ preco }: { preco: string }) {
  return (
    <Price>{preco}</Price>
  );
}
export default PrecoCar;