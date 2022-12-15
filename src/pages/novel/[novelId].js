import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  ErrorMessage,
  Loading,
  NavbarDetail,
  ParallaxCardImage,
  ParallaxImage,
  Synopsis,
  Text,
} from "../../components";
import createRoute from "../../helper/createRoute";
import { getDetailNovel, getPhotoNovel } from "@/action";

const routes = [
  createRoute("/", "Details"),
  createRoute("/", "Characters"),
  createRoute("/", "Stats"),
  createRoute("/", "Reviews"),
  createRoute("/", "Pictures"),
];

const DetailNovel = () => {
  const router = useRouter();
  const { novelId } = router.query;
  const [detailNovel, setDetailNovel] = useState([]);
  const [photosNovel, setPhotosNovel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async (id) => {
    const getDataNovel = await getDetailNovel(id);
    const getPhotosNovel = await getPhotoNovel(id);

    if (getDataNovel && getPhotosNovel) {
      setDetailNovel(getDataNovel.data.data);
      setPhotosNovel(getPhotosNovel.data.data);
      setIsError(false);
    } else {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getData(novelId);
  }, [novelId]);

  return (
    <section className="min-w-full bg-gradient-to-tl from-slate-900 via-slate-800 to-slate-900 text-white pt-16 pb-6 min-h-screen">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavbarDetail routes={routes} />
          <div className="container my-10 p-4">
            {isError ? (
              <ErrorMessage message="Kebanyakan Request di API nya" />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="flex justify-center items-center selection:bg-pink-500">
                    <ParallaxImage
                      image={detailNovel?.images?.webp?.image_url}
                      alt={detailNovel?.title}
                    />
                  </div>
                  <div className="flex flex-col justify-start md:col-start-2 md:col-end-4 p-4 md:py-0">
                    {detailNovel?.score && (
                      <span className="gap-3 mt-3 md:mt-0 md:mb-4 text-2xl md:text-xl lg:text-2xl flex items-center selection:bg-emerald-500 selection:text-emerald-900">
                        <span className="text-3xl text-yellow-500">⭐</span>
                        <span>{detailNovel?.score}</span>
                      </span>
                    )}
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold my-6 md:my-0 md:mb-5 selection:bg-violet-500 selection:text-violet-900">
                      {detailNovel?.title}
                    </h1>
                    <div className="text-lg selection:bg-pink-500 selection:text-pink-900">
                      <Text category="Release">
                        {detailNovel?.published?.string}
                      </Text>
                      <Text category="Rank">{detailNovel?.rank}</Text>
                      <Text category="Genre">
                        {detailNovel?.themes?.map((genre, index) => {
                          const coma =
                            detailNovel?.themes.length - 1 === index
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
                      <Text category="Type">{detailNovel?.type}</Text>
                      <Text category="Chapters">{detailNovel?.chapters}</Text>
                      <Text category="Volume">{detailNovel?.volumes}</Text>
                      <Text category="Status">{detailNovel?.status}</Text>
                    </div>
                  </div>
                </div>

                <Synopsis>
                  {detailNovel?.synopsis
                    ? detailNovel?.synopsis
                    : "No Synopsis"}
                </Synopsis>

                {photosNovel !== [] ? (
                  <div className="mt-10 lg:mt-0 md:pt-10 lg:pt-16">
                    <h1 className="text-3xl md:text-4xl mb-7 selection:bg-emerald-500 selection:text-emerald-900">
                      Photos
                    </h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
                      {photosNovel?.map((data, index) => (
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

export default DetailNovel;
