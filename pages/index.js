import { useEffect, useRef, Fragment } from "react";
import Typed from "typed.js";
import {
  About,
  Card,
  Intro,
  TitleSection,
  CardImage,
  CardMobile,
} from "../components";
import JIKAN_API from "../config/Jikan";

const Home = ({ jikanAnime, jikanNovel }) => {
  const text = useRef(null);
  const dataAnijme = jikanAnime.data;
  const dataNovel = jikanNovel.data;
  console.log(dataAnijme);

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
          <div className="container px-0 md:px-4">
            <TitleSection>Anime</TitleSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 md:gap-6">
              {dataAnijme.map(({ mal_id, images, title, score, status }) => {
                if (mal_id === 51994 || mal_id === 51995 || mal_id === 26111)
                  return;

                return (
                  <Fragment key={mal_id}>
                    <CardMobile
                      bgimage={images?.webp?.large_image_url}
                      path={`/anime/${mal_id}`}
                    >
                      <CardImage
                        src={images?.webp?.large_image_url}
                        alt={title}
                      />
                      <div className="absolute -top-0 -left-0 bg-slate-100 text-slate-800 px-2 py-1 border bg-opacity-75 border-sky-500 z-50 rounded-br text-sm">
                        {score && (
                          <span>
                            {score}
                            &nbsp;
                            <span className="text-yellow-600">
                              {score && "⭐"}
                            </span>
                          </span>
                        )}
                      </div>
                      <a className="text-white group-hover:text-fuchsia-400 tracking-wide transition-colors duration-300 selection:bg-teal-500 selection:text-teal-800 block py-3 px-3 font-medium text-xl">
                        {title}
                      </a>
                    </CardMobile>

                    <Card
                      path={`/anime/${mal_id}`}
                      bgcolor="bg-slate-700"
                      shadowSize="shadow-lg"
                      shadow="shadow-slate-800"
                    >
                      <CardImage
                        src={images?.webp?.large_image_url}
                        alt={title}
                      />
                      <div className="absolute -top-0 -left-0 bg-slate-100 text-slate-800 px-2 py-1 rounded-tl-md border bg-opacity-75 border-sky-500 z-50">
                        <span>
                          {score ? score : "Unknown"}&nbsp;
                          <span className="text-yellow-600">
                            {score && "⭐"}
                          </span>
                        </span>
                      </div>
                      <a className="text-slate-50 px-4 py-6 group-hover:text-fuchsia-400 tracking-wide transition-colors duration-300 selection:bg-teal-500 selection:text-teal-800 block">
                        {title}
                      </a>
                    </Card>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </section>
        <section className="min-w-full bg-slate-800 py-12" id="novel">
          <div className="container px-0 md:px-4">
            <TitleSection>Novel</TitleSection>
            <div className="grid grid-cols-1 sm:grid-cols-4 md:gap-6">
              {dataNovel.map(({ mal_id, images, title, score }) => {
                if (mal_id === 129104 || mal_id === 10404) return;

                return (
                  <Fragment key={mal_id}>
                    <CardMobile
                      bgimage={images?.webp?.large_image_url}
                      path={`/novel/${mal_id}`}
                    >
                      <CardImage
                        src={images?.webp?.large_image_url}
                        alt={title}
                      />
                      <div className="absolute -top-0 -left-0 bg-slate-100 text-slate-800 px-2 py-1 border bg-opacity-75 border-sky-500 z-50 rounded-br text-sm">
                        <span>
                          {score ? score : "Unknown"}&nbsp;
                          <span className="text-yellow-600">
                            {score && "⭐"}
                          </span>
                        </span>
                      </div>
                      <a className="text-white group-hover:text-fuchsia-400 tracking-wide transition-colors duration-300 selection:bg-teal-500 selection:text-teal-800 block py-3 px-1 font-medium text-lg">
                        {title}
                      </a>
                    </CardMobile>

                    <Card
                      path={`/novel/${mal_id}`}
                      bgcolor="bg-slate-900"
                      shadowSize="shadow-lg"
                      shadow="shadow-slate-600"
                    >
                      <CardImage
                        src={images?.webp?.large_image_url}
                        alt={title}
                      />
                      <div className="absolute -top-0 -left-0 bg-slate-100 text-slate-800 px-2 py-1 rounded-tl-md border bg-opacity-75 border-sky-500 z-50">
                        <span>
                          {score ? score : "Unknown"}&nbsp;
                          <span className="text-yellow-600">
                            {score && "⭐"}
                          </span>
                        </span>
                      </div>
                      <a className="text-slate-50 px-4 py-6 group-hover:text-fuchsia-400 tracking-wide transition-colors duration-300 selection:bg-teal-500 selection:text-teal-800 block">
                        {title}
                      </a>
                    </Card>
                  </Fragment>
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
