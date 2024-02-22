"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import img3 from "./icon-nav-movies.svg";
import img8 from "./icon-nav-bookmark.svg";
import Loading from "../loading";

function Mainbody({ AllMovies }) {
  const [Trending, SetTrending] = useState([]);
  useEffect(() => {
    SetTrending(AllMovies);
  });
  return (
    <div className="mt-0 ml-32 w-[90%]">
      <Mainmain
        AllMovies={AllMovies}
        SetTrending={SetTrending}
        Trending={Trending}
      />
      <Recommended AllMovies={AllMovies} />
    </div>
  );
}

function Mainmain({ AllMovies, SetTrending, Trending }) {
  return (
    <div className="mt-24 ">
      <p className="text-[1.3rem]">Trending</p>
      <div className="mt-5 trending">
        {Trending.filter((Trends) => Trends.isTrending == true).map((Trend) => (
          <Eachtrend key={Trend.title} Trend={Trend} />
        ))}
      </div>
    </div>
  );
}
function Eachtrend({ Trend }) {
  return (
    <div className=" w-[40%] trend relative mr-5">
      <Image
        src={Trend.thumbnail.trending.large}
        alt={Trend.title}
        width="100"
        height="100"
        className="w-[100%] rounded-md"
      />
      <Image
        src={img8}
        alt="meeeeeeee"
        width="20"
        className="mt-10 cursor-pointer absolute top1 right-2 "
      />
      <div className="absolute top left-3">
        <div className="flex justify-between">
          <p className="text-[0.7rem] text-gray-300">{Trend.year}</p>
          <Image
            src={img3}
            alt="meee"
            width="15"
            className="mt-0 cursor-pointer ml-1"
          />
          <p className="text-[0.7rem] text-gray-300 ml-2">{Trend.category}</p>
          <p className="text-[0.7rem] text-gray-300 ml-2">{Trend.rating}</p>
        </div>
        <li className="mt-1 list-none text-[0.7rem]">{Trend.title}</li>
      </div>
    </div>
  );
}

function Recommended({ AllMovies }) {
  return (
    <div className="mt-7 ">
      <p>Recommended for you</p>
      <div className="mt-3 flex flex-wrap justify-between">
        {AllMovies.map((movies) => (
          <Movies key={movies.title} movies={movies} />
        ))}
      </div>
    </div>
  );
}

function Movies({ movies }) {
  return (
    <div className="w-[24%] mb-5 relative">
      <Image
        src={movies.thumbnail.regular.medium}
        width="100"
        height="70"
        alt={movies.title}
        className="w-[100%] rounded-md"
      />
      <Image
        src={img8}
        alt="meeeeeeee"
        width="20"
        className="mt-10 cursor-pointer absolute top1 right-2 "
      />
      <div className="mt-2">
        <div className="flex">
          <p className="text-[0.7rem] text-gray-300">{movies.year}</p>
          <Image
            src={img3}
            alt="meee"
            width="15"
            className="mt-0 cursor-pointer  ml-3"
          />
          <p className="text-[0.7rem] text-gray-300 ml-3">{movies.category}</p>
          <p className="text-[0.7rem] text-gray-300 ml-3">{movies.rating}</p>
        </div>
        <li className="mt-1 list-none text-[0.9rem]">{movies.title}</li>
      </div>
    </div>
  );
}
export default Mainbody;
