"use client";
import Image from "next/image";
import img2 from "./icon-nav-home.svg";
import img3 from "./icon-nav-movies.svg";
import img8 from "./icon-nav-bookmark.svg";
import img10 from "./image-avatar.png";
import img6 from "./icon-nav-tv-series.svg";
import img9 from "./logo.svg";

function Navbar({
  SetAll,
  SetBookmark,
  SetMovies,
  SetTvseries,
  All,
  Movies,
  Tvseries,
  Bookmark,
  setSearch,
  setSearchpost,
}) {
  function handleAll() {
    SetAll(true);
    SetMovies(false);
    SetTvseries(false);
    SetBookmark(false);
    setSearch("");
    setSearchpost(false);
  }
  function handleMovies() {
    SetAll(false);
    SetMovies(true);
    SetTvseries(false);
    SetBookmark(false);
    setSearch("");
    setSearchpost(false);
  }
  function handleTvseries() {
    SetAll(false);
    SetMovies(false);
    SetTvseries(true);
    SetBookmark(false);
    setSearch("");
    setSearchpost(false);
  }
  function handleBookmark() {
    SetAll(false);
    SetMovies(false);
    SetTvseries(false);
    SetBookmark(true);
    setSearch("");
    setSearchpost(false);
  }
  return (
    <div className="navbar  mt-7 ml-1 sm:ml-3 w-[4rem] sm:w-[5rem] rounded-2xl h-[90vh] py-10 px-5 sm:px-7 fixed z-10">
      <Image src={img9} alt="meeeeeeeee" width="30" className="img img1" />
      <Image
        src={img2}
        alt="mee"
        width="20"
        className={"mt-20 cursor-pointer img " + (All && "active")}
        onClick={handleAll}
      />
      <Image
        src={img3}
        alt="meee"
        width="20"
        className={"mt-10 cursor-pointer img " + (Movies && "active")}
        onClick={handleMovies}
      />
      <Image
        src={img6}
        alt="meeee"
        width="20"
        className={"mt-10 cursor-pointer img " + (Tvseries && "active")}
        onClick={handleTvseries}
      />
      <Image
        src={img8}
        alt="meeeeeeee"
        width="20"
        className={"mt-10 cursor-pointer img " + (Bookmark && "active")}
        onClick={handleBookmark}
      />
      <Image
        src={img10}
        alt="meeeeeeeeeee"
        width="30"
        className="mt-[13rem] cursor-pointer img img2"
      />
    </div>
  );
}

export default Navbar;
