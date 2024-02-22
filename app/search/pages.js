import Image from "next/image";
import img5 from "./icon-search.svg";

function Searchbar({ Search, setSearch, handleSearch }) {
  return (
    <div className="ml-24 sm:ml-32 w-[90%] search">
      <div className="flex fixed z-20 fix w-[90%] py-4 pt-10 search1">
        <div onClick={handleSearch}>
          <Image
            src={img5}
            alt="meeeee"
            width="25"
            className=" cursor-pointer"
          />
        </div>
        <input
          type="text"
          placeholder="Search for movies or TV series"
          className="bg-transparent w-[20rem] ml-3 text-sm outline-none"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Searchbar;
