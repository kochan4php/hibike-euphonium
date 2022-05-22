const About = () => (
  <div className="min-h-screen bg-fixed bg-[url('/img/3.webp')] md:bg-[url('/img/1.webp')] bg-cover bg-center">
    <section className="min-h-screen min-w-full bg-slate-800 bg-opacity-60 py-20 md:py-0">
      <div className="container min-h-screen flex items-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
              About Hibike! Euphonium
            </h1>
          </div>
          <div className="text-white">
            <p className="text-md md:text-lg font-semibold mb-6">
              Sound! Euphonium or Hibike! Euphonium is a Japanese novel written
              by Ayano Takeda, published on December 5, 2013 by Takarajimasha.
              The story focuses on the Kitauji High School Concert Band, which
              is steadily improving thanks to the newly appointed
              director&apos;s strict instruction.
            </p>
            <p className="text-md md:text-lg font-semibold mb-6">
              The manga adaptation which is illustrated by Hami was serialized
              on the Kono Manga ga Sugoi! Web website. An anime adaptation,
              produced by Kyoto Animation and directed by Tatsuya Ishihara,
              began airing on April 7, 2015 and finished on June 30, 2015.
              Second season began airing in October 6, 2016 and finished in
              December 29, 2016.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
