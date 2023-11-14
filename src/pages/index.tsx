export const useClient = true;
import Cards from "@/components/cards";
import React from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  width: 100%;
  height: 100%;
`;
const Home: React.FC = () => {
  return (
   <Container>
    <Cards />
   </Container>
  );
};

export default Home;

