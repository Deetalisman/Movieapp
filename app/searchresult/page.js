import Image from "next/image";
import img3 from "./icon-nav-movies.svg";
import img8 from "./icon-nav-bookmark.svg";
function Searchresult({ AllMovies, Search }) {
  return (
    <div className=" ml-24 sm:ml-32 mt-24 ">
      {Search !== "" ? <p>Result for {Search}</p> : <p>Not Found</p>}
      {Search !== "" && (
        <div className="flex justify-between flex-wrap mt-5">
          {AllMovies.filter((searchres) =>
            searchres.title.toLowerCase().includes(Search.toLowerCase())
          ).map((searchr) => (
            <Searchresults key={searchr.title} searchr={searchr} />
          ))}
        </div>
      )}
    </div>
  );
}
function Searchresults({ searchr }) {
  return (
    <div className="mb-5 relative  lg:w-[22%] md:w-[30%] w-[48%]">
      <Image
        src={searchr.thumbnail.regular.medium}
        width="100"
        height="100"
        alt={searchr.title}
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
          <p className="text-[0.6rem] text-gray-300">{searchr.year}</p>
          <Image
            src={img3}
            alt="meee"
            width="15"
            className="mt-0 cursor-pointer  ml-3"
          />
          <p className="text-[0.6rem] text-gray-300 ml-3">{searchr.category}</p>
          <p className="text-[0.6rem] text-gray-300 ml-3">{searchr.rating}</p>
        </div>
        <li className="mt-2 list-none text-[0.7rem]">{searchr.title}</li>
      </div>
    </div>
  );
}
export default Searchresult;
