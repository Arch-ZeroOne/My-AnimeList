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
  content: string;
};
const Page = async () => {
  const response = await fetch(
    "https://api.jikan.moe/v4/recommendations/anime",
  );

  if (!response.ok) {
    throw new Error("Failure in fetching data");
  }
  const { data } = await response.json();

  const anime = data;

  return (
    <div className="carousel w-[90%] mr-auto ml-auto">
      {anime.map((data: AnimeInfo, index: number) => {
        const next = index === anime.length - 1 ? 0 : index + 1;
        const prev = index === 0 ? anime.length - 1 : index - 1;
        const { image_url } = data.entry[1].images.jpg;
        const { large_image_url } = data.entry[1].images.jpg;
        const { title } = data.entry[1];
        const { content } = data;
        return (
          <div
            key={index}
            id={`slide${index}`}
            className="carousel-item relative w-full self-center "
          >
            <div className="card lg:card-side bg-base-100 shadow-sm  w-full  ">
              <figure>
                <img
                  src={large_image_url}
                  className="w-full "
                  alt="Anime Album"
                />
              </figure>
              <div className="card-body ">
                <div className="flex flex-col items-center justify-around w-full">
                  <h2 className="card-title">{title}</h2>
                  <p>{content}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary self-end ">
                      Anime Link
                    </button>
                  </div>
                </div>
              </div>

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
          </div>
        );
      })}
    </div>
  );
};

export default Page;
