import { Fragment } from "react";
import { Card, CardImage, FlipCard, TitleSection } from "../../components";
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:gap-7 md:flex md:flex-wrap md:justify-center">
          {dataCharacters.map(({ character, role }, index) => {
            const name = character?.name.split(", ").join(" ");

            return (
              <Fragment key={index}>
                <FlipCard>
                  <div className="flip-card-front absolute w-full h-full rounded-md overflow-hidden">
                    <CardImage
                      src={character?.images?.webp?.image_url}
                      className="object-cover min-h-full"
                    />
                  </div>
                  <div className="flip-card-back absolute w-full h-full bg-gray-900 flex flex-col justify-center items-center rounded-md p-2">
                    <h1 className="text-lg mb-2 font-bold">{name}</h1>
                    <h1 className="text-md mb-2">{role}</h1>
                  </div>
                </FlipCard>

                <div className="md:hidden">
                  <Card bgimage={character?.images?.webp?.image_url}>
                    <CardImage
                      src={character?.images?.webp?.image_url}
                      className="rounded"
                    />
                    <div className="text-slate-50 pt-4 tracking-wide transition-colors duration-300">
                      <h1 className="text-base font-semibold mb-3 selection:bg-teal-500 selection:text-teal-800">
                        {name}
                      </h1>
                      <h1 className="text-base selection:bg-teal-500 selection:text-teal-800">
                        Role: {role}
                      </h1>
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
