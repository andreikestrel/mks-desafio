import styled from "styled-components";

const TextoFooter = styled.span`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  width: 100%;
`;
const ContainerFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    background-color: #eeeeee;
    width: 100%;
    `;

function Footer() {
  return (
    <ContainerFooter>
      <TextoFooter>MKS sistemas © Todos os direitos reservados</TextoFooter>;
    </ContainerFooter>
  );
}

export default Footer;
