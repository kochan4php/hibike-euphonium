import Link from "next/link";

const CardMobile = ({ bgimage, path, children }) => (
  <div
    className="md:hidden bg-cover bg-center h-full bg-no-repeat selection:bg-violet-500"
    style={{ backgroundImage: `url('${bgimage}')` }}
  >
    <div className="backdrop-blur backdrop-brightness-90 bg-slate-800 bg-opacity-30 min-h-full">
      {path ? (
        <Link href={path}>
          <div className="cursor-pointer group px-3 pt-6 pb-6 relative">
            {children}
          </div>
        </Link>
      ) : (
        <div className="group px-3 pt-6 pb-6 relative">{children}</div>
      )}
    </div>
  </div>
);

export default CardMobile;
