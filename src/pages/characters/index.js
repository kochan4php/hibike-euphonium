import { MainCard, TitleSection } from "../../components";
import JIKAN_API from "../../config/Jikan";

export const getServerSideProps = async () => {
  const request = await fetch(`${JIKAN_API}/anime/35678/characters`);
  const response = await request.json();
  const data = await response;
  return { props: { data } };
};

const Characters = ({ data }) => {
  const dataCharacters = data.data;

  return (
    <section
      className="min-w-full bg-gradient-to-tl from-slate-800 via-slate-700 to-slate-800 py-12 min-h-screen"
      id="anime"
    >
      <div className="container text-white mt-8 mb-6 px-0 lg:px-4">
        <TitleSection>All Characters</TitleSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-6">
          {dataCharacters.map(({ character, role }) => {
            const name = character?.name.split(", ").join(" ");

            return (
              <MainCard
                path="/characters"
                id={character?.mal_id}
                image={character?.images?.webp?.image_url}
                key={character?.mal_id}
              >
                <div className="text-slate-50 pt-4 tracking-wide transition-colors duration-300">
                  <h1 className="text-base font-semibold mb-3 selection:bg-teal-500 selection:text-teal-800">
                    {name}
                  </h1>
                  <h1 className="text-base selection:bg-teal-500 selection:text-teal-800">
                    Role: {role}
                  </h1>
                </div>
              </MainCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Characters;
