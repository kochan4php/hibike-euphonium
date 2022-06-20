import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import action from "../../../action";
import { ErrorMessage, Loading, TitleSection } from "../../../components";
import routesAnime from "../../../helper/_routesAnime";
import LayoutDetailPage from "../../../layout/layoutDetailPage";

const { getAnimeReviews } = action;

const Reviews = () => {
  const router = useRouter();
  const { animeId } = router.query;

  const [reviews, setReviews] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async (id) => {
    const getReviews = await getAnimeReviews(id);
    if (getReviews) setReviews(getReviews);
    else setIsError(true);
    setIsLoading(false);
  };

  useEffect(() => {
    getData(animeId);
    console.log(reviews);
  }, [animeId]);

  return (
    <LayoutDetailPage routes={routesAnime(animeId)}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="container text-white mt-8">
            <TitleSection>Reviews</TitleSection>
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

export default Reviews;
