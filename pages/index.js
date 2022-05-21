import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Layout from "../layout";
import Typed from "typed.js";

const Home = ({ hibike }) => {
  const text = useRef(null);

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
    <Layout>
      <div className="min-h-screen bg-fixed bg-[url('/img/3.jpg')] md:bg-[url('/img/2.jpg')] bg-cover bg-center">
        <section className="min-h-screen min-w-full bg-slate-800 bg-opacity-50">
          <div className="container min-h-screen flex justify-center items-center">
            <h1
              ref={text}
              className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center selection:bg-pink-500 selection:text-pink-800"
            ></h1>
          </div>
        </section>
        <section className="min-w-full bg-slate-800 text-white py-10 min-h-screen flex items-center">
          <div className="container">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between w-full items-center lg:px-8 gap-4">
              <div className="w-full flex flex-col items-center lg:items-start min-h-full justify-center lg:justify-start">
                <h1 className="text-4xl text-center md:text-5xl font-semibold my-6">
                  響け！ <span className="text-pink-500">ユーフォニアム</span>
                </h1>
                <p className="text-slate-400 text-lg text-center w-full md:w-2/3 lg:w-5/6 lg:text-left sm:px-12 lg:px-0">
                  Sound! Euphonium or Hibike! Euphonium is a Japanese novel
                  written by Ayano Takeda, published on December 5, 2013 by
                  Takarajimasha.
                </p>
              </div>
              <div className="w-full items-center h-full flex justify-center lg:justify-end">
                <Image
                  src="/img/asuka.png"
                  width={500}
                  height={500}
                  objectPosition="center"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="min-h-screen bg-fixed bg-[url('/img/4.jpg')] md:bg-[url('/img/1.jpg')] bg-cover bg-center">
        <section className="min-h-screen min-w-full bg-slate-800 bg-opacity-50">
          <div className="container min-h-screen">
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const response = await fetch(
    "https://api.jikan.moe/v4/anime?q=hibike%20euphonium"
  );
  const data = await response.json();
  const hibike = await data;

  return {
    props: {
      hibike,
    },
  };
};
