import { ErrorMessage, MainCard, TitleSection } from "../../components";
import JIKAN_API from "../../config/Jikan";

export const getServerSideProps = async () => {
  const requestAnime = await fetch(`${JIKAN_API}/anime?q=hibike%20euphonium`);
  const responseAnime = await requestAnime.json();
  const jikanAnime = await responseAnime.data;

  return {
    props: {
      jikanAnime,
    },
  };
};

const Anime = ({ jikanAnime }) => (
  <section className="min-w-full bg-gradient-to-tl from-slate-800 via-slate-700 to-slate-800 py-12 min-h-screen">
    <div className="container px-0 lg:px-4">
      <TitleSection centerText>Anime</TitleSection>
      {jikanAnime ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-6">
          {jikanAnime.map(({ mal_id, images, title, score }) => {
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
      ) : (
        <ErrorMessage message="Gagal mengambil data dari API, coba refresh ulang browsernya" />
      )}
    </div>
  </section>
);

export default Anime;
