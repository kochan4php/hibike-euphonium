import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ErrorMessage, Loading, TitleSection } from "../../../components";
import routesAnime from "../../../helper/_routesAnime";
import LayoutDetailPage from "../../../layout/layoutDetailPage";
import { getAnimeVideos } from "@/action";

const Videos = () => {
  const router = useRouter();
  const { animeId } = router.query;

  const [videos, setVideos] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async (id) => {
    const getVideos = await getAnimeVideos(id);
    if (getVideos) setVideos(getVideos);
    else setIsError(true);
    setIsLoading(false);
  };

  useEffect(() => {
    getData(animeId);
  }, [animeId]);

  return (
    <LayoutDetailPage routes={routesAnime(animeId)}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="container text-white mt-8">
            <TitleSection>Videos</TitleSection>
          </div>
          <div className="container text-white mt-8 mb-6 xl:px-0">
            {isError ? (
              <ErrorMessage message="Kebanyakan Request di API nya" />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
                  {videos?.promo?.map((data, index) => (
                    <iframe
                      key={index}
                      src={data?.trailer?.embed_url}
                      width="100%"
                      className="selection:bg-violet-500 aspect-video"
                    ></iframe>
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </LayoutDetailPage>
  );
};

export default Videos;
