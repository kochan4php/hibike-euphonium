import { getNovelHibikeEuphonium } from "@/action";
import { ErrorMessage, Loading, MainCard, TitleSection } from "@/components";
import { RenderIfFalse, RenderIfTrue } from "@/utils";
import { useEffect, useState } from "react";

const Novel = () => {
  const [novel, setNovel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const res = await getNovelHibikeEuphonium();

    if (res.status === 200) {
      if (res.data?.success !== false) {
        setNovel(res.data.data);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="min-w-full py-7">
      <RenderIfTrue isTrue={isLoading}>
        <Loading />
      </RenderIfTrue>
      <RenderIfFalse isFalse={isLoading}>
        <div className="container px-0 lg:px-4">
          <TitleSection centerText>Novel</TitleSection>
          <RenderIfTrue isTrue={novel.length > 0}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-6 mt-7">
              {novel.map(({ mal_id, images, title, score }) => {
                if (mal_id === 129104 || mal_id === 10404) return;

                return (
                  <MainCard
                    key={mal_id}
                    path={`/novel/${mal_id}`}
                    id={mal_id}
                    image={images?.webp?.large_image_url}
                    title={title}
                    score={score}
                    py="py-5"
                    fontsize="text-base"
                  />
                );
              })}
            </div>
          </RenderIfTrue>
          <RenderIfFalse isFalse={novel.length > 0}>
            <ErrorMessage message="Gagal mengambil data dari API, coba refresh ulang browsernya" />
          </RenderIfFalse>
        </div>
      </RenderIfFalse>
    </section>
  );
};

export default Novel;
