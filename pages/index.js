import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { About, Card, Intro, TitleSection } from "../components";
import JIKAN_API from "../config/Jikan";

const Home = ({ jikanAnime, jikanNovel }) => {
  const text = useRef(null);
  const dataAnijme = jikanAnime.data;
  const dataNovel = jikanNovel.data;

  useEffect(() => {
    const typed = new Typed(text.current, {
      strings: [
        "響け！ユーフォニアム",
        "Hibike! Euphonium",
        "Sound! Euphonium",
      ],
      loop: true,
      typeSpeed: 70,
      backSpeed: 70,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div
        className="min-h-screen bg-fixed bg-[url('/img/4.webp')] md:bg-[url('/img/2.webp')] bg-cover bg-center"
        id="home"
      >
        <section className="min-h-screen min-w-full bg-slate-800 bg-opacity-50">
          <div className="container min-h-screen flex justify-center items-center">
            <h1
              ref={text}
              className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center selection:bg-pink-500 selection:text-pink-800"
            ></h1>
          </div>
        </section>
        <section className="min-w-full bg-slate-800 text-white py-10 flex items-center">
          <Intro />
        </section>
        <section className="min-w-full bg-slate-700 py-12" id="anime">
          <div className="container">
            <TitleSection>Anime</TitleSection>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-5 mx-auto">
              {dataAnijme.map((data, index) => {
                if (index === 11 || index === 8) {
                  return;
                }

                return (
                  <Card
                    path={`/anime/${data?.mal_id}`}
                    key={data.mal_id}
                    bgcolor="bg-slate-700"
                    shadowSize="shadow-lg"
                    shadow="shadow-slate-800"
                  >
                    <img
                      src={data?.images?.webp?.large_image_url}
                      alt={data?.title}
                      width="100%"
                      heigth="100%"
                    />
                    <div className="absolute -top-0 -left-0 bg-slate-100 text-slate-800 px-2 py-1 rounded-tl-md border bg-opacity-75 border-sky-500 z-50">
                      <span>
                        {data.score ? data?.score : "Unknown"}&nbsp;
                        <span className="text-yellow-600">
                          {data.score && "⭐"}
                        </span>
                      </span>
                    </div>
                    <a className="text-slate-50 px-4 py-6 group-hover:text-fuchsia-400 tracking-wide transition-colors duration-300 selection:bg-teal-500 selection:text-teal-800 block">
                      {data?.title}
                    </a>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        <section className="min-w-full bg-slate-800 py-12" id="novel">
          <div className="container">
            <TitleSection>Novel</TitleSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
              {dataNovel.map((data, index) => {
                if (index === 4 || index === 5) {
                  return;
                }

                return (
                  <Card
                    path={`/novel/${data?.mal_id}`}
                    key={data.mal_id}
                    bgcolor="bg-slate-800"
                    shadowSize="shadow-md"
                    shadow="shadow-slate-600"
                  >
                    <img
                      src={data?.images?.webp?.large_image_url}
                      alt={data?.title}
                      width="100%"
                      heigth="100%"
                    />
                    <div className="absolute -top-0 -left-0 bg-slate-100 text-slate-800 px-2 py-1 rounded-tl-md border bg-opacity-75 border-sky-500 z-50">
                      <span>
                        {data.score ? data?.score : "Unknown"}&nbsp;
                        <span className="text-yellow-600">
                          {data.score && "⭐"}
                        </span>
                      </span>
                    </div>
                    <a className="text-slate-50 px-4 py-6 group-hover:text-fuchsia-400 tracking-wide transition-colors duration-300 selection:bg-teal-500 selection:text-teal-800 block">
                      {data?.title}
                    </a>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <About />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const responseAnime = await fetch(`${JIKAN_API}/anime?q=hibike%20euphonium`);
  const responseManga = await fetch(`${JIKAN_API}/manga?q=hibike%20euphonium`);
  const dataAnime = await responseAnime.json();
  const dataNovel = await responseManga.json();
  const jikanAnime = await dataAnime;
  const jikanNovel = await dataNovel;

  return {
    props: {
      jikanAnime,
      jikanNovel,
    },
  };
};
