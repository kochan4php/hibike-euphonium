import { useEffect } from "react";
import JIKAN_API from "../../config/Jikan";

const Characters = ({ hibikeEuphoniumCharacters }) => {
  const dataCharacters = hibikeEuphoniumCharacters.data;

  useEffect(() => {
    console.log(dataCharacters);
  }, []);

  return (
    <section className="min-w-full bg-slate-700 py-12 min-h-screen" id="anime">
      <div className="container text-white my-6">
        <div className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold mt-8 mb-8 md:mb-12">
          <h1>All Characters</h1>
        </div>

        <div className="flex flex-wrap gap-7 justify-center">
          {dataCharacters.map((data, index) => {
            const name = data?.character?.name.split(", ").join(" ");

            return (
              <div class="flip-card bg-transparent w-[200px] h-[300px] hidden lg:block">
                <div class="flip-card-inner relative h-full w-full text-center">
                  <div class="flip-card-front absolute w-full h-full border border-slate-500 rounded-md overflow-hidden">
                    <img
                      src={data?.character?.images?.webp?.image_url}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div class="flip-card-back absolute w-full h-full bg-slate-800 flex flex-col justify-center items-center rounded-md">
                    <h1 className="text-lg font-bold">{name}</h1>
                    <h1 className="text-md">{data?.role}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Characters;

export const getStaticProps = async () => {
  const response = await fetch(`${JIKAN_API}/anime/35678/characters`);
  const data = await response.json();
  const hibikeEuphoniumCharacters = await data;

  return {
    props: {
      hibikeEuphoniumCharacters,
    },
  };
};
