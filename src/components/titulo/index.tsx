import styled from "styled-components";
const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  font-family: Montserrat;
`;
const SubTitle = styled.h2`
  color: #fff;
  font-size: 20px;
  font-weight: 100;
  font-family: Montserrat;
`;
const TitleBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    gap: 5px;
    margin-left: 40px;
    `;
function Titulo() {
  return (
    <TitleBox>
      <Title>MKS</Title>
      <SubTitle>Sistemas</SubTitle>
    </TitleBox>
  );
}
export default Titulo;
