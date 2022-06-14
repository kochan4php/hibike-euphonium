import PropTypes from "prop-types";
import {
  Card,
  CardImage,
  CardLink,
  CardMobile,
  FloatingRating,
} from "../index.js";

const MainCard = ({
  id,
  image,
  title,
  score,
  path,
  bgcolor,
  shadowSize,
  shadowColor,
}) => (
  <>
    <CardMobile bgimage={image} path={`/${path}/${id}`}>
      <CardImage src={image} alt={title} className="rounded" />
      {score && <FloatingRating rating={score} />}
      <CardLink py="py-3" fontsize="text-base">
        {title}
      </CardLink>
    </CardMobile>

    <Card
      path={`/${path}/${id}`}
      bgcolor={bgcolor}
      shadowSize={shadowSize}
      shadowColor={shadowColor}
    >
      <CardImage src={image} alt={title} />
      {score && <FloatingRating rating={score} />}
      <CardLink px="px-4" py="py-6">
        {title}
      </CardLink>
    </Card>
  </>
);

MainCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string,
  score: PropTypes.number,
  bgcolor: PropTypes.string,
  shadowSize: PropTypes.string,
  shadowColor: PropTypes.string,
};

MainCard.defaultProps = {
  title: "Ini Judul",
  bgcolor: "bg-slate-700",
  shadowSize: "shadow-lg",
  shadowColor: "shadow-slate-800",
  score: 0,
};

export default MainCard;
