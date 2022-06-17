import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Tilt from "react-parallax-tilt";
import action from "../../action";
import {
  Button,
  CardImage,
  ErrorMessage,
  Loading,
  Synopsis,
  Text,
} from "../../components";

const { getDetailCharacter, getPhotoCharacter } = action;

const DetailCharacter = () => {
  const router = useRouter();
  const { characterId } = router.query;

  const [detailCharacter, setDetailCharacter] = useState([]);
  const [photosCharacter, setPhotosCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async (id) => {
    const getDataCharacter = await getDetailCharacter(id);
    const getPhotosCharacter = await getPhotoCharacter(id);

    if (getDataCharacter && getPhotosCharacter) {
      console.log(getDataCharacter);
      console.log(getPhotosCharacter);
      setDetailCharacter(getDataCharacter);
      setPhotosCharacter(getPhotosCharacter);
      setIsError(false);
    } else {
      setIsError(true);
    }

    setIsLoading(false);
  };

  const handleClick = () => router.back();

  useEffect(() => {
    getData(characterId);
  }, [characterId]);

  return (
    <section className="min-w-full bg-gradient-to-tl from-slate-800 via-slate-700 to-slate-800 text-white pt-16 pb-6 min-h-screen">
      <Button onClick={handleClick}>&laquo;&nbsp;Back</Button>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="container my-10 p-4">
            {isError ? (
              <ErrorMessage message="Kebanyakan Request di API nya" />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="flex justify-center items-center selection:bg-pink-500">
                    <Tilt
                      perspective={700}
                      className="justify-center hidden lg:flex"
                    >
                      <img
                        src={detailCharacter?.images?.webp?.image_url}
                        alt={detailCharacter?.title}
                        className="rounded shadow shadow-slate-800 w-full md:w-4/5 lg:w-full"
                      />
                    </Tilt>
                    <div className="flex justify-center lg:hidden">
                      <img
                        src={detailCharacter?.images?.webp?.image_url}
                        alt={detailCharacter?.title}
                        className="rounded shadow shadow-slate-800 w-full md:w-4/5 lg:w-full"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-start md:col-start-2 md:col-end-4 p-4 md:py-0">
                    <div className="flex flex-col">
                      <h1 className="text-3xl lg:text-4xl font-semibold mt-8 mb-5 md:mt-0 md:mb-5 selection:bg-violet-500 selection:text-violet-900">
                        {detailCharacter?.name}
                      </h1>
                      <div className="text-lg selection:bg-pink-500 selection:text-pink-900">
                        <Text category="Kanji">
                          {detailCharacter?.name_kanji}
                        </Text>
                        <Text category="Favorite">
                          {detailCharacter?.favorites}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>

                <Synopsis>
                  {detailCharacter?.about
                    ? detailCharacter?.about
                    : "No synopsis."}
                </Synopsis>

                <div className="mt-8 md:pt-8 md:px-10 lg:px-16">
                  <h1 className="text-3xl md:text-4xl mb-7 selection:bg-emerald-500 selection:text-emerald-900">
                    Photos
                  </h1>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
                    {photosCharacter !== [] ? (
                      <>
                        {photosCharacter?.map((data, index) => (
                          <div className="rounded" key={index}>
                            <Tilt perspective={700} className="hidden lg:block">
                              <CardImage
                                src={data?.jpg?.image_url}
                                alt=""
                                width="100%"
                                height="100%"
                                className="rounded selection:bg-pink-500"
                              />
                            </Tilt>

                            <CardImage
                              src={data?.jpg?.image_url}
                              alt=""
                              width="100%"
                              height="100%"
                              className="rounded selection:bg-pink-500 lg:hidden"
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

export default DetailCharacter;
