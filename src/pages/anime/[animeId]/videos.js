import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import action from "../../../action";
import LayoutDetailPage from "../../../layout/layoutDetailPage";
import routesAnime from "./_routesAnime";
import {
  Loading,
  ErrorMessage,
  TitleSection,
  ParallaxCardImage,
  ParallaxImage,
} from "../../../components";

const { getAnimeVideos } = action;

const Videos = () => {
  const router = useRouter();
  const { animeId } = router.query;

  const [videosAnime, setVideosAnime] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async (id) => {
    const getVideoAnime = await getAnimeVideos(id);
    if (getVideoAnime) setVideosAnime(getVideoAnime);
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
        <div className="container text-white mt-8 mb-6">
          {isError ? (
            <ErrorMessage message="Kebanyakan Request di API nya" />
          ) : (
            <>
              <TitleSection>Videos</TitleSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
                {videosAnime?.promo?.map((data, index) => (
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
      )}
    </LayoutDetailPage>
  );
};

export default Videos;
