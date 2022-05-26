import Link from "next/link";
import Tilt from "react-parallax-tilt";

const Card = ({ data, shadowSize, shadow, bgcolor }) => (
  <div className="relative">
    <Tilt perspective={700}>
      <Link href={`/detail/${data?.mal_id}`}>
        <div
          className={`rounded-md overflow-hidden cursor-pointer group ${shadowSize} ${bgcolor} ${shadow}`}
        >
          <img
            src={data?.images?.webp?.large_image_url}
            alt=""
            width="100%"
            heigth="100%"
          />
          <div className="absolute -top-0 -left-0 bg-slate-100 text-slate-800 px-2 py-1 rounded-tl-md border bg-opacity-75 border-sky-500 z-50">
            <span>
              {" "}
              {data.score ? data?.score : "Unknown"}&nbsp;
              <span className="text-yellow-600">{data.score && "⭐"}</span>
            </span>
          </div>
          <h4 className="text-slate-50 px-4 py-6 group-hover:text-fuchsia-400 tracking-wide transition-colors duration-300 selection:bg-teal-500 selection:text-teal-800">
            {data?.title}
          </h4>
        </div>
      </Link>
    </Tilt>
  </div>
);

export default Card;
