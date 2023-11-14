import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-right: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  width: 90px;
  height: 45px;
  cursor: pointer;
`;
const Icone = styled.img`
  height: 25px;
  width: 25px;
`;
const Contador = styled.span`
  color: #000;
  font-size: 20px;
  font-weight: 600;
`;

interface CarrinhoProps {
  onClick: React.MouseEventHandler;
}

function Carrinho({ onClick }: CarrinhoProps) {
  return (
    <Box onClick={onClick}>
      <Icone src="/icons/carshop.png" alt="carrinho" />
      <Contador>0</Contador>
    </Box>
  );
}

export default Carrinho;
