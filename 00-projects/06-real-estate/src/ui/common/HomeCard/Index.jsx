import React from "react";
import Typography from "../Typography/Index";
import CardImage from "../../../assets/images/card-image.png";
import ReactImage from "../ReactImage/Index";

const HomeCard = ({
  title,
  image,
  property_type,
  rooms,
  bathrooms,
  garages,
}) => {
  return (
    <div>
      <ReactImage src={CardImage} alt={title} />
      <Typography variant="h3">{title}</Typography>
      <div className="flex gap-2">
        <Typography variant="span">{property_type}</Typography>
        <Typography variant="span">{rooms}</Typography>
        <Typography variant="span">{bathrooms}</Typography>
        <Typography variant="span">{garages}</Typography>
      </div>
    </div>
  );
};

export default HomeCard;
