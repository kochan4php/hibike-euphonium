import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import JIKAN_API from "../../config/Jikan";

const DetailAnime = () => {
  const router = useRouter();
  const { animeId } = router.query;
  const [detailAnime, setDetailAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = () => router.push("/#anime");

  useEffect(() => {
    const getDetailAnime = async () => {
      const response = await fetch(`${JIKAN_API}/anime/${animeId}/full`);
      const detailDataAnime = await response.json();
      const finalData = await detailDataAnime.data;
      setDetailAnime(finalData);
      setIsLoading(false);
    };

    getDetailAnime();
    console.log(detailAnime);
  }, []);

  return (
    <section className="min-w-full bg-slate-700 text-white pt-16 pb-6 min-h-screen">
      {isLoading ? (
        <div className="container flex justify-center items-center">
          <p className="text-xl">Loading...</p>
        </div>
      ) : (
        <>
          {detailAnime?.trailer?.embed_url && (
            <div className="container p-0">
              <iframe
                src={detailAnime?.trailer?.embed_url}
                width="100%"
                className="h-[270px] sm:h-[400px] md:[500px] lg:h-[700px] xl:h-[550px]"
              ></iframe>
            </div>
          )}
          <div className="container my-10 p-4">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex justify-center">
                <img
                  src={detailAnime?.images?.webp?.image_url}
                  alt={detailAnime?.title}
                />
              </div>
              <div className="flex flex-col justify-start md:col-start-2 md:col-end-4 p-4 md:py-0">
                <h1 className="text-2xl font-semibold my-8 md:my-0 md:mb-7">
                  {detailAnime?.title}
                </h1>
                <p>Relase : {detailAnime?.aired?.string}</p>
                <p>
                  Genre :{" "}
                  {detailAnime?.themes.map((genre, index) => {
                    let coma;
                    detailAnime?.themes.length - 1 === index
                      ? (coma = "")
                      : (coma = ", ");

                    return (
                      <span>
                        {genre.name}
                        {coma}
                      </span>
                    );
                  })}
                </p>
                <p>Duration : {detailAnime?.duration}</p>
                <p>
                  Studio : {detailAnime?.studios.map((studio) => studio.name)}
                </p>
                <p>Status : {detailAnime?.status}</p>
              </div>
            </div>

            <div className="mt-10 mb-10 lg:mt-0 md:p-10 lg:p-16">
              <h1 className="text-3xl mb-7">Synopsis</h1>
              <p className="text-md md:text-lg text-justify md:text-left">
                {detailAnime?.synopsis ? detailAnime?.synopsis : "No Synopsis"}
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default DetailAnime;
