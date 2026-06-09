interface Entry {
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  title: string;
  url: string;
}
type AnimeInfo = {
  mal_id: number;
  date: string;
  entry: Entry[];
};
const AnimeCarousel = async () => {
  const response = await fetch(
    "https://api.jikan.moe/v4/recommendations/anime",
  );

  if (!response.ok) {
    throw new Error("Failure in fetching data");
  }
  const { data } = await response.json();

  const anime = data.slice(0, 10);
  console.log(anime[0].entry[1].images);

  return (
    <div className="carousel w-md">
      {anime.map((data: AnimeInfo, index: number) => {
        const next = index === anime.length - 1 ? 0 : index + 1;
        const prev = index === 0 ? anime.length - 1 : index - 1;
        const { image_url } = data.entry[1].images.jpg;
        console.log(next);
        console.log(prev);

        return (
          <div
            key={index}
            id={`slide${index}`}
            className="carousel-item relative w-full"
          >
            <img src={image_url} className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#slide${prev}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${next}`} className="btn btn-circle">
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
