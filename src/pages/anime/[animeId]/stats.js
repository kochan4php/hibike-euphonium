import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import action from "../../../action";
import { ErrorMessage, Loading, TitleSection, Text } from "../../../components";
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
          <div className="container text-white md:mt-8">
            {isError ? (
              <ErrorMessage message="Kebanyakan request di API nya" />
            ) : (
              <div className="flex flex-col md:flex-row gap-10">
                <div className="text-lg selection:bg-pink-500 selection:text-pink-900 w-full md:w-1/2">
                  <h3 className="text-2xl mb-4 md:mb-3 selection:bg-violet-500 selection:text-violet-900 pb-3 border-b border-slate-500">
                    Summary Stats
                  </h3>
                  <Text category="Watching">{statistics?.watching}</Text>
                  <Text category="Completed">{statistics?.completed}</Text>
                  <Text category="On-Hold">{statistics?.on_hold}</Text>
                  <Text category="Dropped">{statistics?.dropped}</Text>
                  <Text category="Plan to Watch">
                    {statistics?.plan_to_watch}
                  </Text>
                  <Text category="Total">{statistics?.total}</Text>
                </div>
                <div className="text-lg text-left selection:bg-pink-500 selection:text-pink-900 w-full md:w-1/2">
                  <h3 className="text-2xl mb-4 md:mb-3 selection:bg-violet-500 selection:text-violet-900 pb-3 border-b border-slate-500">
                    Score Stats
                  </h3>
                  {statistics?.scores
                    .slice(0)
                    .reverse()
                    .map((data, index) => (
                      <div
                        className="mb-3 flex gap-5 justify-evenly items-center"
                        key={index}
                      >
                        <span>{data?.score}. </span>
                        <progress
                          value={data?.percentage}
                          className="w-1/3 xl:w-2/3 text-teal-500 h-3"
                        ></progress>
                        <span className="text-sm">
                          {data?.percentage} % ({data?.votes} votes)
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </LayoutDetailPage>
  );
};

export default Stats;
