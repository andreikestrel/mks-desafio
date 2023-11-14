import styled from "styled-components";

const ImageContainer = styled.div`
    max-width: 50px;
    max-height: 50px;
`;

const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

function ImgCardCar({ imageURL }: { imageURL: string }) {
  return (
    <ImageContainer>
      <ImageCard src={imageURL} alt="Image" />
    </ImageContainer>
  );
}

export default ImgCardCar;

