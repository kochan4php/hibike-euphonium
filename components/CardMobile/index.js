import Link from "next/link";

const CardMobile = ({ bgimage, path, children }) => (
  <div
    className="md:hidden bg-cover bg-center h-full bg-no-repeat"
    style={{ backgroundImage: `url('${bgimage}')` }}
  >
    <div className="backdrop-blur bg-slate-800 bg-opacity-30 min-h-full">
      <Link href={path}>
        <div className="cursor-pointer group px-4 sm:px-5 sm:pt-8 pt-8 pb-3 relative">
          {children}
        </div>
      </Link>
    </div>
  </div>
);

export default CardMobile;
