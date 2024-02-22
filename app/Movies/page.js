import Image from "next/image";
import img3 from "./icon-nav-movies.svg";
import img8 from "./icon-nav-bookmark.svg";
function Movieslist({ AllMovies }) {
  return (
    <div className=" ml-24 sm:ml-32 mt-24">
      <h1 className="text-[1.2rem] md:text-[1.5rem]">Movies</h1>
      <div className="flex flex-wrap justify-between mt-4">
        {AllMovies.filter((movies) => movies.category == "Movie").map(
          (movie) => (
            <Eachmovie key={movie.title} movie={movie} />
          )
        )}
      </div>
    </div>
  );
}

function Eachmovie({ movie }) {
  return (
    <div className="relative mb-5 lg:w-[22%] md:w-[30%] w-[48%] ">
      <Image
        src={movie.thumbnail.regular.small}
        alt={movie.title}
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
      <div className="mt-3">
        <div className="flex justify-between w-[8rem]">
          <p className="text-[0.7rem] text-gray-300">{movie.year}</p>
          <Image
            src={img3}
            alt="meee"
            width="15"
            className="mt-0 cursor-pointer ml-1"
          />
          <p className="text-[0.7rem] text-gray-300 ml-2">{movie.category}</p>
          <p className="text-[0.7rem] text-gray-300 ml-2">{movie.rating}</p>
        </div>
        <li className="mt-1 list-none text-[0.9rem]">{movie.title}</li>
      </div>
    </div>
  );
}
export default Movieslist;
