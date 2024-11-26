import React from "react";

type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: "5px",
      padding: "20px",
      maxWidth: "300px",
    }}
  >
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default Card;
