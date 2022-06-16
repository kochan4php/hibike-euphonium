import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { About, Intro, MainCard, TitleSection } from "../components";
import JIKAN_API from "../config/Jikan";

const ErrorText = () => (
  <h1 className="text-xl md:text-2xl font-medium text-center">
    Gagal mengambil data dari API, coba refresh ulang browsernya
  </h1>
);

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

    return () => typed.destroy();
  }, []);

  return (
    <>
      <div
        className="min-h-screen bg-fixed bg-[url('/img/4.webp')] md:bg-[url('/img/2.webp')] bg-cover bg-center bg-no-repeat"
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
      </div>

      <section className="min-w-full bg-gradient-to-tl from-slate-700 to-slate-800 text-white py-10 flex items-center">
        <Intro />
      </section>

      <section
        className="min-w-full bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800 py-12"
        id="anime"
      >
        <div className="container px-0 lg:px-4">
          <TitleSection>Anime</TitleSection>
          {dataAnijme ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-6">
              {dataAnijme.map(({ mal_id, images, title, score }) => {
                if (mal_id === 51994 || mal_id === 26111) return;

                return (
                  <MainCard
                    key={mal_id}
                    path="anime"
                    id={mal_id}
                    image={images?.webp?.large_image_url}
                    title={title}
                    score={score}
                  />
                );
              })}
            </div>
          ) : (
            <ErrorText />
          )}
        </div>
      </section>

      <section
        className="min-w-full bg-gradient-to-br from-slate-700 to-slate-800 py-12"
        id="novel"
      >
        <div className="container px-0 lg:px-4">
          <TitleSection>Novel</TitleSection>
          {dataNovel ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
              {dataNovel.map(({ mal_id, images, title, score }) => {
                if (mal_id === 129104 || mal_id === 10404) return;

                return (
                  <MainCard
                    key={mal_id}
                    path="novel"
                    id={mal_id}
                    image={images?.webp?.large_image_url}
                    title={title}
                    score={score}
                  />
                );
              })}
            </div>
          ) : (
            <ErrorText />
          )}
        </div>
      </section>

      <div className="min-h-screen bg-fixed bg-[url('/img/3.webp')] md:bg-[url('/img/1.webp')] bg-cover bg-center bg-no-repeat">
        <section
          className="min-h-screen min-w-full bg-slate-800 bg-opacity-60 py-20 md:py-0"
          id="about"
        >
          <About />
        </section>
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const requestAnime = await fetch(`${JIKAN_API}/anime?q=hibike%20euphonium`);
  const requestManga = await fetch(`${JIKAN_API}/manga?q=hibike%20euphonium`);
  const responseAnime = await requestAnime.json();
  const responseManga = await requestManga.json();
  const jikanAnime = await responseAnime;
  const jikanNovel = await responseManga;

  return {
    props: {
      jikanAnime,
      jikanNovel,
    },
  };
};
