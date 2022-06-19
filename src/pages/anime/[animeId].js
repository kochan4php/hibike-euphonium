import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import action from "../../action";
import {
  ErrorMessage,
  Loading,
  ParallaxCardImage,
  ParallaxImage,
  Synopsis,
  Text,
} from "../../components";

const { getDetailAnime, getPhotoAnime } = action;

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

  useEffect(() => {
    getData(animeId);
  }, [animeId]);

  return (
    <section className="min-w-full bg-gradient-to-tl from-slate-800 via-slate-700 to-slate-800 text-white pt-16 pb-6 min-h-screen">
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
              <ErrorMessage message="Kebanyakan Request di API nya" />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="flex justify-center items-center selection:bg-pink-500">
                    <ParallaxImage
                      image={detailAnime?.images?.webp?.large_image_url}
                      alt={detailAnime?.title}
                    />
                  </div>
                  <div className="flex flex-col justify-start md:col-start-2 md:col-end-4 p-4 md:py-0">
                    {detailAnime?.score && (
                      <span className="gap-3 mt-3 md:mt-0 md:mb-4 text-2xl md:text-xl lg:text-2xl flex items-center selection:bg-emerald-500 selection:text-emerald-900">
                        <span className="text-3xl text-yellow-500">⭐</span>{" "}
                        <span>{detailAnime?.score}</span>
                      </span>
                    )}
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold my-6 md:my-0 md:mb-5 selection:bg-violet-500 selection:text-violet-900">
                      {detailAnime?.title}
                    </h1>
                    <div className="text-lg selection:bg-pink-500 selection:text-pink-900">
                      <Text category="Release">
                        {detailAnime?.aired?.string}
                      </Text>
                      <Text category="Rank">{detailAnime?.rank}</Text>
                      <Text category="Genre">
                        {detailAnime?.themes?.map((genre, index) => {
                          const coma =
                            detailAnime?.themes.length - 1 === index
                              ? ""
                              : ", ";

                          return (
                            <span key={index}>
                              {genre.name}
                              {coma}
                            </span>
                          );
                        })}
                      </Text>
                      <Text category="Type">{detailAnime?.type}</Text>
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

                {photosAnime !== [] ? (
                  <div className="mt-10 lg:mt-0 md:pt-10 lg:pt-16">
                    <h1 className="text-3xl md:text-4xl mb-7 selection:bg-emerald-500 selection:text-emerald-900">
                      Photos
                    </h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
                      {photosAnime?.map((data, index) => (
                        <ParallaxCardImage
                          image={data?.webp?.large_image_url}
                          alt={`gambar ${index + 1}`}
                          key={index}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-md md:text-lg text-justify md:text-left selection:bg-green-500 selection:text-green-900">
                    No photos.
                  </p>
                )}
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default DetailAnime;
