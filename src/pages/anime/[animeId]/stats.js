import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import action from "../../../action";
import { ErrorMessage, Loading, TitleSection } from "../../../components";
import routesAnime from "../../../helper/_routesAnime";
import LayoutDetailPage from "../../../layout/layoutDetailPage";

const { getAnimeStats } = action;

const Stats = () => {
  const router = useRouter();
  const { animeId } = router.query;

  const [statistics, setStatistics] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async (id) => {
    const getStatistics = await getAnimeStats(id);
    if (getStatistics) setStatistics(getStatistics);
    else setIsError(true);
    setIsLoading(false);
  };

  useEffect(() => {
    getData(animeId);
    console.log(statistics);
  }, [animeId]);

  return (
    <LayoutDetailPage routes={routesAnime(animeId)}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="container text-white mt-8">
            <TitleSection>Statistics</TitleSection>
          </div>
          <div className="container text-white mt-8 mb-6">
            {isError ? (
              <ErrorMessage message="Kebanyakan request di API nya" />
            ) : (
              <h1>Berhasil Bang Hehehe</h1>
            )}
          </div>
        </>
      )}
    </LayoutDetailPage>
  );
};

export default Stats;
