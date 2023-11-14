import styled from "styled-components";

const Total = styled.span`
  font-size: 27px;
  font-weight: 700;
  font-family: Montserrat;
  color: #fff;
`;

function ValorTotal({ valor }: { valor: number }) {
  return <Total>R$ {`${valor}`}</Total>;
}

export default ValorTotal;
