import Image from "next/image";
import img3 from "./icon-nav-movies.svg";
import img8 from "./icon-nav-bookmark.svg";
function Tvserieslist({ AllMovies }) {
  return (
    <div className=" ml-24 sm:ml-32 mt-24">
      <h1 className=" text-[1.2rem] md:text-[1.5rem]">Tv Series</h1>
      <div className="flex flex-wrap justify-between mt-4">
        {AllMovies?.filter((tvseries) => tvseries.category == "TV Series")?.map(
          (tvserie) => (
            <Eachtvseries key={tvserie.title} tvserie={tvserie} />
          )
        )}
      </div>
    </div>
  );
}
function Eachtvseries({ tvserie }) {
  return (
    <div className="relative mb-5  lg:w-[22%] md:w-[30%] w-[48%]">
      <Image
        src={tvserie.thumbnail.regular.small}
        alt={tvserie.title}
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
        <div className="flex justify-between w-[10rem]">
          <p className="text-[0.7rem] text-gray-300">{tvserie.year}</p>
          <Image
            src={img3}
            alt="meee"
            width="15"
            className="mt-0 cursor-pointer ml-1"
          />
          <p className="text-[0.7rem] text-gray-300 ml-2">{tvserie.category}</p>
          <p className="text-[0.7rem] text-gray-300 ml-2">{tvserie.rating}</p>
        </div>
        <li className="mt-1 list-none text-[0.9rem]">{tvserie.title}</li>
      </div>
    </div>
  );
}
export default Tvserieslist;
