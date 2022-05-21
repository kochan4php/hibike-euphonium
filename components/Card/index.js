import Link from "next/link";

const Card = ({ data }) => (
  <div className="relative " key={data?.mal_id}>
    <Link href={`/detail/${data?.mal_id}`}>
      <div className="rounded-md overflow-hidden shadow-lg shadow-slate-800 cursor-pointer hover:scale-105 hover:-translate-x-2 hover:-translate-y-2 transition-all duration-300 group bg-slate-600">
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
  </div>
);

export default Card;
