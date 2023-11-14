import styled from "styled-components";

const ButtonCard = styled.button`
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: #0F52BA;
 width: 100%;
 gap: 10px;
 max-height: 50px;
 height: 100px;
 border-radius: 0 0 10px 10px;
 border: none;
 cursor: pointer;
`;
const IconeButton = styled.img`
 height: 20px;
 width: 20px;
`;
const TextoButton = styled.span`
 color: #fff;
 font-family: Montserrat;
 font-size: 16px;
 font-weight: 400;
 text-align: center;
`;
interface CardButtonProps {
 onClick: React.MouseEventHandler<HTMLButtonElement>;
}
function CardButton({ onClick }: CardButtonProps) {
  const handleButtonClick = () => {
    onClick();
  };

 return (
  <ButtonCard onClick={handleButtonClick}>
    <IconeButton src="/icons/Comprar.png"></IconeButton>
    <TextoButton>Comprar</TextoButton>
  </ButtonCard>
);
}
export default CardButton;
