import { getAnimeHibikeEuphonium } from "@/action";
import { ErrorMessage, Loading, MainCard, TitleSection } from "@/components";
import { RenderIfFalse, RenderIfTrue } from "@/utils";
import { useEffect, useState } from "react";

const Anime = () => {
  const [anime, setAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const res = await getAnimeHibikeEuphonium();

    if (res.status === 200) {
      if (res.data.success !== false) {
        setAnime(res.data.data);
        setIsLoading(false);
        console.log(anime);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="min-w-full py-7">
      <RenderIfTrue isTrue={isLoading}>
        <Loading />
      </RenderIfTrue>
      <RenderIfFalse isFalse={isLoading}>
        <div className="container px-0 lg:px-4">
          <TitleSection centerText>Anime</TitleSection>
          <RenderIfTrue isTrue={anime.length > 0}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-6 mt-7">
              {anime?.map(({ mal_id, images, title, score }) => {
                if (mal_id === 51994 || mal_id === 26111) return;

                return (
                  <MainCard
                    key={mal_id}
                    path={`/anime/${mal_id}/details`}
                    id={mal_id}
                    image={images?.webp?.large_image_url}
                    title={title}
                    score={score}
                    py="py-5"
                    fontsize="text-base"
                  />
                );
              })}
            </div>
          </RenderIfTrue>
          <RenderIfFalse isFalse={anime.length > 0}>
            <ErrorMessage message="Gagal mengambil data dari API, coba refresh ulang browsernya" />
          </RenderIfFalse>
        </div>
      </RenderIfFalse>
    </section>
  );
};

export default Anime;
