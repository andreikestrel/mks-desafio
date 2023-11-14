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
interface ImgCardCarProps {
  imageURL: string;
  alt: string;
}

function ImgCardCar({ imageURL, alt }: ImgCardCarProps) {
  return (
    <ImageContainer>
      <ImageCard src={imageURL} alt={alt} />
    </ImageContainer>
  );
}

export default ImgCardCar;

