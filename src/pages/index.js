import { useEffect, useRef, Fragment } from "react";
import Typed from "typed.js";
import {
  About,
  Card,
  Intro,
  TitleSection,
  CardImage,
  CardMobile,
  FloatingRating,
  CardLink,
} from "../components";
import JIKAN_API from "../config/Jikan";

const LoopCard = ({ id, image, title, score, path }) => (
  <>
    <CardMobile bgimage={image} path={`/${path}/${id}`}>
      <CardImage src={image} alt={title} className="rounded" />
      {score && <FloatingRating rating={score} />}
      <CardLink py="py-4">{title}</CardLink>
    </CardMobile>

    <Card
      path={`/${path}/${id}`}
      bgcolor="bg-slate-700"
      shadowSize="shadow-lg"
      shadow="shadow-slate-800"
    >
      <CardImage src={image} alt={title} />
      {score && <FloatingRating rating={score} />}
      <CardLink px="px-4" py="py-6">
        {title}
      </CardLink>
    </Card>
  </>
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
      </div>

      <section className="min-w-full bg-slate-800 text-white py-10 flex items-center">
        <Intro />
      </section>
      <section className="min-w-full bg-slate-700 py-12" id="anime">
        <div className="container px-0 md:px-4">
          <TitleSection>Anime</TitleSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 md:gap-6">
            {dataAnijme.map(({ mal_id, images, title, score }) => {
              if (mal_id === 51994 || mal_id === 51995 || mal_id === 26111)
                return;

              return (
                <LoopCard
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
        </div>
      </section>
      <section className="min-w-full bg-slate-800 py-12" id="novel">
        <div className="container px-0 md:px-4">
          <TitleSection>Novel</TitleSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
            {dataNovel.map(({ mal_id, images, title, score }) => {
              if (mal_id === 129104 || mal_id === 10404) return;

              return (
                <LoopCard
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
        </div>
      </section>

      <div className="min-h-screen bg-fixed bg-[url('/img/3.webp')] md:bg-[url('/img/1.webp')] bg-cover bg-center">
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
