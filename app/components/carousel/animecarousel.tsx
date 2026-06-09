type AnimeInfo = {
  title: string;
  picture_url: string;
  rank: number;
};
const AnimeCarousel = async () => {
  const response = await fetch(
    "https://myanimelist.p.rapidapi.com/anime/top/all?p=1",
    {
      headers: {
        "x-rapidapi-key": "b87e99e919msh6176ee1540351d0p17b2b8jsn6ad19e3992f3",
        "x-rapidapi-host": "myanimelist.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failure in fetching data");
  }
  const result = await response.json();
  const anime = result.slice(0, 10);

  // const handleNext = () => {
  //   setCurrentIndex((previous) =>
  //     previous === "#10" ? `#${10}` : `${previous + 1}`,
  //   );
  // };

  // const handlePrevious = () => {
  //   setCurrentIndex((previous) =>
  //     previous === "#10" ? `#${10}` : `${previous - 1}`,
  //   );
  // };

  return (
    <div className="carousel w-md">
      {anime.map((data: AnimeInfo, index: number) => {
        const next = index === anime.length ? 0 : index + 1;
        const prev = index === anime.length ? anime.length - 1 : index - 1;

        return (
          <div id={String(data.rank)} className="carousel-item relative w-full">
            <img src={data.picture_url} className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`slide#${prev}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`slide#${next}`} className="btn btn-circle">
                ❯
              </a>
              {}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeCarousel;
