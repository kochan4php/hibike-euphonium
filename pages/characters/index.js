import { Fragment } from "react";
import { Card } from "../../components";
import JIKAN_API from "../../config/Jikan";

const Characters = ({ hibikeEuphoniumCharacters }) => {
  const dataCharacters = hibikeEuphoniumCharacters.data;

  return (
    <section className="min-w-full bg-slate-700 py-12 min-h-screen" id="anime">
      <div className="container text-white my-6">
        <div className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold mt-8 md:mt-10 mb-8 md:mb-12">
          <h1>All Characters</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:flex lg:gap-7 lg:flex-wrap lg:justify-center">
          {dataCharacters.map((data, index) => {
            const name = data?.character?.name.split(", ").join(" ");

            return (
              <Fragment key={index}>
                <div className="flip-card bg-transparent w-[200px] h-[300px] hidden lg:block">
                  <div className="flip-card-inner relative h-full w-full text-center">
                    <div className="flip-card-front absolute w-full h-full border border-slate-500 rounded-md overflow-hidden">
                      <img
                        src={data?.character?.images?.webp?.image_url}
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flip-card-back absolute w-full h-full bg-slate-800 flex flex-col justify-center items-center rounded-md p-2">
                      <h1 className="text-lg mb-2 font-bold">{name}</h1>
                      <h1 className="text-md mb-2">{data?.role}</h1>
                    </div>
                  </div>
                </div>

                <div className="lg:hidden">
                  <Card
                    bgcolor="bg-slate-700"
                    shadowSize="shadow-lg"
                    shadow="shadow-slate-800"
                  >
                    <img
                      src={data?.character?.images?.webp?.image_url}
                      alt=""
                      width="100%"
                      heigth="100%"
                    />
                    <div className="text-slate-50 p-4 group-hover:text-fuchsia-400 tracking-wide transition-colors duration-300 selection:bg-teal-500 selection:text-teal-800 block">
                      <h1 className="text-sm font-semibold mb-3">{name}</h1>
                      <h1 className="text-sm">Role: {data?.role}</h1>
                    </div>
                  </Card>
                </div>
              </Fragment>
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
