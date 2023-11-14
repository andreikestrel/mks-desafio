// src/components/nav/index.tsx
import React, { MouseEventHandler, useState } from "react";
import styled from "styled-components";
import Carrinho from "../carrinhoIcon";
import Titulo from "../titulo";
import Offcanvas from "../offCanvas";

const Box = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: #0F52BA;
 padding: 10px;
 width: 100%;
 height: 101px;
`;

function Nav() {
 const [isCarrinhoMenuOpen, setIsCarrinhoMenuOpen] = useState(false);
 const handleCarrinhoClick: MouseEventHandler = (event) => {
    setIsCarrinhoMenuOpen(!isCarrinhoMenuOpen);
 };

 return (
    <>
      <Box>
        <Titulo />
        <Carrinho onClick={handleCarrinhoClick} />
      </Box>
      <Offcanvas isOpen={isCarrinhoMenuOpen} onClose={() => setIsCarrinhoMenuOpen(false)} />
    </>
 );
}

export default Nav;





