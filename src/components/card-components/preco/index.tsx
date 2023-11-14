import styled from "styled-components";

const Price = styled.span`
  color: #fff;
  border-radius: 5px;
  padding: 5px;
  background: #373737;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  white-space: nowrap;
`;
function Preco({ preco }: { preco: string }) {
  return (
    <Price>{preco}</Price>
  );
}
export default Preco;