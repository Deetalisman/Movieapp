"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import img3 from "./icon-nav-movies.svg";
import img8 from "./icon-nav-bookmark.svg";

function Mainbody({ AllMovies, Book, setBook }) {
  const [Trending, SetTrending] = useState([]);
  useEffect(() => {
    SetTrending(AllMovies);
  }, [AllMovies]);
  // function handleBook(Trend) {
  //   setBook((Book) => [...Book, Trend]);
  //   console.log(Book);
  // }
  return (
    <div className="mt-0 ml-24 sm:ml-32">
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
    <div className="sm:mt-24 mt-20 ">
      <p className="text-[1.3rem]">Trending</p>
      <div className="mt-5 flex justify-between flex-wrap lg:flex-nowrap">
        {Trending?.filter((Trends) => Trends.isTrending == true)?.map(
          (Trend) => (
            <Eachtrend key={Trend.title} Trend={Trend} />
          )
        )}
      </div>
    </div>
  );
}
function Eachtrend({ Trend }) {
  return (
    <div className="relative lg:mr-5 mr-3 sm:w-[30%] w-[45%] mb-4 md:mb-5 ">
      <Image
        src={Trend.thumbnail.trending.large}
        alt={Trend.title}
        width="100"
        height="400"
        className="w-[100%] md:h-[9rem] h-[7rem] rounded-md"
      />
      <Image
        src={img8}
        alt="meeeeeeee"
        width="20"
        className="mt-10 cursor-pointer absolute top1 right-2"
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
    <div className="sm:mt-7 mt-3">
      <p>Recommended for you</p>
      <div className="mt-3 flex flex-wrap justify-between">
        {AllMovies?.map((movies) => (
          <Movies key={movies.title} movies={movies} />
        ))}
      </div>
    </div>
  );
}

function Movies({ movies }) {
  return (
    <div className="lg:w-[24%] md:w-[30%] w-[48%]  mb-5 relative">
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
