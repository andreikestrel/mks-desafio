import styled from "styled-components";

const Nome = styled.span`
  color: #2c2c2c;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  line-height: 19px;
`;


function NomeProduto({ nome, marca }: { nome: string , marca: string}) {
    return (
    <Nome>{`${marca} ${nome}`}</Nome>);
}

export default NomeProduto;