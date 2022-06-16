import PropTypes from "prop-types";
import { Card, CardImage, CardLink, FloatingRating } from "../index.js";

const MainCard = ({ id, image, title, score, path, children, px }) => (
  <Card bgimage={image} path={`/${path}/${id}`}>
    <CardImage src={image} alt={title} className="rounded" />
    {score && <FloatingRating rating={score} />}
    <CardLink py="py-3" px={px} fontsize="text-base">
      {title ? title : children}
    </CardLink>
  </Card>
);

MainCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string,
  score: PropTypes.number,
  children: PropTypes.node,
};

export default MainCard;
