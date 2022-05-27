import { useEffect } from "react";
import JIKAN_API from "../../config/Jikan";

const Characters = ({ hibikeEuphoniumCharacters }) => {
  useEffect(() => {
    console.log(hibikeEuphoniumCharacters.data);
  }, []);

  return (
    <section className="min-w-full bg-slate-700 py-12 min-h-screen" id="anime">
      <div className="container">
        <h1>Hello Characters</h1>
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
