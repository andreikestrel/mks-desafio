import styled from "styled-components";

const CardDescricao = styled.span`
  color: #2c2c2c;
  font-family: Montserrat;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
  margin: 0;
  text-align: justify;
`;

function CardDesc({ descricao }: { descricao: string }) {
  return (
    <CardDescricao>{descricao}</CardDescricao>
  );
}

export default CardDesc;
