import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import action from "../../action";
import { Button, CardImage, Loading, Synopsis, Text } from "../../components";

const { getDetailNovel, getPhotoNovel } = action;

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
      setDetailNovel(getDataNovel);
      setPhotosNovel(getPhotosNovel);
      setIsError(false);
    } else {
      setIsError(true);
    }

    setIsLoading(false);
  };

  const handleClick = () => router.push("/#novel");

  useEffect(() => {
    getData(novelId);
  }, [novelId]);

  return (
    <section className="min-w-full bg-slate-800 text-white pt-16 pb-6 min-h-screen">
      <Button onClick={handleClick}>&laquo;&nbsp;Back</Button>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="container my-10 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex justify-center items-center selection:bg-pink-500">
              <Tilt perspective={700} className="flex justify-center">
                <img
                  src={detailNovel?.images?.webp?.large_image_url}
                  alt={detailNovel?.title}
                  className="rounded shadow shadow-slate-800 w-3/5 md:w-full lg:w-3/5"
                />
              </Tilt>
            </div>
            <div className="flex flex-col justify-start md:col-start-2 md:col-end-4 p-4 md:py-0">
              {detailNovel?.score && (
                <span className="gap-3 mt-2 md:mt-0 md:mb-4 text-2xl md:text-xl lg:text-2xl flex items-center selection:bg-emerald-500 selection:text-emerald-900">
                  <span className="text-3xl text-yellow-500">⭐</span>
                  <span>{detailNovel?.score}</span>
                </span>
              )}
              <h1 className="text-3xl lg:text-4xl font-semibold my-8 md:my-0 md:mb-5 selection:bg-violet-500 selection:text-violet-900">
                {detailNovel?.title}
              </h1>
              <div className="text-lg selection:bg-pink-500 selection:text-pink-900">
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

          <div className="mt-8 md:pt-8 md:px-10 lg:px-16">
            <h1 className="text-3xl md:text-4xl mb-7 selection:bg-emerald-500 selection:text-emerald-900">
              Photos
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {photosNovel !== [] ? (
                <>
                  {photosNovel?.map((data, index) => (
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
        </div>
      )}
    </section>
  );
};

export default DetailNovel;
