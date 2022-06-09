import Link from "next/link";
import Tilt from "react-parallax-tilt";

const Card = ({ children, path, shadowSize, shadow, bgcolor }) => (
  <div className="hidden md:block">
    <div className="relative">
      <Tilt perspective={1700}>
        {path ? (
          <Link href={path}>
            <div
              className={`rounded-md overflow-hidden min-h-full cursor-pointer group ${shadowSize} ${bgcolor} ${shadow}`}
            >
              {children}
            </div>
          </Link>
        ) : (
          <div
            className={`rounded-md overflow-hidden min-h-full group ${shadowSize} ${bgcolor} ${shadow}`}
          >
            {children}
          </div>
        )}
      </Tilt>
    </div>
  </div>
);

export default Card;
