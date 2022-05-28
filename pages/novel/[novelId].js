import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { Loading, Text, Synopsis } from "../../components";
import JIKAN_API from "../../config/Jikan";

const DetailNovel = () => {
  const router = useRouter();
  const { novelId } = router.query;
  const [detailNovel, setDetailNovel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => router.push("/#novel");

  useEffect(() => {
    const getDetailNovel = async () => {
      const response = await fetch(`${JIKAN_API}/manga/${novelId}/full`);
      const detailDataNovel = await response.json();
      const finalData = await detailDataNovel.data;
      setDetailNovel(finalData);
      setIsLoading(false);
    };

    getDetailNovel();
  }, [novelId]);

  return (
    <section className="min-w-full bg-slate-700 text-white pt-16 pb-6 min-h-screen">
      <div className="container flex justify-start my-6">
        <button
          className="px-7 py-2 rounded-md bg-slate-800 text-slate-5 focus:ring focus:ring-sky-500 hover:bg-slate-700 hover:border-sky-500 border-2 border-transparent transition-all duration-300"
          onClick={handleClick}
        >
          &laquo;&nbsp;Back
        </button>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="container my-10 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex justify-center">
              <Tilt perspective={700}>
                <img
                  src={detailNovel?.images?.webp?.image_url}
                  alt={detailNovel?.title}
                  className="rounded shadow shadow-slate-800"
                />
              </Tilt>
            </div>
            <div className="flex flex-col justify-start md:col-start-2 md:col-end-4 p-4 md:py-0">
              {detailNovel?.score && (
                <span className="gap-3 mt-2 md:mt-0 md:mb-4 text-2xl md:text-xl lg:text-2xl flex items-center">
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span>{detailNovel?.score}</span>
                </span>
              )}
              <h1 className="text-3xl lg:text-4xl font-semibold my-8 md:my-0 md:mb-5">
                {detailNovel?.title}
              </h1>
              <div className="text-lg">
                <Text category="Release">{detailNovel?.published?.string}</Text>
                <Text category="Genre">
                  {detailNovel?.themes.map((genre, index) => {
                    let coma;
                    detailNovel?.themes.length - 1 === index
                      ? (coma = "")
                      : (coma = ", ");

                    return (
                      <span key={index}>
                        {genre.name}
                        {coma}
                      </span>
                    );
                  })}
                </Text>
                <Text category="Type">{detailNovel?.type}</Text>
                <Text category="Chapters">{detailNovel?.chapters}</Text>
                <Text category="Volume">{detailNovel?.volumes}</Text>
                <Text category="Status">{detailNovel?.status}</Text>
              </div>
            </div>
          </div>

          <Synopsis>
            {detailNovel?.synopsis ? detailNovel?.synopsis : "No Synopsis"}
          </Synopsis>
        </div>
      )}
    </section>
  );
};

export default DetailNovel;
