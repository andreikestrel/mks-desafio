import React from "react";
import styled from "styled-components";
import ValorTotal from "../valorTotal";
import CardsCarrinho from "../cardsCarrinho";

interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

const OffcanvasWrapper = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  background-color: #0f52ba;
  z-index: 999;
  box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const OffcanvasContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 101px;
`;
const TituloMenu = styled.h1`
  font-size: 27px;
  font-weight: 700;
  font-family: Montserrat;
  color: #fff;
`;

const FecharMenu = styled.button`
  background-color: #000000;
  border: none;
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-family: Montserrat;
  cursor: pointer;
`;
const Total = styled.span`
  font-size: 28px;
  font-weight: 600;
  font-family: Montserrat;
  color: #fff;
`;

const FooterMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 101px;
`;

const FinalizarCompra = styled.button`
  background-color: #000000;
  border: none;
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  font-family: Montserrat;
  cursor: pointer;
  width: 100%;
  height: 101px;
  text-align: center;
`;

function Offcanvas({ isOpen, onClose }: OffcanvasProps) {
  const handleClose = () => {
    onClose();
  };
  const valorTotal: number = 0.00;
  return (
    <OffcanvasWrapper isOpen={isOpen}>
      <OffcanvasContent>
        <HeaderMenu>
          <TituloMenu>Carrinho de Compras</TituloMenu>
          <FecharMenu onClick={handleClose}>X</FecharMenu>
        </HeaderMenu>
        <CardsCarrinho />
        <FooterMenu>
          <Total>Total:</Total>
          <ValorTotal valor={valorTotal} />
        </FooterMenu>
        <FinalizarCompra>Finalizar Compra</FinalizarCompra>
      </OffcanvasContent>
    </OffcanvasWrapper>
  );
}

export default Offcanvas;

/* import React from "react";
import styled from "styled-components";
import ValorTotal from "../valorTotal";

const OffcanvasWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #0F52BA;
  box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
`;
const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 101px;
`;
const TituloMenu = styled.h1`
  font-size: 27px;
  font-weight: 700;
  font-family: Montserrat;
  color: #fff;
`;

const FecharMenu = styled.button`
  background-color: #000000;
  border: none;
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  border-radius: 50%;
  font-family: Montserrat;
  cursor: pointer;
`;
const Total = styled.span`
  font-size: 28px;
  font-weight: 600;
  font-family: Montserrat;
  color: #fff;
`;

const FooterMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 101px;
`;

const FinalizarCompra = styled.button`
  background-color: #000000;
  border: none;
  color: #fff;
  font-size: 28px;
  font-weight: 600;
  border-radius: 50%;
  font-family: Montserrat;
  cursor: pointer;
  width: 100%;
  height: 101px;
  text-align: center;
`;

interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

const handleCloseMenu = () => {
  setIsOpen(false);
 };

function Offcanvas({ isOpen, onClose }: OffcanvasProps) {
  const valorTotal: number = 0.00;

  return (
    <OffcanvasWrapper isOpen={isOpen}>
      <HeaderMenu>
        <TituloMenu>Carrinho de Compras</TituloMenu>
        <FecharMenu onClick={handleCloseMenu}>x</FecharMenu>
      </HeaderMenu>
      <FooterMenu>
        <Total>Total:</Total>
        <ValorTotal valor={valorTotal} />
      </FooterMenu>
      <FinalizarCompra>Finalizar Compra</FinalizarCompra>
    </OffcanvasWrapper>
  );
}

export default Offcanvas;*/
