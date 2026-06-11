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

  const anime = data.slice(0, 10);

  return (
    <div className=" grid grid-cols-3">
      {anime.map((data: AnimeInfo, index: number) => {
        // const next = index === anime.length - 1 ? 0 : index + 1;
        // const prev = index === 0 ? anime.length - 1 : index - 1;
        const { image_url } = data.entry[1].images.jpg;
        const { large_image_url } = data.entry[1].images.jpg;
        const { title } = data.entry[1];
        const { content } = data;
        return (
          <div>
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img src={image_url} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{content}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
