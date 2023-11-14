import styled from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    justify-content: center;
    width: 80px;
    height: 100%;
    `;
const Input = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 0.5px solid #BFBFBF;
    border-radius: 5px;
    `;
const Botao = styled.button`
    background-color: #fff;
    border-radius: 50%;
    border: none;
    color: #000;
    font-size: 10px;
    font-weight: 600;
    font-family: Montserrat;
    cursor: pointer;
    width: 30%;
    height: 100%;
    `;
const Separacao = styled.span`
    color: #BFBFBF;
    height: 100%;
    font-size: 5px;
    font-family: Montserrat;
    `;
const Quantidade = styled.span`
    background-color: #fff;
    border: none;
    color: #000;
    font-size: 10px;
    font-weight: 600;
    font-family: Montserrat;
    cursor: pointer;
    width: 33%;
    text-align: center;
    `;
const QtdTXT = styled.span`
    color: #000;
    font-size: 5px;
    font-weight: 600;
    font-family: Montserrat;
    text-align: center;

    `;

interface InputQuantidadeProps {
  onQuantidadeChange: (quantidade: number) => void;
}

function InputQuantidade({ onQuantidadeChange }: InputQuantidadeProps) {
  const [quantidade, setQuantidade] = useState(0);

  const decrementar = () => {
    setQuantidade((prevQuantidade) => Math.max(0, prevQuantidade - 1));
    onQuantidadeChange(quantidade);
  };

  const incrementar = () => {
    setQuantidade((prevQuantidade) => prevQuantidade + 1);
    onQuantidadeChange(quantidade);
  };

  return (
    <Container>
      <QtdTXT>QTD:</QtdTXT>
      <Input>
        <Botao onClick={decrementar}>-</Botao>
        <Separacao>|</Separacao>
        <Quantidade>{quantidade}</Quantidade>
        <Separacao>|</Separacao>
        <Botao onClick={incrementar}>+</Botao>
      </Input>
    </Container>
  );
}

export default InputQuantidade;
