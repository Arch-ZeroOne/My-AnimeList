import React from "react";
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
  const anime = await response.json();
  return (
    <div className="flex flex-col items-center">
      <div className="carousel w-[80%]">
        {anime.map((data: AnimeInfo) => (
          <div
            id={String(data.rank)}
            className="carousel-item w-full"
            key={data.rank}
          >
            <div className="card lg:card-side bg-indigo-600 shadow-sm w-full">
              <figure>
                <img src={data.picture_url} className="w-full" alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.rank}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">See Info</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {anime.map((data: AnimeInfo) => (
          <a href={String(`#${data.rank}`)} className="btn btn-xs">
            {data.rank}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AnimeCarousel;
