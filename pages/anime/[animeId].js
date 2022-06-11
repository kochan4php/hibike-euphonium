import { useRouter } from "next/router";
import { useEffect, useState, Fragment } from "react";
import Tilt from "react-parallax-tilt";
import {
  Loading,
  Text,
  Synopsis,
  Button,
  Card,
  CardImage,
} from "../../components";
import action from "../../action";

const { getDetailAnime, getPhotoAnime, getCharacterAnime } = action;

const DetailAnime = () => {
  const router = useRouter();
  const { animeId } = router.query;

  const [detailAnime, setDetailAnime] = useState([]);
  const [photosAnime, setPhotosAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async (id) => {
    const getDataAnime = await getDetailAnime(id);
    const getPhotosAnime = await getPhotoAnime(id);

    if (getDataAnime && getPhotosAnime) {
      setDetailAnime(getDataAnime);
      setPhotosAnime(getPhotosAnime);
      setIsError(false);
    } else {
      setIsError(true);
    }

    setIsLoading(false);
  };

  const handleClick = () => router.push("/#anime");

  useEffect(() => {
    getData(animeId);
  }, [animeId]);

  return (
    <section className="min-w-full bg-slate-800 text-white pt-16 pb-6 min-h-screen">
      <Button onClick={handleClick}>&laquo;&nbsp;Back</Button>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {detailAnime?.trailer?.embed_url && (
            <div className="container p-0">
              <iframe
                src={detailAnime?.trailer?.embed_url}
                width="100%"
                className="aspect-[18/10] md:aspect-[18/8] selection:bg-violet-500"
              ></iframe>
            </div>
          )}
          <div className="container my-10 p-4">
            {isError ? (
              <p>Kebanyakan Request di API nya</p>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="flex justify-center items-center selection:bg-pink-500">
                    <Tilt perspective={700} className="flex justify-center">
                      <img
                        src={detailAnime?.images?.webp?.large_image_url}
                        alt={detailAnime?.title}
                        className="rounded shadow shadow-slate-800 w-3/5 md:w-full lg:w-3/5"
                      />
                    </Tilt>
                  </div>
                  <div className="flex flex-col justify-start md:col-start-2 md:col-end-4 p-4 md:py-0">
                    {detailAnime?.score && (
                      <span className="gap-3 mt-2 md:mt-0 md:mb-4 text-2xl md:text-xl lg:text-2xl flex items-center selection:bg-emerald-500 selection:text-emerald-900">
                        <span className="text-3xl text-yellow-500">⭐</span>{" "}
                        <span>{detailAnime?.score}</span>
                      </span>
                    )}
                    <h1 className="text-3xl lg:text-4xl font-semibold my-8 md:my-0 md:mb-5 selection:bg-violet-500 selection:text-violet-900">
                      {detailAnime?.title}
                    </h1>
                    <div className="text-lg selection:bg-pink-500 selection:text-pink-900">
                      <Text category="Release">
                        {detailAnime?.aired?.string}
                      </Text>
                      <Text category="Genre">
                        {detailAnime?.themes?.map((genre, index) => {
                          let coma;
                          detailAnime?.themes.length - 1 === index
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
                      <Text category="Duration">{detailAnime?.duration}</Text>
                      <Text category="Studio">
                        {detailAnime?.studios?.map((studio) => studio.name)}
                      </Text>
                      <Text category="Status"> {detailAnime?.status}</Text>
                    </div>
                  </div>
                </div>

                <Synopsis>
                  {detailAnime?.synopsis
                    ? detailAnime?.synopsis
                    : "No synopsis."}
                </Synopsis>

                <div className="mt-8 md:pt-8 md:px-10 lg:px-16">
                  <h1 className="text-3xl md:text-4xl mb-7 selection:bg-emerald-500 selection:text-emerald-900">
                    Photos
                  </h1>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {photosAnime !== [] ? (
                      <>
                        {photosAnime?.map((data, index) => (
                          <div className="rounded overflow-hidden" key={index}>
                            <CardImage
                              src={data?.webp?.large_image_url}
                              alt=""
                              width="100%"
                              height="100%"
                              className="rounded selection:bg-pink-500"
                            />
                          </div>
                        ))}
                      </>
                    ) : (
                      <p className="text-md md:text-lg text-justify md:text-left selection:bg-green-500 selection:text-green-900">
                        No photos.
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default DetailAnime;
