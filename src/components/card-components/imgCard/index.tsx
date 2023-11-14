import styled from "styled-components";

const ImageContainer = styled.div`
    padding: 10px;
    max-width: 150px;
    max-height: 150px;
`;

const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

function ImgCard({ imageURL }: { imageURL: string }) {
  return (
    <ImageContainer>
      <ImageCard src={imageURL} alt="Image" />
    </ImageContainer>
  );
}

export default ImgCard;
