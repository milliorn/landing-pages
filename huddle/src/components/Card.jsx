import React from "react";
import { Paragraph, StyledCard } from "./styles/Card.styled";

const Card = ({ item: { id, title, body, image } }) => {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <Paragraph>{body}</Paragraph>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          alt={image.toString()}
        />
      </div>
    </StyledCard>
  );
};

export default Card;
