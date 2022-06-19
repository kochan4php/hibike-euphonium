import { ErrorMessage, MainCard, TitleSection } from "../../components";
import JIKAN_API from "../../config/Jikan";

export const getServerSideProps = async () => {
  const requestAnime = await fetch(`${JIKAN_API}/manga?q=hibike%20euphonium`);
  const responseAnime = await requestAnime.json();
  const jikanNovel = await responseAnime.data;

  return {
    props: {
      jikanNovel,
    },
  };
};

const Novel = ({ jikanNovel }) => (
  <section className="min-w-full bg-gradient-to-tl from-slate-900 via-slate-800 to-slate-900 py-12 min-h-screen">
    <div className="container px-0 lg:px-4">
      <TitleSection centerText>Novel</TitleSection>
      {jikanNovel ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {jikanNovel.map(({ mal_id, images, title, score }) => {
            if (mal_id === 129104 || mal_id === 10404) return;

            return (
              <MainCard
                key={mal_id}
                path={`/novel/${mal_id}`}
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

export default Novel;
